document.addEventListener("DOMContentLoaded", function () {
    // Ensures the DOM is fully loaded before any code runs

    // Form Validation
    const contactForm = document.getElementById("contactForm"); // Get the contact form element by ID
    if (contactForm) { // Check if the form exists in the DOM
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the form from submitting the traditional way

            // Retrieve form field values and trim any excess whitespace
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // Check if all fields are filled out
            if (!name || !email || !subject || !message) {
                alert("All fields are required!"); // Alert if any field is missing
                return; // Exit the function if fields are empty
            }

            // Validate the email format
            if (!email.includes("@")) {
                alert("Enter a valid email!"); // Alert if the email format is invalid
                return; // Exit the function if email is invalid
            }

            alert("Form submitted successfully!"); // Show a success message when the form is valid
        });
    }

    // Randomization Example (for facts)
    const facts = [
        "Fact: 1 in 3 people globally do not have access to safe drinking water.",
        "Fact: Millions can be saved from improved water management.",
        "Fact: Access to clean water reduces poverty and improves health.",
        "Fact: Sanitation reduces the spread of diseases such as cholera."
    ];

    const factSection = document.getElementById("fact-section"); // Get the fact section element by ID
    if (factSection) { // Check if the fact section exists in the DOM
        const factElement = document.createElement("p"); // Create a new paragraph element
        factElement.textContent = facts[Math.floor(Math.random() * facts.length)]; // Pick a random fact
        factSection.appendChild(factElement); // Add the fact to the fact section in the DOM
    }
});
