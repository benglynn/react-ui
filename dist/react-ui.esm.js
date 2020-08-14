import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Button {\n  border-radius: .2em;\n  border: 1px solid #333;\n  display: inline-flex;\n  justify-items: center;\n  min-height: 2em;\n  min-width: 5em;\n  text-align: center; }\n";
styleInject(css_248z);

var Button = function (_a) {
    var disabled = _a.disabled, label = _a.label;
    return (React.createElement("button", { className: ".Button", disabled: disabled }, label));
};

export { Button };
//# sourceMappingURL=react-ui.esm.js.map
