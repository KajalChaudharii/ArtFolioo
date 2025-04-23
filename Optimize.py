import os
from PIL import Image
from concurrent.futures import ProcessPoolExecutor, as_completed

# Constants
INPUT_FOLDER = 'static'
OUTPUT_FOLDER = 'static_optimized'
QUALITY = 40
SUPPORTED_FORMATS = ('.jpg', '.jpeg', '.png')

def optimize_image(input_output_paths):
    input_path, output_path = input_output_paths
    try:
        with Image.open(input_path) as img:
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")

            os.makedirs(os.path.dirname(output_path), exist_ok=True)

            img.save(output_path, 'webp', quality=QUALITY, optimize=True)
            return f"✅ {input_path} → {output_path}"
    except Exception as e:
        return f"❌ {input_path}: {e}"

def gather_image_paths():
    paths = []
    for root, _, files in os.walk(INPUT_FOLDER):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in SUPPORTED_FORMATS:
                input_path = os.path.join(root, file)
                relative_path = os.path.relpath(input_path, INPUT_FOLDER)
                output_path = os.path.join(OUTPUT_FOLDER, os.path.splitext(relative_path)[0] + '.webp')
                paths.append((input_path, output_path))
    return paths

def process_images_parallel():
    paths = gather_image_paths()
    print(f"📦 Found {len(paths)} images to process...")

    with ProcessPoolExecutor() as executor:
        futures = [executor.submit(optimize_image, pair) for pair in paths]
        for future in as_completed(futures):
            print(future.result())

if __name__ == '__main__':
    process_images_parallel()
