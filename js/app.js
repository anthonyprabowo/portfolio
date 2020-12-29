//variables
const modalInfo = [
  {
    title: "Personal Profile Page",
    img: "img/projects/project1.png",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere, arcu sed placerat tincidunt, sapien dui placerat ante, et vehicula urna tortor sit amet diam. Fusce maximus tincidunt turpis eu accumsan. Aliquam sit amet est euismod ligula consectetur scelerisque."
  },
  {
    title: "Mobile First Responsive Layout",
    img: "img/projects/project2.png",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere, arcu sed placerat tincidunt, sapien dui placerat ante, et vehicula urna tortor sit amet diam. Fusce maximus tincidunt turpis eu accumsan. Aliquam sit amet est euismod ligula consectetur scelerisque."
  },
  {
    title: "Online Registration Form",
    img: "img/projects/project3.png",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere, arcu sed placerat tincidunt, sapien dui placerat ante, et vehicula urna tortor sit amet diam. Fusce maximus tincidunt turpis eu accumsan. Aliquam sit amet est euismod ligula consectetur scelerisque."
  },
  {
    title: "Web Style Guide",
    img: "img/projects/project4.png",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere, arcu sed placerat tincidunt, sapien dui placerat ante, et vehicula urna tortor sit amet diam. Fusce maximus tincidunt turpis eu accumsan. Aliquam sit amet est euismod ligula consectetur scelerisque."
  },
  {
    title: "Interactive Photo Gallery",
    img: "img/projects/project5.png",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere, arcu sed placerat tincidunt, sapien dui placerat ante, et vehicula urna tortor sit amet diam. Fusce maximus tincidunt turpis eu accumsan. Aliquam sit amet est euismod ligula consectetur scelerisque."
  },
  {
    title: "Game Show App",
    img: "img/projects/project6.png",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere, arcu sed placerat tincidunt, sapien dui placerat ante, et vehicula urna tortor sit amet diam. Fusce maximus tincidunt turpis eu accumsan. Aliquam sit amet est euismod ligula consectetur scelerisque."
  },
  {
    title: "Web App Dashboard",
    img: "img/projects/project7.png",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere, arcu sed placerat tincidunt, sapien dui placerat ante, et vehicula urna tortor sit amet diam. Fusce maximus tincidunt turpis eu accumsan. Aliquam sit amet est euismod ligula consectetur scelerisque."
  },
  {
    title: "API call for Employee Directory",
    img: "img/projects/project8.png",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere, arcu sed placerat tincidunt, sapien dui placerat ante, et vehicula urna tortor sit amet diam. Fusce maximus tincidunt turpis eu accumsan. Aliquam sit amet est euismod ligula consectetur scelerisque."
  }
];

const learnMoreButton = document.getElementsByClassName('learnMore');

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
    } 
    
  });
  
});

// modal click
for(let i = 0; i < learnMoreButton.length; i++){
  $(learnMoreButton[i]).click(() => {
    $('.modal-title').html(modalInfo[i].title);
    $('.project-minified').attr("src", modalInfo[i].img);
    $('.modal-paragraph').html(modalInfo[i].paragraph);
  })
}

// smooth scrolling when button is pressed
$(document).ready(function() {
  $('.main-btn').click(function(e) {
  
    var targetHref = $(this).attr('href');
    
  $('html, body').animate({
    scrollTop: $(targetHref).offset().top
  }, 0);
    
    e.preventDefault();
  });
});