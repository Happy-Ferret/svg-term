const rgb = require('ansi-to-rgb');

module.exports = color;

function color(input, theme, fallback) {
  if (!input) {
    return null;
  }

  if (Array.isArray(input)) {
    return `rgb(${input.join(', ')})`;
  }

  const c = theme[input];

  if (c) {
    return `rgb(${c.join(', ')})`;
  }

  const r = rgb[Number(input)];

  if (r) {
    return `rgb(${r.join(', ')})`;
  }

  if (!fallback) {
    throw new TypeError(`color: Unknown ANSI color ${input}`);
  }

  return color(fallback);
}
