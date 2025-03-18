document.getElementById("loginform").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent actual form submission

    const username = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const password = document.getElementById("password").value.trim();

    const apiUrl = "https://script.google.com/macros/s/AKfycbzEwvV-M2XBTDK_nCb0VUURGOExatMflSAIY-UxF8vdWKr6GZebJo0-QwJbRwTF7VecSg/exec" + 
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
