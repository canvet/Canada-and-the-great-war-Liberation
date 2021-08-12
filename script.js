gsap.registerPlugin(ScrollTrigger);

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
    trigger: "#sectionOne",
    start: "left left",
    horizontal: true,
    scroller: scrollbar,
    animation: parallaximgdesk,
    scrub: true,
    markers: true
  });









// gsap.to(".square", {
//   rotate: "360deg",
//   scrollTrigger: {
//     trigger: "#sectionOne",
//     // start: "left left",
//     horizontal: true,
//     scroller: scrollbar,
//     scrub: true
//     //markers: true
//   }
// });

var chaptertitleanim = gsap.timeline();

chaptertitleanim.staggerFromTo(".chaptertitle h1",2, {opacity: 0, y: 50}, {opacity: 1, y: 0}, 0.5);


  ScrollTrigger.create({

    trigger: "#sectionTwo",
    start: "left 80%",
    horizontal: true,
    scroller: scrollbar,
    animation: chaptertitleanim,
    // scrub: true,
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
  const anim2 = gsap.to(parallax, {backgroundSize: "150%"});
  ScrollTrigger.create({
    trigger: parallax,
    start: "left right",
    animation: anim2,
    horizontal: true,
    scroller: scrollbar,
    scrub: true
  });
});


var bodychangecolor = gsap.timeline();
bodychangecolor.to("body",1, {background: 'black'});

  ScrollTrigger.create({

    trigger: "#sectionNine",
    start: "left center",
    horizontal: true,
    scroller: scrollbar,
    animation: bodychangecolor,
    // scrub: true,
    markers: true,
    toggleActions: 'play none none reverse' 
  
});





var lineanim = gsap.timeline();

lineanim.fromTo("#numline1",2, {scaleX:0 }, {scaleX: 1});
lineanim.fromTo("#numline2",2, {scaleX:0 }, {scaleX: 1}, '-=1.5');


  ScrollTrigger.create({

    trigger: "#sectionFive",
    start: "left 80%",
    horizontal: true,
    scroller: scrollbar,
    animation: lineanim,
    // scrub: true,
    markers: true
  
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





// window.addEventListener("load", function() {
//   const scrollColorElems = document.querySelectorAll("[data-scrollcolor]");
//   scrollColorElems.forEach((colorSection, i) => {
//     const prevColor = i === 0 ? "gray" : scrollColorElems[i - 1].dataset.scrollcolor;
//     ScrollTrigger.create({
//       trigger: colorSection,
//       start: "left center",
//       onEnter: () => gsap.to("body", {backgroundColor: colorSection.dataset.scrollcolor, overwrite: 'auto'}),
//       onLeaveBack: () => gsap.to("body", {backgroundColor: prevColor, overwrite: 'auto'})
//     });
//   });
// });









let listItems = [...document.querySelectorAll('li')];

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