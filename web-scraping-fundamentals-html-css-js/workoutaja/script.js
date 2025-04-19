document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("glow-button");
    const navLinks = document.querySelectorAll("nav ul li a");

    button.addEventListener("mouseenter", function () {
      button.style.boxShadow = "0 0 20px rgba(105, 185, 157, 1)";
    });
  
    button.addEventListener("mouseleave", function () {
      button.style.boxShadow = "none";
    });

    navLinks.forEach((link) => {
        link.addEventListener("mouseover", function () {
            link.style.boxShadow = "0px 0px 10px #69B99D"; /* Hanya glow hijau */
            link.style.color = "#69B99D";
            link.style.transition = "0.3s ease-in-out";
          });
          
          link.addEventListener("mouseout", function () {
            link.style.boxShadow = "none";
            link.style.color = "#333";
          });      });
    
  });
