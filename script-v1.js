


// -----Wait for images to load completely then animate the overlay----//
// $('#scrollbar').waitForImages({
//   finished: function() {
//     // alert('All images have loaded.');


//     var fadeoverlay = gsap.timeline({delay: 0})
//     fadeoverlay.to(".overlay", 1, {opacity: 0, display: 'none'});
//   },

//   waitForAll: true
// });



//-----Fade the overlay animation on complete website load---//

paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
  };

  Pace.on('done', function() {
  
    var fadeoverlay = gsap.timeline({delay: 0})
        fadeoverlay.to(".overlay", 1, {opacity: 0, display: 'none'});

 });



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











// const mediaQuery = window.matchMedia('(max-width: 768px)')
// // Check if the media query is true
// if (mediaQuery.matches) {
//   alert('Media Query Matched!')
 
//   gsap.to('.int-s1', {backgroundSize: 'cover'});

// }







// ----Registering scrolltrigger----//

gsap.registerPlugin(ScrollTrigger);






// ------Transform vertical scroll to horizontal with smooth scroll plugin-----//

// ------Enclosing the vertical to horizontal conversion in a function to swithc off and on based on media queries---//
function scrollbarResponsive() {

  // Calls in the smooth scroll plugin
          class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
            static pluginName = "horizontalScroll";

// Converts vertical to horizontal
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

          // Sets the scrollbar to a custom name//
          const scrollbar = document.querySelector("#scrollbar");
          Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);
          const myHorizontalScrollbar = Scrollbar.init(scrollbar);

          // Sets position of the scrollbar to start
          myHorizontalScrollbar.setPosition(0, 0);

          // Tells scrolltrigger to update based on the custom scroll value

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

          // scrolltrigger listens to scrollbar and updates
          myHorizontalScrollbar.addListener(ScrollTrigger.update);



          // On click of the arrow button in the beginning move to introduction
              document.getElementById('arrowbtn').onclick = function() {scrollto()};

              function scrollto(){
                
                myHorizontalScrollbar.scrollTo(1300, 0, 1500);
                
              }



            // ---On click of the end button scroll to beggining--//

          document.getElementById('arrowend').onclick = function() {linktostart()};
          
          function linktostart(){

                myHorizontalScrollbar.scrollIntoView(document.querySelector('#s1'), {
                  offsetLeft: number = 0,
                });
            
          }




          // ----scroll to a section on click of menu items, uses the smooth scrollbar plugin---//

          document.getElementById('introlink').onclick = function() {linktointro()};
          document.getElementById('chap1link').onclick = function() {linktochap1()};
          document.getElementById('chap2link').onclick = function() {linktochap2()};
          document.getElementById('chap3link').onclick = function() {linktochap3()};
          document.getElementById('chap4link').onclick = function() {linktochap4()};
          document.getElementById('chap5link').onclick = function() {linktochap5()};
          document.getElementById('conclink').onclick = function() {linktoconc()};



          function linktointro(){

            myHorizontalScrollbar.scrollIntoView(document.querySelector('#introchapter'), {
              offsetLeft: number = 0,
            });
          }

          function linktochap1(){

          myHorizontalScrollbar.scrollIntoView(document.querySelector('#chapter1'), {
            offsetLeft: number = 0,
          });

          }


          function linktochap2(){

            myHorizontalScrollbar.scrollIntoView(document.querySelector('#chapter2'), {
              offsetLeft: number = 0,
            });
            
          }


          function linktochap3(){

            myHorizontalScrollbar.scrollIntoView(document.querySelector('#chapter3'), {
              offsetLeft: number = 0,
            });
            
          }


          function linktochap4(){

            myHorizontalScrollbar.scrollIntoView(document.querySelector('#chapter4'), {
              offsetLeft: number = 0,
            });
            
          }


          function linktochap5(){

            myHorizontalScrollbar.scrollIntoView(document.querySelector('#chapter5'), {
              offsetLeft: number = 0,
            });
            
          }


          function linktoconc(){

            myHorizontalScrollbar.scrollIntoView(document.querySelector('#conc'), {
              offsetLeft: number = 0,
            });
            
          }




            // Scroll the screen to the right for 1000 px on click of the right button
          document.getElementById('scrollbtnright').onclick = function() {scrolltoright()};
          function scrolltoright(){


            myHorizontalScrollbar.scrollIntoView(document.querySelector('#scrollbar'), {
              offsetLeft: -1000,
            });

            
            
          }


            // Scroll the screen to the left for 1000 px on click of the left button
            document.getElementById('scrollbtnleft').onclick = function() {scrolltoleft()};
            function scrolltoleft(){
  
  
              myHorizontalScrollbar.scrollIntoView(document.querySelector('#scrollbar'), {
                offsetLeft: 1000,
              });
  
              
              
            }
  




        // Make the scroll buttons appear when the intro chapter scroll in

          $(document).ready(function() {
                var timer;
                // hide initially
                var scrollbtnappear = gsap.timeline();
                scrollbtnappear.to("#scrollbtn",1, {opacity: 1, display: 'flex'});

                ScrollTrigger.create({

                  trigger: "#introchapter",
                  // endTrigger: "#scrollbar",
                  start: "left left",
                  // end: "left center",
                  horizontal: true,
                  scroller: scrollbar,
                  animation: scrollbtnappear,
                  toggleActions: 'play none none reverse',
                  // markers: true,
                  
              });


              // var scrollbtnhide = gsap.timeline();
              // scrollbtnhide.to("#scrollbtn",1, {opacity: 0});

              //   ScrollTrigger.create({

              //     trigger: ".w17",
              //     start: "left right",
              //     horizontal: true,
              //     scroller: scrollbar,
              //     animation: scrollbtnhide,
              //     toggleActions: 'play none none reverse',
                  
              // });



             

                
            // Fade out and in the buttons if the mouse is not moved for 3 seconds
                $(document).mousemove(function() {
                    if (timer) {
                        clearTimeout(timer);
                        timer = 0;
                    }
                    $('#scrollbtn').fadeIn();
                    timer = setTimeout(function() {
                        $('#scrollbtn').fadeOut();
                    }, 3000)
                });


            });





}



// Create a media condition that targets viewports at least 768px wide
// const mediaQuery = window.matchMedia('(max-width: 768px)')
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // Then trigger an alert
//   alert('Media Query Matched!')
//   $('link[href="./style.css"]').remove();
//   $('head').append('<link href="./mobstyle.css" rel="stylesheet" id="newcss" />');


//   myHorizontalScrollbar.destroyAll()
  
// }

















ScrollTrigger.matchMedia({

  // desktop
  "(min-width: 769px)": function() {
    // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.    
    
    scrollbarResponsive();
    // $('link[href="./mobstyle.css"]').remove();
    // $('head').append('<link href="./style.css" rel="stylesheet" id="newcss" />');


              // ----Menu reveal animation-----//

              var menutl = new TimelineMax({paused: true});
                              

              menutl
              .to('#navbar', 1, {background: 'transparent'})
                  .to('#mline1', 1, {x: -30, ease: Expo.easeInOut}, '-=2')
                  .to('#mline3', 1, {x: 30, ease: Expo.easeInOut}, '-=2')
                  .to('#menu', 1, {display: 'flex', x: 0,  ease: Expo.easeInOut }, '-=2')
                  .to('#closebtn', 0.3, {x:0, opacity: 1, display: 'block'}, '-=1')
                  .to('#abouttext', 0.3, {opacity: 1, display: 'flex'}, '-=1')
                  .to('.wrapper',0, {position: 'fixed'})



              menutl.reverse();
              $(document).on("click", "#openbtn", function() {
                menutl.reversed(!menutl.reversed());
              });
              $(document).on("click", "#closebtn", function() {
                menutl.reversed(!menutl.reversed());
              });
              $(document).on("click", ".mn", function() {
                menutl.reversed(!menutl.reversed());
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
                start: "left 90%",
                horizontal: true,
                onEnter: () =>
                  gsap.to("body", 1, {backgroundColor: colorSection.dataset.bgcolor, color: colorSection.dataset.textcolor, overwrite: "auto"}),

                  
                  

                onLeaveBack: () =>
                  gsap.to("body", 1, {
                    backgroundColor: prevBg,
                    color: prevText,
                    overwrite: "auto"
                  })
              });
            });
          });




          // -----------change color of the navbar on scroll------///

          window.addEventListener("load", function () {
            const scrollNavElems = document.querySelectorAll("[data-navcolor]");
            scrollNavElems.forEach((navSection, i) => {
              const prevBg = i === 0 ? "" : scrollNavElems[i - 1].dataset.navcolor;
              

              ScrollTrigger.create({
                trigger: navSection,
                scroller: scrollbar,
                start: "left 90%",
                horizontal: true,
                onEnter: () =>
                  gsap.to("#navbar", 1, {backgroundColor: navSection.dataset.navcolor, overwrite: "auto"}),

                  
                  

                onLeaveBack: () =>
                  gsap.to("#navbar", 1, {
                    backgroundColor: prevBg,
                    overwrite: "auto"
                  })
              });
            });
          });






            // ----parallax the images to zoom in ----//

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


            // -------poppy flower animation----//

              var poppy = gsap.timeline();

              poppy.to(".poppyflower",2, {rotate: '40deg', marginLeft: '-50vh'});

                ScrollTrigger.create({

                  trigger: ".poppy-flower",
                  start: "left right",
                  horizontal: true,
                  scroller: scrollbar,
                  animation: poppy,
                  scrub: true,
                  // markers: true
                
              });



              //-------- parallax the cover image-----//

              var parallaximgdesk = gsap.timeline();
              parallaximgdesk.to('.int-s1',{backgroundPosition: "100% 10%"});

                  ScrollTrigger.create({
                  trigger: "#s1",
                  start: "left left",
                  horizontal: true,
                  scroller: scrollbar,
                  animation: parallaximgdesk,
                  scrub: true,
                  // markers: true
                });



                // -------parallax the images to left-------//

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



                // ----parallax the image to right-----//

                const imgparallaxright = gsap.utils.toArray('#int-right');

                imgparallaxright.forEach((parallax, i) => {
                  const anim = gsap.to(parallax, {backgroundPosition: "0% 50%"});
                  ScrollTrigger.create({
                    trigger: parallax,
                    start: "left right",
                    animation: anim,
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
                    // markers: true
                  
                    
                  });
                });


                    // ----Callout animation ------//

                  const revealcallout= gsap.utils.toArray('.callout');

                  revealcallout.forEach((callout, i) => {
                    const calloutanim = gsap.fromTo(callout,1,  {opacity: 0, y: 10}, {opacity: 1, y: 0});
                    ScrollTrigger.create({
                      trigger: callout,
                      start: "left 80%",
                      animation: calloutanim,
                      horizontal: true,
                      scroller: scrollbar,
                      // markers: true
                    
                      
                    });
                  });


                    // On click the about text on the menu, open the about section

                  document.getElementById('abouttext').onclick = function() {aboutus()};
                  function aboutus(){
  
                            gsap.to('.about-container', 0.5, {opacity: 1, display: 'grid'});
                            gsap.to('.closeaboutwrapper', 0.5, {opacity: 1, display: 'flex', position: 'fixed'});
                            gsap.to('.wrapper', 0.5, {position: 'fixed'});
                    }


  },




  //---------------- Mobile JS code---------------------//

  "(max-width: 768px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore. 

    Scrollbar.destroy(scrollbar);
  //   $('link[href="./style.css"]').remove();
  // $('head').append('<link href="./mobstyle.css" rel="stylesheet" id="newcss" />');

  


          // Change body background color for various sections   //
          window.addEventListener("load", function () {
            const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
            scrollColorElems.forEach((colorSection, i) => {
              const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
              const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
              

              ScrollTrigger.create({
                trigger: colorSection,
                // scroller: scrollbar,
                start: "top bottom",
                // horizontal: true,
                onEnter: () =>
                  gsap.to("body", 1, {backgroundColor: colorSection.dataset.bgcolor, color: colorSection.dataset.textcolor, overwrite: "auto"}),

                  
                  

                onLeaveBack: () =>
                  gsap.to("body", 1, {
                    backgroundColor: prevBg,
                    color: prevText,
                    overwrite: "auto"
                  })
              });
            });
          });




            // ----Callout animation ------//

            const revealcallout= gsap.utils.toArray('.callout');

            revealcallout.forEach((callout, i) => {
              const calloutanim = gsap.fromTo(callout,1,  {opacity: 0, y: 10}, {opacity: 1, y: 0});
              ScrollTrigger.create({
                trigger: callout,
                start: "top bottom",
                animation: calloutanim,
               
              });
            });






                    // On click of the arrow down scroll to the intro chapter

                  document.getElementById('mobarrowbtn').onclick = function() {linkdown()};
                  function linkdown(){
          
                    gsap.to(window, 0.5, {scrollTo:'#introchapter'});
                  }
          

                    // On click of the arrow up scroll to the top intro chapter
                  document.getElementById('mobarrowend').onclick = function() {linktostart()};
                  function linktostart(){
          
                    gsap.to(window, 0, {scrollTo:'#s1'});
                  }



                  // on click of chapters scroll to respective chapter

                  document.getElementById('mobintro').onclick = function() {linkintro()};
                  function linkintro(){
          
                    gsap.to(window, 0.5, {scrollTo:'#introchapter'});
                  }

                  document.getElementById('mobchap1').onclick = function() {linkchap1()};
                  function linkchap1(){
          
                    gsap.to(window, 0.5, {scrollTo:'#chapter1'});
                  }

                  document.getElementById('mobchap2').onclick = function() {linkchap2()};
                  function linkchap2(){
          
                    gsap.to(window, 0.5, {scrollTo:'#chapter2'});
                  }

                  document.getElementById('mobchap3').onclick = function() {linkchap3()};
                  function linkchap3(){
          
                    gsap.to(window, 0.5, {scrollTo:'#chapter3'});
                  }

                  document.getElementById('mobchap4').onclick = function() {linkchap4()};
                  function linkchap4(){
          
                    gsap.to(window, 0.5, {scrollTo:'#chapter4'});
                  }

                  document.getElementById('mobchap5').onclick = function() {linkchap5()};
                  function linkchap5(){
          
                    gsap.to(window, 0.5, {scrollTo:'#chapter5'});
                  }

                  document.getElementById('mobconc').onclick = function() {linkconclusion()};
                  function linkconclusion(){
          
                    gsap.to(window, 0.5, {scrollTo:'#conc'});
                  }






                  
           
                // On click of the about link on small mobile navbar, open the about section for mobile
                      
                document.getElementById('about').onclick = function() {aboutus()};
                function aboutus(){

                      gsap.to('.about-container', 0.5, {opacity: 1, display: 'block'});
                      gsap.to('.closeaboutwrapper', 0.5, {opacity: 1, display: 'flex', position: 'fixed'});
                      gsap.to('.wrapper', 0.5, {position: 'fixed'});
                }





                
         


  },





  // all 
  "all": function() {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.    


    // ---------animate the chapter title and stats letters in on scroll ----//
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




           

            

            // On click of the close arrow button on the about section close the about section for both desktop and mobile

                  document.getElementById('closeabout').onclick = function() {closeaboutus()};
                  function closeaboutus(){

                        gsap.to('.about-container', 0.5, {opacity: 0, display: 'none'});
                        gsap.to('.closeaboutwrapper', 0.5, {opacity: 0, display: 'none'});
                        gsap.to('.wrapper', 0.5, {position: 'relative'});
                 }






  }

});









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
















