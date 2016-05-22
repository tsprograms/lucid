/*
parse.js
Created on 5/22/16 by TSPrograms.
Copyright © 2016 TSPrograms.
*/

(function() {
  var tokenize = function(code) {
    if (typeof code !== 'string') {
      throw 'Lucid: InputError: Code must be a string!';
    }
    var inString = false;
    var spaceRegExp = /\s/;
    var tokens = [];
    var char;
    for (var i = 0; i < code.length; ++i) {
      char = code.charAt(i)
      if (inString) {
        if (char === '"' && code.charAt(i - 1) !== '\') {
          inString = false;
          continue;
        }
        tokens[tokens.length - 1] += char;
        continue;
      }
      switch (char) {
        case '(':
          
          break;
        case ')':
          
          break;
        case '"':
          
          break;
        default:
          if (spaceRegExp.test(code.charAt(i))) {
            if (tokens[tokens.length - 1] !== '') {
              tokens.push('');
            }
          }
          else {
            
          }
      }
    }
  };
})();
