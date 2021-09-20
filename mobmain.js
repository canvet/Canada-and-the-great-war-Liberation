var mobmenutl = new TimelineMax({paused: true});

mobmenutl
   
    .to('#menu', 1, {display: 'block', y: 0,  ease: Expo.easeInOut })
    .to('#openbtn', 0.5, {opacity: 0, display: 'none'}, '-=1')
    .to('.closebtnwrapper', 0.5, {opacity: 1, display: 'flex'}, '-=0.5')
    .to('.wrapper', {position: 'fixed'})



    mobmenutl.reverse();
$(document).on("click", "#openbtn", function() {
    mobmenutl.reversed(!mobmenutl.reversed());
});
$(document).on("click", "#closebtn", function() {
    mobmenutl.reversed(!mobmenutl.reversed());
});
$(document).on("click", ".mn", function() {
    mobmenutl.reversed(!mobmenutl.reversed());
});