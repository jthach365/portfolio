window.onload = function() {
    // Get all the nav links
    var navLinks = document.querySelectorAll("nav a");
  
    // Loop through the nav links and add a click event listener to each
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        var target = event.target;
        var href = target.getAttribute("href");
  
        // Load the target page into the main content area
        loadPage(href);
      });
    });
  
    // Hide the loading screen
    document.getElementById("loading").style.display = "none";
  
    // Show the main content
    document.getElementById("content").style.display = "block";
  };
  
  function loadPage(url) {
    // Use fetch to make a GET request to the specified URL
    fetch(url)
      .then(function(response) {
        // When the response is received, return it as text
        return response.text();
      })
      .then(function(html) {
        // When the HTML is received, update the main content area with the new content
        document.querySelector("main").innerHTML = html;
      });
  }
  