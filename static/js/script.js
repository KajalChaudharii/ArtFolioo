// ----------------------------------
// Data Model
// ----------------------------------
const gallerySections = [
    {
        icon: "🎨",
        label: "Paintings",
        image: "static/images/Painting/Painting_1.png",
        items: [
            {
                title: "Painting Collection",
                details: {
                    size: "Medium",
                    color: "Various",
                    date: "2024-01-01"
                },
                images: [
                    "static/images/Painting/Painting_1.png",
                    "static/images/Painting/Painting_2.png",
                    "static/images/Painting/Painting_3.png",
                    "static/images/Painting/Painting_4.png",
                    "static/images/Painting/Painting_5.png",
                    "static/images/Painting/Painting_6.png",
                    "static/images/Painting/Painting_7.png",
                    "static/images/Painting/Painting_8.jpg",
                    "static/images/Painting/Painting_9.jpg",
                    "static/images/Painting/Painting_10.jpg",
                    "static/images/Painting/Painting_11.jpg",
                    "static/images/Painting/Painting_12.jpg",
                    "static/images/Painting/Painting_13.jpg",
                    "static/images/Painting/Painting_14.jpg",
                    "static/images/Painting/Painting_15.jpg",
                    "static/images/Painting/Painting_16.jpg"
                ]
            }
        ]
    },
    {
        icon: "🖼️",
        label: "Prints",
        image: "static/images/Prints/Etching/Etching_1.png",
        subSections: [
            {
                title: "Etching",
                items: [
                    {
                        title: "Etching Series",
                        details: {
                            size: "Medium",
                            color: "Black & White",
                            date: "2024-01-01"
                        },
                        images: [
                            "static/images/Prints/Etching/Etching_1.png",
                            "static/images/Prints/Etching/Etching_2_1.png",
                            "static/images/Prints/Etching/Etching_2_2.png",
                            "static/images/Prints/Etching/Etching_2_3.png",
                            "static/images/Prints/Etching/Etching_3.png",
                            "static/images/Prints/Etching/Etching_4.png",
                            "static/images/Prints/Etching/Etching_5.png",
                            "static/images/Prints/Etching/Etching_6.png",
                            "static/images/Prints/Etching/Etching_7_1.png",
                            "static/images/Prints/Etching/Etching_7_2.png",
                            "static/images/Prints/Etching/Etching_7_3.png"
                        ]
                    }
                ]
            },
            {
                title: "Lithography",
                items: [
                    {
                        title: "Litho Series",
                        details: {
                            size: "Medium",
                            color: "Grayscale",
                            date: "2024-01-01"
                        },
                        images: [
                            "static/images/Prints/Lithography/Litho_1.png",
                            "static/images/Prints/Lithography/Litho_2.png",
                            "static/images/Prints/Lithography/Litho_3.png",
                            "static/images/Prints/Lithography/Litho_3_1.png"
                        ]
                    }
                ]
            },
            {
                title: "Viscosity",
                items: [
                    {
                        title: "Viscosity Collection",
                        details: {
                            size: "Medium",
                            color: "Mixed",
                            date: "2024-01-01"
                        },
                        images: [
                            "static/images/Prints/Viscocity/Viscocity_1.jpg",
                            "static/images/Prints/Viscocity/Viscocity_2.jpg",
                            "static/images/Prints/Viscocity/Viscocity_3.jpg",
                            "static/images/Prints/Viscocity/Viscocity_4.jpg",
                            "static/images/Prints/Viscocity/Viscocity_5.jpg",
                            "static/images/Prints/Viscocity/Viscocity_6.jpg",
                            "static/images/Prints/Viscocity/Viscocity_7.jpg",
                            "static/images/Prints/Viscocity/Viscocity_8.jpg",
                            "static/images/Prints/Viscocity/Viscocity_9.jpg",
                            "static/images/Prints/Viscocity/Viscocity_10.jpg",
                            "static/images/Prints/Viscocity/Viscocity_11.jpg",
                            "static/images/Prints/Viscocity/Viscocity_12.jpg",
                            "static/images/Prints/Viscocity/Viscocity_14.jpg",
                            "static/images/Prints/Viscocity/Viscocity_15.jpg",
                            "static/images/Prints/Viscocity/Viscocity_16.jpg",
                            "static/images/Prints/Viscocity/Viscocity_17.jpg",
                            "static/images/Prints/Viscocity/Viscocity_18.jpg",
                            "static/images/Prints/Viscocity/Viscocity_19.jpg",
                            "static/images/Prints/Viscocity/Viscocity_20.jpg",
                            "static/images/Prints/Viscocity/Viscocity_21.jpg",
                            "static/images/Prints/Viscocity/Viscocity_22.jpg",
                            "static/images/Prints/Viscocity/Viscocity_23.jpg",
                            "static/images/Prints/Viscocity/Viscocity_25.jpg",
                            "static/images/Prints/Viscocity/Viscocity_26.jpg",
                            "static/images/Prints/Viscocity/Viscocity_27.jpg",
                            "static/images/Prints/Viscocity/Viscocity_28.jpg",
                            "static/images/Prints/Viscocity/Viscocity_29.jpg",
                            "static/images/Prints/Viscocity/Viscocity_30.jpg",
                            "static/images/Prints/Viscocity/Viscocity_31.jpg",
                            "static/images/Prints/Viscocity/Viscocity_32.jpg",
                            "static/images/Prints/Viscocity/Viscocity_33.jpg"
                        ]
                    }
                ]
            }
        ]
    },
    {
        icon: "📚",
        label: "Archives",
        image: "static/images/Archives/Old wing SD hall room - 1.png",
        items: [
            {
                title: "Old Wing SD Hall Room Collection",
                details: {
                    size: "Various",
                    color: "Mixed",
                    date: "2024-04-01"
                },
                images: [
                    "static/images/Archives/Old wing SD hall room - 1.png",
                    "static/images/Archives/Old wing SD hall room - 2.png",
                    "static/images/Archives/Old wing SD hall room - 3.png",
                    "static/images/Archives/Old wing SD hall room - 4.png",
                    "static/images/Archives/Old wing SD hall room - 5.png",
                    "static/images/Archives/Old wing SD hall room - 6.png",
                    "static/images/Archives/Old wing SD hall room - 7.png",
                    "static/images/Archives/Old wing SD hall room - 8.png",
                    "static/images/Archives/Old wing SD hall room - 9.png",
                    "static/images/Archives/Old wing SD hall room - 10.png",
                    "static/images/Archives/Old wing SD hall room - 11.png",
                    "static/images/Archives/Old wing SD hall room - 12.png",
                    "static/images/Archives/Old wing SD hall room - 13.png",
                    "static/images/Archives/Old wing SD hall room - 14.png",
                    "static/images/Archives/Old wing SD hall room - 15.png",
                    "static/images/Archives/Old wing SD hall room - 16.png",
                    "static/images/Archives/Old wing SD hall room - 17.png",
                    "static/images/Archives/Old wing SD hall room - 18.png",
                    "static/images/Archives/Old wing SD hall room - 19.png",
                    "static/images/Archives/Old wing SD hall room - 20.png",
                    "static/images/Archives/Old wing SD hall room - 21.png",
                    "static/images/Archives/Old wing SD hall room - 22.png",
                    "static/images/Archives/Old wing SD hall room - 23.png",
                    "static/images/Archives/Old wing SD hall room - 24.png",
                    "static/images/Archives/Old wing SD hall room - 25.png",
                    "static/images/Archives/Old wing SD hall room - 26.png",
                    "static/images/Archives/Old wing SD hall room - 27.png",
                    "static/images/Archives/Old wing SD hall room - 28.png",
                    "static/images/Archives/Old wing SD hall room - 29.png",
                    "static/images/Archives/Old wing SD hall room - 30.png",
                    "static/images/Archives/Old wing SD hall room - 31.png",
                    "static/images/Archives/Old wing SD hall room - 32.png",
                    "static/images/Archives/Old wing SD hall room - 33.png",
                    "static/images/Archives/Old wing SD hall room - 34.png",
                    "static/images/Archives/Old wing SD hall room - 35.png",
                    "static/images/Archives/Old wing SD hall room - 36.png",
                    "static/images/Archives/Old wing SD hall room - 37.png",
                    "static/images/Archives/Old wing SD hall room - 38.png",
                    "static/images/Archives/Old wing SD hall room - 39.png",
                    "static/images/Archives/Old wing SD hall room - 40.png",
                    "static/images/Archives/Old wing SD hall room - 41.png",
                    "static/images/Archives/Old wing SD hall room - 42.png",
                    "static/images/Archives/Old wing SD hall room - 43.png",
                    "static/images/Archives/Old wing SD hall room - 44.png",
                    "static/images/Archives/Old wing SD hall room - 45.png"
                ]
            }
        ]
    },
    {
        icon: "🎬",
        label: "Video film",
        image: "https://drive.google.com/thumbnail?id=1-185QQB92qUFZwfv_rArYxARuGPI8tAK", // Optional: Thumbnail using Drive file ID
        items: [
            {
                title: "Documentary Footage",
                details: {
                    size: "HD",
                    color: "Color",
                    date: "2024-04-23"
                },
                videos: [
                    "https://drive.google.com/file/d/1-185QQB92qUFZwfv_rArYxARuGPI8tAK/preview"
                ]
            }
        ]
    }
];
// ----------------------------------
// Element References & State
// ----------------------------------
const galleryContainer = document.getElementById("gallerySection");
const sectionItems = document.getElementById("sectionItems");
const itemList = document.getElementById("itemList");
const loadingSpinner = document.getElementById("loadingSpinner");

let currentSectionIndex = null;
let currentSubSectionIndex = null;

// ----------------------------------
// Render Main Gallery
// ----------------------------------
function renderGallery() {
    
    galleryContainer.innerHTML = "";
    gallerySections.forEach((section, idx) => {
        const card = document.createElement("div");
        card.className =
            "card-hover bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-md border border-purple-400 cursor-pointer transition-all duration-300 p-4 flex items-center justify-center";
        card.onclick = () => renderSectionItems(idx);

        card.innerHTML = `
        <div class="text-white text-center">
          <div class="text-3xl mb-2">${section.icon}</div>
          <div class="text-lg font-semibold">${section.label}</div>
        </div>
      `;

        galleryContainer.appendChild(card);
    });
    
}

// ----------------------------------
// Render Sub‑section List or Direct Items
// ----------------------------------
function renderSectionItems(sectionIndex) {
    
    currentSectionIndex = sectionIndex;
    currentSubSectionIndex = null;

    const section = gallerySections[sectionIndex];
    itemList.innerHTML = ""; // Clear current items

    // === Section Header ===
    const sectionHeader = document.createElement("div");
    sectionHeader.className = "flex flex-col sm:flex-row items-center justify-between gap-4 my-4";

    const titleEl = createTitle(section.label);
    titleEl.classList.add("text-white", "text-2xl", "font-bold");
    sectionHeader.appendChild(titleEl);

    const backButton = createBackButton("← Back to Gallery", goBackToGallery);
    backButton.className = "text-white text-base font-medium hover:underline cursor-pointer";
    sectionHeader.appendChild(backButton);

    itemList.appendChild(sectionHeader);

    // === Grid of cards ===
    const cardGrid = document.createElement("div");
    cardGrid.className = "grid grid-cols-1 md:grid-cols-2 gap-4 my-6 w-full";
    itemList.appendChild(cardGrid);

    if (section.subSections) {
        // === Sub-section cards
        section.subSections.forEach((sub, subIdx) => {
            const subCard = document.createElement("div");
            subCard.className =
                "card-hover bg-white/10 backdrop-blur-md rounded-2xl shadow-md border border-purple-400 cursor-pointer transition-all duration-300 p-4 flex items-center justify-center text-center";
            subCard.onclick = () => renderSubSectionItems(sectionIndex, subIdx);
            subCard.innerHTML = `
          <div class="text-white">
            <div class="text-lg font-semibold">${sub.title}</div>
          </div>
        `;
            cardGrid.appendChild(subCard);
        });
    } else {
        // === Direct item cards (no image thumbnail, just title)
        if (section.items.length === 1) {
            handleItemClick(section.items[0], section.items[0].videos?.length ? section.items[0].videos : section.items[0].images || [], sectionIndex);
            return;
        }

        section.items.forEach(item => {
            const itemCard = createItemCard(item, sectionIndex);
            cardGrid.appendChild(itemCard);
        });
    }

    galleryContainer.classList.add("hidden");
    sectionItems.classList.remove("hidden");
    
}

// ----------------------------------
// Render Items of a Chosen Sub‑section
// ----------------------------------
function renderSubSectionItems(sectionIndex, subIndex) {
    
    currentSubSectionIndex = subIndex;
    const section = gallerySections[sectionIndex];
    const subSection = section.subSections[subIndex];
    itemList.innerHTML = ""; // Clear current items

    // === Title at the top
    const titleEl = createTitle(`${section.label} — ${subSection.title}`);
    titleEl.classList.add("text-white", "text-2xl", "font-bold", "mb-4");
    itemList.appendChild(titleEl);

    // === Grid for item cards
    const cardGrid = document.createElement("div");
    cardGrid.className = "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6";
    itemList.appendChild(cardGrid);

    // === Auto-skip if only one item
    if (subSection.items.length === 1) {
        const soleItem = subSection.items[0];
        handleItemClick(soleItem, soleItem.videos?.length ? soleItem.videos : soleItem.images || [], sectionIndex, subIndex);
        return;
    }

    // === Render clean text-only cards
    subSection.items.forEach(item => {
        const card = createItemCard(item, sectionIndex, subIndex);
        cardGrid.appendChild(card);
    });

    // === Back Button at the bottom
    const backButton = createBackButton("← Back to “" + section.label + "”", () => renderSectionItems(sectionIndex));
    backButton.className = "text-center text-indigo-400 hover:text-indigo-200 mb-4";
    itemList.appendChild(backButton);


    galleryContainer.classList.add("hidden");
    sectionItems.classList.remove("hidden");
}

function renderItemImages(item, mediaList) {
    
    itemList.innerHTML = "";

    // Title
    const titleEl = createTitle(item.title);
    titleEl.className = "text-white text-2xl font-bold mb-4";
    itemList.appendChild(titleEl);

    const backButtonTop = createBackButton("← Back", () => {
        console.log(`currentSubSectionIndex: ${currentSubSectionIndex}, currentSectionIndex: ${currentSectionIndex}`);

        if (currentSectionIndex === 0 || currentSectionIndex === 2 || currentSectionIndex === 3) {
            return goBackToGallery();
        } else {
            renderSectionItems(currentSectionIndex);
        }
    });

    backButtonTop.className = "text-center text-indigo-400 hover:text-indigo-200 mt-6";
    itemList.appendChild(backButtonTop);

    // Media container (1 per row)
    const mediaListEl = document.createElement("div");
    mediaListEl.className = "flex flex-col gap-4";

    mediaList.forEach((media, idx) => {
        const mediaWrapper = document.createElement("div");
        mediaWrapper.className = "rounded-xl overflow-hidden border border-purple-400 bg-white/5";

        let mediaEl;
        if (media.includes("drive.google.com")) {
            // Create a clickable button or placeholder
            mediaEl = document.createElement("div");
            mediaEl.className = "w-full h-[200px] flex items-center justify-center bg-black text-white rounded-lg border border-purple-400 cursor-pointer hover:bg-white/10 transition";
            mediaEl.innerHTML = `
              <div class="text-center">
                <p class="text-xl mb-2">🎬 Google Drive Video</p>
                <button class="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-1 px-4 rounded">
                  Watch Video
                </button>
              </div>
            `;
            mediaEl.onclick = () => {
              const previewURL = media.replace("/view", "/preview");
              window.open(previewURL, "_blank");
            };
          } 
          else if (media.endsWith(".mp4") || media.endsWith(".webm") || media.endsWith(".ogg")) {
            mediaEl = document.createElement("video");
            mediaEl.src = media;
            mediaEl.controls = true;
            mediaEl.className = "w-full max-h-[300px] object-contain bg-black";
          } 
          else {
            mediaEl = document.createElement("img");
            mediaEl.src = media;
            mediaEl.alt = item.title;
            mediaEl.className = "w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105";
            mediaEl.onclick = () => openViewer(item, mediaList, idx);
          }          

        mediaWrapper.appendChild(mediaEl);
        mediaListEl.appendChild(mediaWrapper);
    });

    itemList.appendChild(mediaListEl);

    // Back Button
    const backButton = createBackButton("← Back", () => {
        console.log(`currentSubSectionIndex: ${currentSubSectionIndex}, currentSectionIndex: ${currentSectionIndex}`);
        // Check if we are in a sub-section or main section
        if (typeof currentSubSectionIndex === "number" && currentSubSectionIndex >= 0) {
            // If we're in a sub-section, navigate back to that sub-section's items
            renderSubSectionItems(currentSectionIndex, currentSubSectionIndex);
        } else {
            // If we're not in a sub-section, navigate back to the main section's items
            renderSectionItems(currentSectionIndex);
        }
    });

    backButton.className = "text-center text-indigo-400 hover:text-indigo-200 mt-6";
    itemList.appendChild(backButton);

    galleryContainer.classList.add("hidden");
    sectionItems.classList.remove("hidden");
    
}


// ----------------------------------
// Helper: Create an Item Card (Thumbnail + Title)
// ----------------------------------
function createItemCard(item, sectionIndex, subSectionIndex = null) {
    const card = document.createElement("div");
    card.className = "card-hover bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow border border-purple-400 cursor-pointer transition-all duration-300";

    const mediaSource = item.images ? item.images[0] : item.videos ? item.videos[0] : '';

    card.innerHTML = `
      <img src="${mediaSource}" alt="${item.title}" class="w-full h-32 object-cover" loading="lazy" />
      <div class="text-center p-2 text-white font-medium">${item.title}</div>
    `;

    card.onclick = () => handleItemClick(item, item.videos || item.images || [], sectionIndex, subSectionIndex);

    return card;
}

// ----------------------------------
// Helpers: Create Title & Back Button
// ----------------------------------
function createTitle(text) {
    const h2 = document.createElement("h2");
    h2.className = "text-2xl font-bold text-white my-4";
    h2.innerText = text;
    return h2;
}

function createBackButton(label, onClick) {
    const btn = document.createElement("button");
    btn.className = "text-white bg-indigo-500 rounded-md py-3 px-6 text-xl mb-4 hover:bg-indigo-700 transition-all";
    btn.innerText = label;
    btn.onclick = onClick;
    return btn;
}

// ----------------------------------
// Back to Gallery
// ----------------------------------
function goBackToGallery() {
    sectionItems.classList.add("hidden");
    galleryContainer.classList.remove("hidden");
}

// ----------------------------------
// Image Viewer Logic (unchanged)
// ----------------------------------
let currentImages = [];
let currentIndex = 0;
let currentItem = null;

function openViewer(item, mediaList, idx) {
    
    currentImages = mediaList;
    currentIndex = idx;
    currentItem = item;
    updateViewer();

    const viewer = document.getElementById("imageViewer");
    viewer.classList.remove("hidden");
    viewer.classList.add("show");
    
}

function closeViewer() {
    const viewer = document.getElementById("imageViewer");
    viewer.classList.add("hidden");
    viewer.classList.remove("show");
    document.getElementById("viewerDetails").classList.add("hidden");
}

function updateViewer() {
    const viewerImage = document.getElementById("viewerImage");
    const imageCounter = document.getElementById("imageCounter");
    const viewerDetails = document.getElementById("viewerDetails");

    const currentMedia = currentImages[currentIndex];
    console.log(`currentMedia: ${currentMedia}`);
    

    // Hide all viewers initially
    viewerImage.style.display = 'none';

    // === Image ===
    if (/\.(jpg|jpeg|png|gif)$/i.test(currentMedia)) {
        viewerImage.src = currentMedia;
        viewerImage.onload = () => 
        viewerImage.style.display = 'block';
    }
    // === Google Drive video ===
    else if (currentMedia.includes("drive.google.com")) {
        
        const previewURL = currentMedia.replace("/view", "/preview");
        window.open(previewURL, "_blank"); // Open in new tab
        closeViewer();
        return; // Exit early so we don't show viewer UI
    }

    // Update counter + metadata
    imageCounter.innerText = `${currentIndex + 1} / ${currentImages.length}`;
    document.getElementById("detailTitle").innerText = currentItem.title;
    document.getElementById("detailMeta").innerText = `📐 ${currentItem.details.size} • 🎨 ${currentItem.details.color} • 📅 ${currentItem.details.date}`;
}

function nextImage() {
    if (currentIndex < currentImages.length - 1) {
        currentIndex++;
        updateViewer();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateViewer();
    }
}

function toggleDetails() {
    const detailBox = document.getElementById("viewerDetails");
    const img = document.getElementById("viewerImage");
    detailBox.classList.toggle("hidden");
    img.classList.toggle("scale-110");
}

function handleItemClick(item, mediaList, sectionIndex, subSectionIndex = null) {
    currentSectionIndex = sectionIndex;
    currentSubSectionIndex = subSectionIndex;
    renderItemImages(item, mediaList);
}

// ----------------------------------
// Initialize
// ----------------------------------
renderGallery();

