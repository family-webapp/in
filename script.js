document.getElementById("loginform").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent actual form submission

    const username = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const password = document.getElementById("password").value.trim();

    const apiUrl = "https://script.google.com/macros/s/AKfycbzATddWEuitUq02t0iZYxbkJdoVKQRz26FV9oD3I5b3P1Zzd-1ePsoNB7mWoU4dMtdxMQ/exec" + 
                   `?username=${encodeURIComponent(username)}&age=${encodeURIComponent(age)}&password=${encodeURIComponent(password)}`;

    try {
        const response = await fetch(apiUrl, { method: "GET" });
        const result = await response.json();

        if (result.success) {
            window.location.href = "home.html"; // Redirect to home page
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to connect to server.");
    }
});
