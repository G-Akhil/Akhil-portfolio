javascript
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        menuBtn.classList.remove("active");

        navLinks.classList.remove("active");

    });

});

/* =========================
   PROJECT VIDEO MODAL
========================= */

// =========================
// PROJECT VIDEO MODAL
// =========================

// ===============================
// VIDEO MODAL - PROJECTS + REELS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const videoModal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    const closeVideo = document.getElementById("closeVideo");

    // Project cards + Reel cards
    const videoCards = document.querySelectorAll(
        ".project-card[data-video], .reel-card[data-reel]"
    );

    // Convert Google Drive link to preview link
    function getDrivePreviewURL(url) {

        if (!url) return "";

        const match = url.match(
            /drive\.google\.com\/file\/d\/([^/]+)/
        );

        if (match) {
            const fileID = match[1];

            return `https://drive.google.com/file/d/${fileID}/preview`;
        }

        return url;
    }


    // Open video
    videoCards.forEach(card => {

        card.addEventListener("click", () => {

            let url = card.getAttribute("data-video");

            // If it is a reel
            if (!url) {
                url = card.getAttribute("data-reel");
            }

            if (!url || url.startsWith("YOUR_")) {
                alert("Please add a valid Google Drive video link.");
                return;
            }

            const previewURL = getDrivePreviewURL(url);

            videoFrame.src = previewURL;

            videoModal.classList.add("active");

        });

    });


    // Close video
    function closeVideoModal() {

        videoModal.classList.remove("active");

        videoFrame.src = "";

    }


    // Close button
    if (closeVideo) {
        closeVideo.addEventListener("click", closeVideoModal);
    }


    // Click outside
    videoModal.addEventListener("click", (event) => {

        if (event.target === videoModal) {
            closeVideoModal();
        }

    });


    // ESC key
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeVideoModal();
        }

    });

});