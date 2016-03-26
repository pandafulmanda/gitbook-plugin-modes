require(["gitbook", "jquery", "lodash"], function(gitbook, $, _) {

  function setModes(){
    var modes = getQueryParams();
    var $bookLinks = $('a:not([href^=http])');
    var $modes;

    if(_.isEmpty(modes)){
      $modes = $('[data-mode][data-mode-default]');
    } else {
      $modes = getAllByModes(modes);

      $bookLinks.each(function(){
        var existingParams = getQueryParams(this.href);
        var mergedParams = _.extend({}, existingParams, modes);
        var existingHref = this.href.split('?')[0];

        this.href = existingHref + '?' + $.param(mergedParams);
      });
    }

    $modes.addClass('on');
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
    var parts = searchString.split('?');
    var queryParams = {};
    searchString = parts[1];

    if(!_.isString(searchString)){
      return queryParams;
    }

    var queryPairs = searchString.split('&');

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