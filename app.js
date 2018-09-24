"use strict";

//REF:  https://gist.github.com/developit/da77a4d3bbf365908c8c

/** Render Virtual DOM to the real DOM */
function render(vnode) {
  if (typeof vnode === 'string') return document.createTextNode(vnode);
  var n = document.createElement(vnode.nodeName);
  Object.keys(vnode.attributes || {}).forEach(function (k) {
    return n.setAttribute(k, vnode.attributes[k]);
  });
  (vnode.children || []).forEach(function (c) {
    return n.appendChild(render(c));
  });
  return n;
}
/** hyperscript generator, gets called by transpiled JSX */


function h(nodeName, attributes) {
  var _ref;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var children = args.length ? (_ref = []).concat.apply(_ref, args) : null;
  return {
    nodeName: nodeName,
    attributes: attributes,
    children: children
  };
}
/** @jsx h */
// ^^^^ this tells a transpiler to inject calls to an `h()` function for each node.


var ITEMS = 'hello there people'.split(' '); // a "partial" that does a filtered loop - no template BS, just functional programming:

function foo(items) {
  // imagine templates that adhere to your JS styleguide...
  return items.map(function (p) {
    return h("li", null, " ", p, " ");
  }); // <-- can be multiline
} // a simple JSX "view" with a call out ("partial") to generate a list from an Array:


var vdom = h("div", {
  id: "foo"
}, h("p", null, "Look, a simple JSX DOM renderer!"), h("ul", null, foo(ITEMS))); // render() converts our "virtual DOM" (see below) to a real DOM tree:

var dom = render(vdom); // append the new nodes somewhere:

document.body.appendChild(dom); // Remember that "virtual DOM"? It's just JSON - each "VNode" is an object with 3 properties.

var json = JSON.stringify(vdom, null, '  '); // The whole process (JSX -> VDOM -> DOM) in one step:

document.body.appendChild(render(h("pre", null, json)));
