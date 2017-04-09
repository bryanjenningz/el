function el(type, attrs, ...children) {
  const element = document.createElement(type);

  for (const attrKey in attrs) {
    if (attrKey.indexOf('on') === 0) {
      element[attrKey] = attrs[attrKey];
    } else {
      element.setAttribute(attrKey, attrs[attrKey]);
    }
  }

  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    if (['string', 'number'].indexOf(typeof child) >= 0) {
      const text = String(child);
      child = document.createElement('span');
      child.textContent = text;
      element.appendChild(child);
    } else if (Array.isArray(child)) {
      for (let j = 0; j < child.length; j++) {
        element.appendChild(child[j]);
      }
    } else { // then child is an element, so we can just append it
      element.appendChild(child);
    }
  }
  
  return element;
}
