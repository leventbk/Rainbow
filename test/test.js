console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      event.target
    };
    
    let structureTwo = function() {
      event.target.style
    };
    
    let structureThree = function() {
      event.target.style.backgroundColor
    };
    
    let structureFour = function() {
      event.target.style.backgroundColor = randomColor;
    };
    
    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    let isMatchThree = Structured.match(code, structureThree);
    let isMatchFour = Structured.match(code, structureFour);

    assert.isOk(isMatchOne , 'Did you use the event object and the `.target` property to determine the element the event handler will modify?');
    assert.isOk(isMatchTwo , 'Did you call the `.style` property on the event target to change the elements style?');
    assert.isOk(isMatchThree , 'Did you call the `.backgroundColor` property on the event target style to change the elements background color?');
    assert.isOk(isMatchFour , 'Did you assign the `randomColor` variable to the background color of the event target?');
  });
});