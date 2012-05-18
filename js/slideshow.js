function slideShow(elt) {
  var currSlide = 0;
  function $(eltId) {
    return document.getElementById(eltId);
  }
  function render(eltId, obj) {
    $(eltId).innerHTML = templates[obj['@type']](obj);
  }
  document.onkeydown=function(e) {
    if(e.keyCode == 32) {
      currSlide++;
      if(currSlide >= slides.length) {
        currSlide = slides.length-1;
      }
    } else {
      currSlide--;
      if(currSlide<0) {
        currSlide = 0;
      }
    }
    render(elt, slides[currSlide]);
  }
  render(elt, slides[currSlide]);
}
