const calculator = {
  sum: function() {
    return parseFloat(document.getElementById('a').value) +
     parseFloat(document.getElementById('b').value);
    
  },
  mult: function() {
    return  parseFloat(document.getElementById('a').value) *
    parseFloat(document.getElementById('b').value);
  },
  show: function() {
    document.getElementById('sum').addEventListener('click', function() {
        document.getElementById('res').value = calculator.sum();
    });
    document.getElementById('mult').addEventListener('click', function() {
        document.getElementById('res').value = calculator.mult();
    });

  }

};

calculator.show();
