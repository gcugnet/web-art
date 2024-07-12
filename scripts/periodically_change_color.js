// -------------------------------------------------------------------------- //
//                              Define functions                              //
// -------------------------------------------------------------------------- //

/**
 * Generates a random integer from min to max.
 * @param {number} min – the minimum output value (included)
 * @param {number} max – the maximum output value (included)
 * @returns {number} – an integer between min and max (included)
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Slightly modifies an input color.
 * @param {string} strColor – the color string to slightly modify
 * @returns {string} – a color string
 */
function getDynamicRandomColor(strColor) {
  const color = extractColorValues(strColor);
  console.log(color);

  const r = Number(color[0]) + getRandomInt(-1, 1);
  const g = Number(color[1]) + getRandomInt(-1, 1);
  const b = Number(color[2]) + getRandomInt(-1, 1);

  const finalColor = `rgba(${r}, ${g}, ${b}, 0.3)`;

  return finalColor;
}

/**
 * Extracts the r, g, b, a values from a color string like:
 * "rgba(200, 150, 100, 0.5)".
 * @param {string} strColor – the input color
 * @returns {array{number}} – the output color values, like [r, g, b, a]
 */
function extractColorValues(strColor) {
  let color = strColor.split("(");
  color = color[1].split(")");
  color = color[0].split(",");

  const r = color[0].trim();
  const g = color[1].trim();
  const b = color[2].trim();
  const a = color[3] ? color[3] : "0.3";

  return [r, g, b, a];
}

/**
 * Slightly changes the filterElement color, based on the current
 * filterElement color.
 */
function changeColor() {
  const currentColor = window.getComputedStyle(filterElement).backgroundColor;
  filterElement.style.backgroundColor = `
    ${getDynamicRandomColor(currentColor)}
  `;
}

/**
 * Periodically changes the filterElement color, based on the current
 * filterElement color and a given interval.
 * The interval is set in milliseconds (1000 = 1sec).
 * @param {number} interval - The interval to change the color.
 */
function changeColorByInterval(interval) {
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
      changeColor();
    }, interval);
  });
}

// -------------------------------------------------------------------------- //
//                              Apply functions                               //
// -------------------------------------------------------------------------- //

// Uncomment to use the function.
// changeColorByInterval(1);
