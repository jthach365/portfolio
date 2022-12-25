// Get all the links in the navigation bar
var navbarLinks = document.querySelectorAll(".navbar a");

// Loop through all the links
for (var i = 0; i < navbarLinks.length; i++) {
  // Add a click event listener to each link
  navbarLinks[i].addEventListener("click", function() {
    // Remove the active class from all the links
    for (var i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].classList.remove("active");
    }

    // Add the active class to the clicked link
    this.classList.add("active");

    // Scroll to the corresponding section
    var sectionId = this.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth"
    });
  });
}
