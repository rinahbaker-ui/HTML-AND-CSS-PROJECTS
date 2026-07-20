// Activates all Bootstrap popovers on the movie posters
const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
);

const popoverList = [...popoverTriggerList].map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
        html: true,
        content: function () {
            const ratingImage = this.getAttribute("data-bs-img");

            return '<img src="' + ratingImage + '" class="img-fluid" alt="Movie rating">';
        }
    });
});


// Displays the selected ticket information inside the Bootstrap toast
function buyTickets() {

    // Gets the movie selection
    const movieSelect = document.getElementById("movieSelect");

    // Gets the show-time selection
    const timeSelect = document.getElementById("timeSelect");

    // Gets the ticket quantity
    const quantity = document.getElementById("quantity");

    // Gets the toast body
    const toastBody = document.getElementById("toastBody");

    // Gets the complete toast element
    const toastDisplay = document.getElementById("toastDisplay");


    // Checks whether the user selected a movie
    if (movieSelect.selectedIndex === 0) {
        toastBody.innerHTML = "Please select a movie.";

    // Checks whether the user selected a show time
    } else if (timeSelect.selectedIndex === 0) {
        toastBody.innerHTML = "Please select a show time.";

    // Checks whether at least one ticket was selected
    } else if (quantity.value < 1) {
        toastBody.innerHTML = "Please select at least one ticket.";

    // Displays all selected ticket information
    } else {
        toastBody.innerHTML =
            "<strong>Movie:</strong> " +
            movieSelect.options[movieSelect.selectedIndex].text +
            "<br>" +
            "<strong>Show Time:</strong> " +
            timeSelect.options[timeSelect.selectedIndex].text +
            "<br>" +
            "<strong>Number of Tickets:</strong> " +
            quantity.value;
    }

    // Creates and displays the Bootstrap toast
    const ticketToast = bootstrap.Toast.getOrCreateInstance(toastDisplay);

    ticketToast.show();
}

// Shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function () {

    // When the webpage is scrolled down more than 50px
    if ($(document).scrollTop() > 50) {

        // Add the nav-shrink class
        $("nav").addClass("nav-shrink");

        // Move the mobile dropdown menu up slightly
        $("div.navbar-collapse").css("margin-top", "-6px");

    } else {

        // Remove the nav-shrink class
        $("nav").removeClass("nav-shrink");

        // Return the menu to its original position
        $("div.navbar-collapse").css("margin-top", "14px");
    }

});

// Close mobile menu when a navigation link is clicked
$(document).ready(function () {

    // When a nav link or dropdown item is clicked
    $(".navbar-nav").on(
        "click",
        ".nav-link:not('.dropdown-toggle'), .dropdown-item",
        function () {

            // Close the mobile menu
            $(".navbar-collapse").collapse("hide");

        }
    );

});
