"use strict";

// import {h, render, Component} from 'preact';

/** @jsx h */
var HelloWorld = function HelloWorld() {
  return h("div", null, h("p", null, "Hello World"));
};

render(h(HelloWorld, null), document.body); // class Foo extends Component {
//   constructor(props) {
//     super(props);
//     this.name = "anderson";
//   }
//   render(props) {
//     return(
//       <div>
//         <span>{this.props.name}</span>
//       </div>
//     )
//   }
// }
// render(<HelloWorld />, document.body);
// render(<Foo name={"bar"} />, document.body)
