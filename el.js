function el(type, attrs, ...children) {
  var element = document.createElement(type);
  for (var attrKey in attrs) {
    if (attrKey.indexOf('on') === 0) {
      element[attrKey] = attrs[attrKey];
    } else {
      element.setAttribute(attrKey, attrs[attrKey]);
    }
  }
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (['string', 'number'].indexOf(typeof child) >= 0) {
      var text = child;
      child = document.createElement('span');
      child.textContent = text;
    }
    element.appendChild(child);
  }
  return element;
}
