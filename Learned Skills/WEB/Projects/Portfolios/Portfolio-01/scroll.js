window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };


  const scrollButton = document.getElementById("scroll-Btn");

  // Show the button when the user scrolls down 20px from the top
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  };

  // Scroll to the top of the page when the button is clicked
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scroll behavior
    });
  }