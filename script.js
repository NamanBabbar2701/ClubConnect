let currentIndex = 0;
const eventsContainer = document.querySelector('.events');
const events = document.querySelectorAll('.event');

function showNextEvent() {
    currentIndex = (currentIndex + 1) % events.length;
    const offset = -currentIndex * 320; // Adjust based on event width + gap
    eventsContainer.style.transform = `translateX(${offset}px)`;
}

setInterval(showNextEvent, 3000); // Change event every 3 seconds

document.querySelectorAll(".event button").forEach((button) => {
    button.addEventListener("click", (e) => {
        const eventCard = e.target.closest(".event");
        const eventName = eventCard.querySelector("h3").innerText;
        const eventDate = eventCard.querySelector("p:nth-child(2)").innerText.split(": ")[1];
        const eventLocation = eventCard.querySelector("p:nth-child(3)").innerText.split(": ")[1];
        const eventPrice = eventCard.querySelector("p:nth-child(4)").innerText.split(": ")[1];

        localStorage.setItem("eventDetails", JSON.stringify({ eventName, eventDate, eventLocation, eventPrice }));
        window.location.href = "book-now.html";
    });
});
