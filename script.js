document.addEventListener("DOMContentLoaded", () => {
    loadAdvisors();
});

// Load Advisors Immediately
function loadAdvisors() {
    const advisorsContainer = document.getElementById("advisors");

    const advisors = [
        { name: "John Doe", expertise: "Startup Funding", location: "San Francisco, USA", profile: "https://linkedin.com/in/johndoe" },
        { name: "Jane Smith", expertise: "Growth Marketing", location: "London, UK", profile: "https://linkedin.com/in/janesmith" },
        { name: "Arun Kumar", expertise: "Product Development", location: "Bangalore, India", profile: "https://linkedin.com/in/arunkumar" },
        { name: "Maria Lopez", expertise: "Business Strategy", location: "Madrid, Spain", profile: "https://linkedin.com/in/marialopez" }
    ];

    advisorsContainer.innerHTML = advisors.map(advisor => `
        <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 class="text-2xl font-semibold text-gray-800">${advisor.name}</h2>
            <p class="text-gray-600 text-lg">${advisor.expertise}</p>
            <p class="text-gray-500 text-sm mt-2">📍 ${advisor.location}</p>
            <a href="${advisor.profile}" target="_blank" 
                class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                🔗 View Profile
            </a>
        </div>
    `).join('');
}

// Chatbot Responses
const chatbotResponses = {
    "how to get funding for a startup": "You can secure funding through angel investors, venture capital, crowdfunding, or small business grants.",
    "best way to market my startup": "Utilize social media, SEO, paid advertising, influencer partnerships, and community building to reach your audience.",
    "how do i find co-founders": "Attend startup events, use platforms like CoFoundersLab, and network in industry-related communities.",
    "what are common startup mistakes": "Ignoring customer feedback, not validating ideas, mismanaging finances, and hiring too quickly.",
    "how to pitch my startup to investors": "Create a concise pitch deck, showcase traction, highlight market potential, and have a strong revenue model.",
    "what legal steps are needed to start a business": "Register your business, get necessary licenses, and set up tax and compliance structures.",
    "how can i validate my startup idea": "Build a prototype, conduct surveys, test with early adopters, and measure market demand.",
    "what are the best revenue models": "Subscription, freemium, affiliate marketing, and advertising models work well depending on your niche.",
    "how important is branding for a startup": "Branding builds trust, recognition, and loyalty—essential for long-term success.",
    "how do i attract my first customers": "Offer discounts, leverage referrals, create valuable content, and collaborate with influencers.",
    "should i bootstrap or seek investment": "Bootstrapping gives you control; investment helps you scale faster. Choose based on growth speed.",
    "how to scale my startup": "Focus on automation, hire key personnel, optimize operations, and expand to new markets."
};

// Get Chatbot Response
function getChatbotResponse() {
    const userInput = document.getElementById("userInput").value.toLowerCase().trim();
    const chatbotResponse = document.getElementById("chatbotResponse");

    chatbotResponse.innerHTML = chatbotResponses[userInput] || "Sorry, I don't have an answer for that yet.";
}

// Fill Input Box & Show Answer
function fillQuestion(element) {
    const question = element.innerText.toLowerCase();
    document.getElementById("userInput").value = question;
    getChatbotResponse();
}