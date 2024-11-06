function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function goToBookingPage() {
    window.location.href = 'booking-page.html'; // Change this URL to your desired page
}

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    showPopup(); // Show the success popup
});
