require(["gitbook", "jquery", "lodash"], function(gitbook, $, _) {

  function setModes(){
    var modes = getQueryParams();
    var $bookLinks = $('a:not([href^=http])');
    var $modes;

    if(_.isEmpty(modes)){
      $modes = $('[data-mode][data-mode-default]');
    } else {
      $modes = getAllByModes(modes);
    }

    $modes.addClass('on');

    $bookLinks.each(function(){
      this.href += window.location.search;
    });
  }

  function getAllByModes(modes){
    var modeSelectors = _.map(modes, function(modeValue, mode){
      return '[data-mode=' + mode + ']';
    });
    var allModes = modeSelectors.join(',');
    return $(allModes);
  }

  function getQueryParams(searchString) {
    var searchString = searchString || window.location.search;
    if(searchString.search(/\\?/) === 0){
      searchString = searchString.substring(1);
    }

    var queryPairs = searchString.split('&');
    var queryParams = {};

    _.each(queryPairs, function(querySet){
      var pair = querySet.split('=');
      if(pair[0] !== ''){
        queryParams[pair[0]] = pair[1];
      }
    });

    return queryParams;
  }

  gitbook.events.bind("page.change", setModes);
});