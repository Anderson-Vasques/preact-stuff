// import {h, render, Component} from 'preact';

/** @jsx h */

const HelloWorld = () => (
  <div>
    <p>Hello World</p>
  </div>
);


render(<HelloWorld />, document.body);

// class Foo extends Component {
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