

// -----Wait for images to load completely then animate the overlay----//
// $('#scrollbar').waitForImages({
//   finished: function() {
//     // alert('All images have loaded.');
//     gsap.to(".overlay", 1, {y: '-100%', display: 'none'});
//   },

//   waitForAll: true
// });




// ----overlay text animation as loader----//
// var overlaytl = gsap.timeline({repeat: -1});

// overlaytl.to('#otw1',2, {delay:1, opacity: 1});
// overlaytl.to('#os1',3, {letterSpacing: '0.5vh'}, '-=2');
// overlaytl.to('#otw1',2, {delay:1, opacity: 0}, '-=2');




// overlaytl.to('#otw2',2, {delay:1, opacity: 1});
// overlaytl.to('#os2',3, {letterSpacing: '0.5vh'}, '-=2');
// overlaytl.to('#otw2',2, {delay:1, opacity: 0}, '-=2');

// overlaytl.to('#otw3',2, {delay:1, opacity: 1});
// overlaytl.to('#os3',3, {letterSpacing: '0.5vh'}, '-=2');
// overlaytl.to('#otw3',2, {delay:1, opacity: 0}, '-=2');

// overlaytl.to('#otw4',2, {delay:1, opacity: 1});
// overlaytl.to('#os4',3, {letterSpacing: '0.5vh'}, '-=2');
// overlaytl.to('#otw4',2, {delay:1, opacity: 0}, '-=2');





// Create a media condition that targets viewports at least 768px wide
// const mediaQuery = window.matchMedia('(max-width: 768px)')
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // Then trigger an alert
//   alert('Media Query Matched!')
//   $('link[href="./style.css"]').remove();
//   $('head').append('<link href="./mobstyle.css" rel="stylesheet" id="newcss" />');

//   document.getElementById("scrollbar").style.display = "none";



//   var demoanim = gsap.timeline();
//   demoanim.to('h1',{y: -100});
  
//       ScrollTrigger.create({
//       trigger: ".demo",
//       start: "top top",
//       animation: demoanim,
//       markers: true
//     });
  

// }







// ----Menu reveal animation-----//
var menutl = new TimelineLite({ paused:true });

const drawer = document.getElementById("menu");
const toggle = document.getElementById("openbtn");
const closeDrawerBtn = document.getElementById("closebtn");



// if the drawer is open or not
let openDrawer = false;

menutl
    .to(drawer, 0.5, {display: 'block', x: 0,  ease: Expo.easeInOut })
    .to(closeDrawerBtn, 0.5, {x: 0})
    .to('.mnc', 0.5, {y:0}, '-=0.5')
   .to('#scrollbar', {position: 'fixed'})
    .reverse();

   
;
toggle.onclick = () => {
    openDrawer = menutl.reversed();
    menutl.reversed( !menutl.reversed() );
    
};

 // --Reverse the menu items animations-//
const reverseDrawerTween = () => {
  menutl.reverse();
    openDrawer = menutl.reversed();
    
};

closeDrawerBtn.onclick = reverseDrawerTween;





// ----Registering scrolltrigger----//

gsap.registerPlugin(ScrollTrigger);


// ------Transform vertical scroll to horizontal with smooth scroll plugin-----//

class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = "horizontalScroll";

  transformDelta(delta, fromEvent) {
    if (!/wheel/.test(fromEvent.type)) {
      return delta;
    }

    const { x, y } = delta;

    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y
    };
  }
}

const scrollbar = document.querySelector("#scrollbar");
Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);
const myHorizontalScrollbar = Scrollbar.init(scrollbar);

myHorizontalScrollbar.setPosition(0, 0);

ScrollTrigger.scrollerProxy(scrollbar, {
  scrollTop(value) {
    if (arguments.length) {
      myHorizontalScrollbar.scrollTop = value;
    }
    return myHorizontalScrollbar.scrollTop;
  },
  scrollLeft(value) {
    if (arguments.length) {
      myHorizontalScrollbar.scrollLeft = value;
    }
    return myHorizontalScrollbar.scrollLeft;
  }
});

myHorizontalScrollbar.addListener(ScrollTrigger.update);









var parallaximgdesk = gsap.timeline();
parallaximgdesk.to('.int-s1',{backgroundPosition: "100% 10%"});

    ScrollTrigger.create({
    trigger: "#s1",
    start: "left left",
    horizontal: true,
    scroller: scrollbar,
    animation: parallaximgdesk,
    scrub: true,
    markers: true
  });













// gsap.to(".int-s3", { backgroundPosition: "100% 50%",
//   scrollTrigger: {
//     trigger: "#sectionThree",
//     start: "left right",
//     horizontal: true,
//     scroller: scrollbar,
//     scrub: true,
//     markers: true
//   }
// });



const imgparallaxleft = gsap.utils.toArray('#int-img');

imgparallaxleft.forEach((parallax, i) => {
  const anim = gsap.to(parallax, {backgroundPosition: "100% 50%"});
  ScrollTrigger.create({
    trigger: parallax,
    start: "left right",
    animation: anim,
    horizontal: true,
    scroller: scrollbar,
    scrub: true
  });
});



const imgparallaxzoomin = gsap.utils.toArray('#int-imgzin');

imgparallaxzoomin.forEach((parallax, i) => {
  const anim2 = gsap.to(parallax, {backgroundSize: "100%"});
  ScrollTrigger.create({
    trigger: parallax,
    start: "left right",
    animation: anim2,
    horizontal: true,
    scroller: scrollbar,
    scrub: true
  });
});




// -------rotating picture------//

const imgrotate = gsap.utils.toArray('#picture');

imgrotate.forEach((parallax, i) => {
  const anim3 = gsap.to(parallax, {rotate: '-10deg'});
  ScrollTrigger.create({
    trigger: parallax,
    start: "left right",
    animation: anim3,
    horizontal: true,
    scroller: scrollbar,
    scrub: true
  });
});







// Change body background color for various sections   //
window.addEventListener("load", function () {
  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
    

    ScrollTrigger.create({
      trigger: colorSection,
      scroller: scrollbar,
      start: "left 80%",
      horizontal: true,
      onEnter: () =>
        gsap.to("body", 1, {
          backgroundColor: colorSection.dataset.bgcolor,
          color: colorSection.dataset.textcolor,
          overwrite: "auto"
        }),
        

      onLeaveBack: () =>
        gsap.to("body", 1, {
          backgroundColor: prevBg,
          color: prevText,
          overwrite: "auto"
        })
    });
  });
});






// ----stat line animation ------//

const reveal = gsap.utils.toArray('.numline');

reveal.forEach((numline, i) => {
  const lineanim = gsap.fromTo(numline,2,  {scaleX:0}, {scaleX: 1});
  ScrollTrigger.create({
    trigger: numline,
    start: "left 80%",
    animation: lineanim,
    horizontal: true,
    scroller: scrollbar,
    markers: true
  
    
  });
});













var poppy = gsap.timeline();

poppy.to(".poppy-flower",2, {rotate: '40deg', marginLeft: '-3rem'});

  ScrollTrigger.create({

    trigger: ".img-container",
    start: "left 80%",
    horizontal: true,
    scroller: scrollbar,
    animation: poppy,
    scrub: true,
    markers: true
  
});












let listItems = [...document.querySelectorAll('#li')];


let options = {
    rootMargin: '0%',
    threshold: 0.3
}

let observer = new IntersectionObserver(showItem, options);

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let letters = [...entry.target.querySelectorAll('span')];
            letters.forEach((letter, idx) => {
                setTimeout(() =>{
                    letter.classList.add('active');
                }, idx * 50)
            })
            entry.target.children[0].classList.add('active');
        }
    })
}



listItems.forEach(item =>{

    let newString = '';
    let itemText = item.children[0].innerText.split('');

    itemText.map(letter =>(newString += letter ==' ' ? `<span class='gap'></span>` : `<span>${letter}</span>`))
    item.innerHTML = newString;

    // To log the characters arrays
    console.log(itemText)

    observer.observe(item);

})









// ---change mouse cursor on hover of elements---//

// var cursor = $(".cursor"),
// follower = $(".cursor-follower");

// var posX = 0,
// posY = 0,
// mouseX = 0,
// mouseY = 0;

// TweenMax.to({}, 0.016, {
// repeat: -1,
// onRepeat: function() {
//     posX += (mouseX - posX) / 9;
//     posY += (mouseY - posY) / 9;

//     TweenMax.set(follower, {
//         css: {
//             left: posX - 20,
//             top: posY - 20
//         }
//     });

//     TweenMax.set(cursor, {
//         css: {
//             left: mouseX,
//             top: mouseY
            
//         }
//     });
// }
// });

// $(document).on("mousemove", function(e) {
// mouseX = e.pageX;
// mouseY = e.pageY;
// });

// $("img").on("mouseenter", function() {
// cursor.addClass("active");
// follower.addClass("active");
// });

// $("img").on("mouseleave", function() {
// cursor.removeClass("active");
// follower.removeClass("active");
// });

