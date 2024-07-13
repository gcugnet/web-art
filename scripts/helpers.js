// -------------------------------------------------------------------------- //
//                              Define functions                              //
// -------------------------------------------------------------------------- //

/**
 * Generates a random integer from min to max.
 * @param {number} min – the minimum output value (included)
 * @param {number} max – the maximum output value (included)
 * @returns {number} – an integer between min and max (included)
 */
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Extracts the r, g, b, a values from a color string like:
 * "rgba(200, 150, 100, 0.5)".
 * @param {string} strColor – the input color
 * @returns {array{number}} – the output color values, like [r, g, b, a]
 */
export function extractColorValues(strColor) {
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
 * Extracts the red value from a color string like:
 * "rgba(200, 150, 100, 0.5)".
 * @param {string} strColor – the input color
 * @returns {string} – the isolated red value
 */
export function getRedColor(strColor) {
  const rgba = extractColorValues(strColor);
  return rgba[0];
}

/**
 * Extracts the green value from a color string like:
 * "rgba(200, 150, 100, 0.5)".
 * @param {string} strColor – the input color
 * @returns {string} – the isolated green value
 */
export function getBlueColor(strColor) {
  const rgba = extractColorValues(strColor);
  return rgba[1];
}

/**
 * Extracts the blue value from a color string like:
 * "rgba(200, 150, 100, 0.5)".
 * @param {string} strColor – the input color
 * @returns {string} – the isolated blue value
 */
export function getGreenColor(strColor) {
  const rgba = extractColorValues(strColor);
  return rgba[2];
}
