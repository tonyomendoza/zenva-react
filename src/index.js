import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld(){
  return <div>
    <Hello_alt />
    </div>;
}

// function Hello(){
//   return React.createElement(
//     'div',
//     {},
//     // "Hello World!"
//   );
// }

function Hello(){
  // const name = 'Tony!';
  // return <span>Hello {name}</span>;
  var isHello = false;
  return (
    <span>{isHello? 'Hello': 'Goodbye'}</span>
  )
}

function Hello_alt(){
  var isHello = true;
  return (
    <span>
      {isHello && 'Hello'}
      {!isHello && 'Goodbye'}
    </span>
  )
}

// function World(){
//   return <span>World</span>;
// }

ReactDOM.render(
  <HelloWorld />, document.querySelector('#root')
);