import { Options } from "src/models/Options";

function getCharacters(options: Options): string {
	const characters = [];

	if (options.lowercase) {
		characters.push(..."abcdefghijklmnopqrstuvwxyz");
	}

	if (options.uppercase) {
		characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
	}

	if (options.numbers) {
		characters.push(..."0123456789");
	}

	if (options.symbols) {
		characters.push(..."!@#$%^&*()_+-=[]{};':,./<>?");
	}

	return characters.join("");
}

export function generatePassword(length: number, options: Options): string {
	let result = "";
	const characters = getCharacters(options);

	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
