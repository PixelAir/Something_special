document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Ensures autoplay works after user interaction
    document.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().catch(error => console.log("Autoplay blocked:", error));
        }
    }, { once: true });

    // Play/Pause Toggle Function (Optional)
    let toggleMusic = document.createElement("button");
    toggleMusic.innerText = "🔊 Play/Pause Music";
    toggleMusic.style.position = "fixed";
    toggleMusic.style.bottom = "20px";
    toggleMusic.style.right = "20px";
    toggleMusic.style.padding = "10px";
    toggleMusic.style.border = "none";
    toggleMusic.style.borderRadius = "5px";
    toggleMusic.style.cursor = "pointer";
    toggleMusic.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    toggleMusic.style.color = "white";

    document.body.appendChild(toggleMusic);

    toggleMusic.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            toggleMusic.innerText = "🔇 Pause Music";
        } else {
            audio.pause();
            toggleMusic.innerText = "🔊 Play Music";
        }
    });
});
