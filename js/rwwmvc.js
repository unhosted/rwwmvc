function rwwmvc(elt, data) {
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
      if(currSlide >= data.slides.length) {
        currSlide = data.slides.length-1;
      }
    } else {
      currSlide--;
      if(currSlide<0) {
        currSlide = 0;
      }
    }
    render(elt, data.slides[currSlide]);
  }
  render(elt, data.slides[currSlide]);
}
