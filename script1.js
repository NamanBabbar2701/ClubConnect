document.addEventListener("DOMContentLoaded", () => {
    const eventDetails = JSON.parse(localStorage.getItem("eventDetails"));
    if (eventDetails) {
        document.getElementById("event-name").value = eventDetails.eventName;
        document.getElementById("event-date").value = eventDetails.eventDate;
        document.getElementById("event-location").value = eventDetails.eventLocation;
        document.getElementById("price").value = eventDetails.eventPrice;
    }
});
