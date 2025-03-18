document.getElementById("loginform").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent actual form submission

    const username = document.getElementById("name").value.trim();
    const code = document.getElementById("code").value.trim();

    const apiUrl = "https://script.google.com/macros/s/AKfycbwcWLEnm1QINBdnzAVX1cq9_thbnwlwm7GtgwknmLeF4Owa3gF8dX9XLNtjs0dTAFqtcg/exec" + 
                   `?username=${encodeURIComponent(username)}&code=${encodeURIComponent(code)}`;

    try {
        const response = await fetch(apiUrl, { method: "GET" });
        const result = await response.json();

        if (result.success) {
            window.location.href = "home.html"; // Redirect to home page
        } else {
            alert("Error: " + result.error); // Show error if login fails
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to connect to server.");
    }
});
