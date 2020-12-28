// Load in particles.js
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

// slide in effect
$(window).scroll(function(event) {
  
  $(".module").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
      el.removeClass("come-out");
    } else {
      el.addClass("come-out");
      el.removeClass("come-in");
    }
  });
  
});