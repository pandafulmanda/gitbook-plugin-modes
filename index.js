var parsers = require('gitbook-markdown/lib/tohtml');

function getElFromDisplay(display){
  var el = 'div';
  if(display === 'inline'){
    el = 'span';
  }

  return el;
}

function getDisplayFromArgs(blockArgs){
  var choices = ['block', 'inline'];

  if(choices.indexOf(blockArgs.display) > -1){
    return blockArgs.display;
  }

  return choices[0];
}

module.exports = {
  blocks: {
    mode: {
      process: function(block) {
        var display = getDisplayFromArgs(block.kwargs);
        var el = getElFromDisplay(display);

        var dataAttrs = 'data-mode=' + block.kwargs.mode;
        if(block.kwargs.default){
          dataAttrs += ' data-mode-default=true'; 
        }

        return '<' + el + ' ' + dataAttrs + '>' + parsers[display](block.body) + '</' + el + '>'
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
