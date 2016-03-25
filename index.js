function getElFromDisplay(display){
  var el = 'div';
  if(display === 'inline'){
    el = 'span';
  }

  return el;
}

module.exports = {
  blocks: {
    mode: {
      process: function(block) {
        var el = getElFromDisplay(block.kwargs.display);
        var dataAttrs = 'data-mode=' + block.kwargs.mode;
        if(block.kwargs.default){
          dataAttrs += ' data-mode-default=true'; 
        }

        return '<' + el + ' ' + dataAttrs + '>' + block.body + '</' + el + '>'
      }

    }
  },

  book: {
    assets: './assets',
    css: [
      'modes.css'
    ],
    js: [
      'modes.js'
    ]
  }
};
