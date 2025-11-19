// Mobile responsive
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
    menuBtn.classList.remove("active");
    navLinks.classList.remove("active");
  }
});

// Image loading handling
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
});


// skill section

$(document).ready(function() {
  $(`.skill-per`).each(function() {
    var $this = $(this);
    var percentage = $this.attr('percentage');
    $this.css("width", percentage + "%");
    $({
      animatedValue: 0
    }).animate({
      animatedValue: percentage
    }, {
      duration: 1300,
      step: function() {
        $this.attr("percentage", Math.floor(this.animatedValue));
      }
    });
  });
});