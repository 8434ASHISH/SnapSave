function startDownload() {
    const url = document.getElementById("videoUrl").value.trim();
    const resultDiv = document.getElementById("result");
    
    if (!url) {
        resultDiv.innerHTML = "<div class='error'>Please enter a URL!</div>";
        return;
    }

    // YouTube Detection
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
        resultDiv.innerHTML = "<div class='loading'>Preparing YouTube download...</div>";
        setTimeout(() => {
            window.open(`https://yt1s.com/en?q=${encodeURIComponent(url)}`, "_blank");
        }, 1500);
    }
    // Instagram Detection
    else if (url.includes("instagram.com")) {
        resultDiv.innerHTML = "<div class='loading'>Processing Instagram link...</div>";
        setTimeout(() => {
            window.open(`https://downloadgram.org/video.php?url=${url}`, "_blank");
        }, 1500);
    }
    else {
        resultDiv.innerHTML = `
            <div class='error'>
                Only YouTube & Instagram links supported!<br>
                Example:<br>
                YouTube: https://youtu.be/abc123<br>
                Instagram: https://www.instagram.com/reel/xyz456/
            </div>
        `;
    }
}
