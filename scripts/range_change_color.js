// -------------------------------------------------------------------------- //
//                              Import functions                              //
// -------------------------------------------------------------------------- //

import { getRedColor, getGreenColor, getBlueColor } from "./helpers.js";

// -------------------------------------------------------------------------- //
//                              Import constants                              //
// -------------------------------------------------------------------------- //

import { FILTER_ELEMENT, FILTER_COLORS } from "./init_consts.js";

// -------------------------------------------------------------------------- //
//                              Define constants                              //
// -------------------------------------------------------------------------- //

/** Initialize redInput */
const redInput = document.querySelector(".range-red");

/** Initialize greenInput */
const greenInput = document.querySelector(".range-green");

/** Initialise blueInput */
const blueInput = document.querySelector(".range-blue");

// -------------------------------------------------------------------------- //
//                              Define variables                              //
// -------------------------------------------------------------------------- //

/** Initialize redValue */
let redValue = getRedColor(FILTER_COLORS);

/** Initialize greenValue */
let greenValue = getGreenColor(FILTER_COLORS);

/** Initialize blueValue */
let blueValue = getBlueColor(FILTER_COLORS);

// -------------------------------------------------------------------------- //
//                              Define functions                              //
// -------------------------------------------------------------------------- //

/** Initialize the range input values, according to the current filter color. */
function initRangeValues() {
  redInput.value = getRedColor(FILTER_COLORS);
  greenInput.value = getGreenColor(FILTER_COLORS);
  blueInput.value = getBlueColor(FILTER_COLORS);
}

/**
 * Adds event listeners for the 3 range inputs and proceed to real-time update
 * for these colors.
 */
function addEventListeners() {
  redInput.addEventListener("input", updateRed);
  greenInput.addEventListener("input", updateGreen);
  blueInput.addEventListener("input", updateBlue);
}

/** Updates the red color and call the updateColor function. */
function updateRed() {
  redValue = redInput.value;
  updateColor();
}

/** Updates the green color and call the updateColor function. */
function updateGreen() {
  greenValue = greenInput.value;
  updateColor();
}

/** Updates the blue color and call the updateColor function. */
function updateBlue() {
  blueValue = blueInput.value;
  updateColor();
}

/** Updates the filter color, based on the range inputs. */
function updateColor() {
  FILTER_ELEMENT.style.backgroundColor = `
    rgba(${redValue}, ${greenValue}, ${blueValue}, 0.3)
    `;

  console.log(`Red: ${redValue}, Green: ${greenValue}, Blue: ${blueValue}`);
}

// -------------------------------------------------------------------------- //
//                              Apply functions                               //
// -------------------------------------------------------------------------- //

initRangeValues();

addEventListeners();

updateColor();
