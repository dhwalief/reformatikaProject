// Get the modal
const modal = document.getElementById("successModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Function to open the modal
function showModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
