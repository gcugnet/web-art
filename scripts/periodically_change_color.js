// -------------------------------------------------------------------------- //
//                              Import functions                              //
// -------------------------------------------------------------------------- //

import { getRandomInt, extractColorValues } from "./helpers.js";

// -------------------------------------------------------------------------- //
//                              Import constants                              //
// -------------------------------------------------------------------------- //

import { FILTER_ELEMENT, BUTTON_ELEMENT } from "./init_consts.js";

// -------------------------------------------------------------------------- //
//                              Define functions                              //
// -------------------------------------------------------------------------- //

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
 * Slightly changes the FILTER_ELEMENT color, based on the current
 * FILTER_ELEMENT color.
 */
function changeColor() {
  const currentColor = window.getComputedStyle(FILTER_ELEMENT).backgroundColor;
  FILTER_ELEMENT.style.backgroundColor = `
    ${getDynamicRandomColor(currentColor)}
  `;
}

/**
 * Periodically changes the FILTER_ELEMENT color, based on the current
 * FILTER_ELEMENT color and a given interval.
 * The interval is set in milliseconds (1000 = 1sec).
 * @param {number} interval - The interval to change the color.
 */
function changeColorByInterval(interval) {
  BUTTON_ELEMENT.addEventListener("click", () => {
    BUTTON_ELEMENT.style.display = "none";
    setInterval(() => {
      changeColor();
    }, interval);
  });
}

// -------------------------------------------------------------------------- //
//                              Apply functions                               //
// -------------------------------------------------------------------------- //

changeColorByInterval(1);
