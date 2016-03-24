function getElFromDisplay(display){
  var el = 'div';
  if(display === 'inline'){
    el = 'span';
  }

  return el;
}

module.exports = {
  blocks: {
    moder: {
      process: function(block) {
        var el = getElFromDisplay(block.kwargs.display);

        return '<' + el + ' class="moder" data-mode-trigger=' + block.kwargs.mode + '>' + block.body + '</' + el + '>'
      }
    },
    mode: {
      process: function(block) {
        var el = getElFromDisplay(block.kwargs.display);

        return '<' + el + ' data-mode=' + block.kwargs.mode + '>' + block.body + '</' + el + '>'
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
