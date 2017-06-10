// @flow
'use strict';

const prettyFormat = require('pretty-format');
const prettyFormatAST = require('./');

let val = {
  type: 'a',
  prop: [{
    type: 'b',
    prop: [{
      type: 'c',
      prop: [{
        type: 'd',
        prop: [{
          type: 'e',
          prop: [{
            type: 'f',
          }]
        }]
      }]
    }]
  }]
};

let run = () => {
  let res = prettyFormat(val, {
    plugins: [prettyFormatAST],
  });

  console.log(res);
};

run();

setTimeout(() => {
  debugger;
  run();
}, 3000);
