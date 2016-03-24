require(["gitbook", "jquery"], function(gitbook, $) {

  function bindModers(){
    $('.moder').on('click', function(){
      var mode = this.dataset.triggerMode;
      if(mode === getCurrentMode()){
        setCurrentMode();
      } else {
        setCurrentMode(mode);
      }
    });
  }

  function setCurrentMode(mode){
    if(mode !== undefined){
      document.body.dataset.modeShow = mode;
      $('[data-mode=' + mode + ']').addClass('on');
    } else {
      delete document.body.dataset.modeShow;
      $('[data-mode=' + mode + ']').removeClass('on');
    }
  }

  function getCurrentMode(){
    return document.body.dataset.modeShow;
  }

  gitbook.events.bind("page.change", bindModers);
});