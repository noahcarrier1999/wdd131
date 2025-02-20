const menuButton = document.querySelector(".menuButton");
const navLinksDiv = document.querySelector(".navLinksDiv");

function toggleMenu() {
    if (window.innerWidth < 1000) {
        navLinksDiv.classList.toggle("hide");
    }
}

function handleResize() {
    if (window.innerWidth >= 1000) {
        navLinksDiv.classList.remove("hide");
    } else {
        navLinksDiv.classList.add("hide");
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img class="mainImage" src="${pic}" alt="${alt}">
    </div>`;
}

function viewerHandler(event) {
    if (event.target.tagName === "IMG") {
        const alt = event.target.alt;
        const src = event.target.src.split("-")[0] + "-full.jpeg";

        // Generate HTML for the modal
        const htmlToInsert = viewerTemplate(src, alt);

        // Insert the HTML into the DOM
        document.body.insertAdjacentHTML("afterbegin", htmlToInsert);

        // Add an event listener to the close button
        const closeButton = document.querySelector(".close-viewer");
        closeButton.addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

// Event Listeners
menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewerHandler);

handleResize(); // Ensure initial state is set
