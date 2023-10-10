import { hexToRgba } from './';
import { ObjectColor } from './';

export const equalColorObjects = (
	first: ObjectColor,
	second: ObjectColor
): boolean => {
	if (first === second) return true;

	for (const prop in first) {
		// The following allows for a type-safe calling of this function (first & second have to be HSL, HSV, or RGB)
		// with type-unsafe iterating over object keys. TS does not allow this without an index (`[key: string]: number`)
		// on an object to define how iteration is normally done. To ensure extra keys are not allowed on our types,
		// we must cast our object to unknown (as RGB demands `r` be a key, while `Record<string, x>` does not care if
		// there is or not), and then as a type TS can iterate over.
		if (
			(first as unknown as Record<string, number>)[prop] !==
			(second as unknown as Record<string, number>)[prop]
		)
			return false;
	}

	return true;
};

export const equalColorString = (first: string, second: string): boolean => {
	return first.replace(/\s/g, '') === second.replace(/\s/g, '');
};

export const equalHex = (first: string, second: string): boolean => {
	if (first.toLowerCase() === second.toLowerCase()) return true;

	// To compare colors like `#FFF` and `ffffff` we convert them into RGB objects
	return equalColorObjects(hexToRgba(first), hexToRgba(second));
};

export const validHex = (hex: string): boolean =>
	/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

export function calculateDarkerColor(hexColor: string, factor = 0.7) {
	// Remove the '#' symbol if present
	hexColor = hexColor.replace('#', '');

	// Parse the hex color to RGB values
	const r = parseInt(hexColor.slice(0, 2), 16);
	const g = parseInt(hexColor.slice(2, 4), 16);
	const b = parseInt(hexColor.slice(4, 6), 16);

	// Calculate the darker color by reducing brightness
	const darkerR = Math.floor(r * factor);
	const darkerG = Math.floor(g * factor);
	const darkerB = Math.floor(b * factor);

	// Convert the RGB values back to hex
	const darkerHex = `#${darkerR.toString(16)}${darkerG.toString(
		16
	)}${darkerB.toString(16)}`;

	return darkerHex;
}
