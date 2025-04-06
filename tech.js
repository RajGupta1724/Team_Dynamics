document.addEventListener("DOMContentLoaded", () => {
    const languages = document.querySelectorAll(".lang span");
    const optionsDiv = document.getElementById("options");
    const langTitle = document.getElementById("lang-title");
    const dropdown = document.querySelector(".dropdown");
    const submenu = document.querySelector(".submenu");
    const chatBot = document.getElementById("chatbot");
    const chatToggle = document.getElementById("chat-toggle");
    const chatContent = document.getElementById("chat-content");
    const closeChat = document.getElementById("close-chat");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    const languageInfo = {
        "C": "C is a powerful general-purpose language used in systems and embedded programming.",
        "C++": "C++ builds on C with OOP support. Ideal for performance-heavy apps like games and engines.",
        "Java": "Java is platform-independent and widely used in enterprise, web, and Android development.",
        "Python": "Python is beginner-friendly and used for AI, ML, web dev, and automation.",
        "C#": "C# is great for Windows apps, game dev with Unity, and web apps via .NET.",
        "JavaScript": "JavaScript powers dynamic web pages and full-stack development (Node.js).",
        "PHP": "PHP is a backend scripting language often used in web development (e.g., WordPress).",
        "SQL": "SQL is used to manage and query relational databases (MySQL, PostgreSQL, etc.).",
        "HTML": "HTML structures web content. It's the foundation of all web pages."
    };

    // Language click
    languages.forEach(lang => {
        lang.addEventListener("click", (event) => {
            const selectedLang = event.target.textContent;
            langTitle.textContent = `${selectedLang} Options`;
            optionsDiv.style.top = `100px`;
            optionsDiv.style.left = `20px`;
            optionsDiv.style.display = "block";
            dropdown.classList.remove("active");

            // Update chatbot content
            chatContent.innerHTML = `<p><strong>${selectedLang}:</strong> ${languageInfo[selectedLang] || "Content coming soon!"}</p>`;
            chatBot.style.display = "flex";
        });
    });

    // Toggle Documentation dropdown
    dropdown.addEventListener("click", (event) => {
        event.stopPropagation();
        dropdown.classList.toggle("active");
    });

    // Hide options and dropdown if clicking outside
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".lang") && !optionsDiv.contains(event.target)) {
            optionsDiv.style.display = "none";
            dropdown.classList.remove("active");
        }
    });

    // Toggle chatbot visibility
    chatToggle.addEventListener("click", () => {
        chatBot.style.display = chatBot.style.display === "flex" ? "none" : "flex";
    });

    closeChat.addEventListener("click", () => {
        chatBot.style.display = "none";
    });

    // Toggle dark mode
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });
});

// Quiz modal functions
function openQuiz() {
    document.getElementById("quizModal").style.display = "block";
}

function closeQuiz() {
    document.getElementById("quizModal").style.display = "none";
}

// Run code in live editor
function runCode() {
    const codeInput = document.getElementById("code-input").value;
    const output = document.getElementById("output");
    output.srcdoc = codeInput;
}
