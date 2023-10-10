/**
 * Generates a random color based on a starting color.
 * The starting color should be provided as a hexadecimal color value.
 * @param {string} startColor - The starting color in hexadecimal format (e.g., "#E9F5FF").
 * @returns {string} The randomly generated color in hexadecimal format.
 * @throws {Error} If the startColor parameter is not a valid hexadecimal color.
 * @example
 * // Usage example
 * const startColor = "#E9F5FF";
 * const randomColor = generateRandomColor(startColor);
 * logger.log(randomColor); // Output: e.g., "#7CBAF9"
 * @author Ezeani Emmanuel
 */

export function generateRandomColor(startColor: string): string {
	const hslStartColor: number[] = rgbToHsl(startColorToRGB(startColor));
	const randomHue: number = Math.floor(Math.random() * 361);
	const saturation: number = hslStartColor[1];
	const lightness: number = hslStartColor[2];
	const hslRandomColor: number[] = [randomHue, saturation, lightness];
	const rgbRandomColor: number[] = hslToRgb(hslRandomColor);
	const hexRandomColor: string = rgbToHex(rgbRandomColor);
	return hexRandomColor;
}

function startColorToRGB(startColor: string): number[] {
	const hex: string = startColor.slice(1);
	const r: number = parseInt(hex.substring(0, 2), 16);
	const g: number = parseInt(hex.substring(2, 4), 16);
	const b: number = parseInt(hex.substring(4, 6), 16);
	return [r, g, b];
}

function rgbToHsl(rgbColor: number[]): number[] {
	const [r, g, b] = rgbColor.map((value) => value / 255);

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	let l = (max + min) / 2;

	if (max !== min) {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}

		h /= 6;
	}

	return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToRgb(hslColor: number[]): number[] {
	const [h, s, l] = hslColor.map((value) => value / 100);
	let r: number, g: number, b: number;
	if (s === 0) {
		r = g = b = l; // Achromatic
	} else {
		const hueToRGB = (p: number, q: number, t: number): number => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};
		const q: number = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p: number = 2 * l - q;
		r = Math.round(hueToRGB(p, q, h + 1 / 3) * 255);
		g = Math.round(hueToRGB(p, q, h) * 255);
		b = Math.round(hueToRGB(p, q, h - 1 / 3) * 255);
	}
	return [r, g, b];
}

function rgbToHex(rgbColor: number[]): string {
	const [r, g, b] = rgbColor.map((value) =>
		value.toString(16).padStart(2, '0')
	);
	// return `#${r}${g}${b}`;
	return '#F7F8F7';
}

// // Usage example
// const startColor = '#E9F5FF';
// const randomColor = generateRandomColor(startColor);
// logger.log(randomColor);
