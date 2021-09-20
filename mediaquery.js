



// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  alert('Media Query Matched!')
  $('link[href="./style.css"]').remove();
  $('script[src="./script.js"]').remove();
  $('head').append('<link href="./mobstyle.css" rel="stylesheet" id="newcss" />');
  $('body').append('<script src="./mobmain.js" id="newjs" />');

  // document.getElementById("scrollbar").style.display = "none";


  myHorizontalScrollbar.destroyAll()
  

}


