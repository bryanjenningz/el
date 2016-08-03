# el
Declaratively transform JavaScript state to HTML with one simple function.

## How to get started.
Just copy and paste the code into a file and include that file in a script tag. Done! No messing around, just instant productivity.
`<script src="el.js"></script>`

## Examples
A simple DIV tag.
```javascript
var element = el('div', {class: 'message'}, 'hello');
```

If you want to make more complex structures, it's as simple as just nesting more calls to el.
```javascript
var state = {count: 0};
var element = (
  el('div', {class: 'counter'},
    el('button', {}, '+'),
    el('span', {class: 'count'}, state.count),
    el('button', {}, '-')
  )
);
```

If you want your view to react to changes, just use a simple rendering function that renders your elements to a DOM node after state changes. Here's a simple counter example.
```javascript
// index.js
var rootEl = document.getElementById('root');
var state = {count: 0};
var increment = () => { state.count++; render(); };
var decrement = () => { state.count--; render(); };
var render = () => {
  while (rootEl.firstChild) { rootEl.removeChild(rootEl.firstChild); }
  var element = (
    el('div', {class: 'counter'},
      el('button', {onclick: increment}, '+'),
      el('span', {class: 'count'}, state.count),
      el('button', {onclick: decrement}, '-')
    )
  );
  rootEl.appendChild(element);
};
render();
```
And then just add the root DIV tag to your HTML and it works!
```html
<!doctype html>
<html>
  <head></head>
  <body>
    <div id="root"></div>
    <script src="el.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

## API
It's just one function!
```javascript
el(type, attrs, ...children);
```
`type` is a `string` that represents the element's type, for example `'div'`, `'span'`, `'ul'`, `'li'`, etc.

`attrs` is an `object` that has the object's attribute names as the keys and their values as the values.

`children` are the remaining arguments which can be type DOM `elements`, `strings`, or `numbers`.
