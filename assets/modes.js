require(["gitbook", "jquery"], function(gitbook, $) {

  function bindModers(){
    $('.moder').on('click', function(){
      var mode = this.dataset.modeTrigger;
      if(mode === getCurrentMode()){
        setCurrentMode();
      } else {
        setCurrentMode(mode);
      }
    });
  }

  function setCurrentMode(mode){
    $('[data-mode=' + getCurrentMode() + ']').removeClass('on');
    if(mode !== undefined){
      document.body.dataset.modeShow = mode;
      $('[data-mode=' + mode + ']').addClass('on');
    } else {
      delete document.body.dataset.modeShow;
    }
  }

  function getCurrentMode(){
    return document.body.dataset.modeShow;
  }

  gitbook.events.bind("page.change", bindModers);
});