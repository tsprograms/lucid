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
    // Split the tokens by whitespace or parentheses and return the result
    return code.trim().split(/\s+|("[\s\S]*?")|(\(|\))/g).filter(Boolean);
  };
  var makeTree = function(tokens) {
    // TODO
  };
})();
