import { renderToStaticMarkup } from 'react-dom/server';

/**
 * @name IconVault
 * @description A utility function for converting React icons to data URLs.
 * @author Ezeani Emmanuel
 *
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>>} icon - The React icon component to convert.
 *
 * @returns {string} The data URL representing the icon.
 *
 * @usage
 * 1. Import the `IconVault` function:
 *    import { IconVault } from './IconVault';
 *
 * 2. Use the `IconVault` function to convert a React icon to a data URL:
 *    const dataUrl = IconVault(icons.arrow_right);
 *
 *    Note: Replace `icons.arrow_right` with your actual React icon component.
 *
 * 3. Use the `dataUrl` in your CSS or inline styles:
 *    background-image: url(dataUrl);
 *
 * @example
 * // Import the required libraries
 * import { renderToStaticMarkup } from 'react-dom/server';
 *
 * // Define the IconVault function
 * const IconVault = (
 *   icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>
 * ) => {
 *   const svgString = renderToStaticMarkup(icon);
 *   const utf8Svg = decodeURIComponent(encodeURIComponent(svgString));
 *   const base64Svg = btoa(utf8Svg);
 *   const dataUrl = `url("data:image/svg+xml;base64,${base64Svg}")`;
 *   return dataUrl;
 * };
 *
 * @notes
 * This utility function converts a React icon component into a data URL
 * that can be used in CSS or inline styles. It encodes the SVG string to
 * base64 format and generates a data URL with the proper MIME type.
 * By using this function, you can easily integrate React icons into your
 * styling workflow.
 *
 * Please note that the function uses the `renderToStaticMarkup` function
 * from the `react-dom/server` module, so make sure to import it before using
 * the `IconVault` function.
 */

export const IconVault = (icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>): string => {
  const svgString = renderToStaticMarkup(icon);
  const utf8Svg = decodeURIComponent(encodeURIComponent(svgString));
  const base64Svg = btoa(utf8Svg);
  const dataUrl = `url("data:image/svg+xml;base64,${base64Svg}")`;
  return dataUrl;
};
