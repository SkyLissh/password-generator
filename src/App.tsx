import { FormEvent, useState } from "react";

import { useStore } from "src/store/useStore";
import { generatePassword } from "src/utils/generatePassword";

import { Password } from "src/components/Password";
import { Options } from "src/components/Options";
import { Strength } from "src/components/Strength";

export function App() {
	const [password, setPassword] = useState("");

	const { length, uppercase, lowercase, numbers, symbols } = useStore();
	const options = [uppercase, lowercase, numbers, symbols];

	const invalid = options.every((option) => !option) || length === 0;
	const buttonStyle = invalid
		? "bg-transparent border-zinc-600 text-zinc-600"
		: "bg-green-200 text-zinc-900 border-green-200 hover:bg-zinc-800 hover:text-green-200";

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (invalid) return;

		setPassword(generatePassword(length, { uppercase, lowercase, numbers, symbols }));
	}

	return (
		<>
			<h1 className="py-6 font-bold text-xl md:text-2xl text-center text-zinc-500">
				Password Generator
			</h1>

			<Password password={password} />

			<form onSubmit={onSubmit} className="bg-zinc-800 p-4 my-6 md:px-6 md:py-4">
				<Options />
				<Strength />
				<button
					className={`w-full p-4 font-bold text-xl flex items-center justify-center border-[5px] transition-colors ease-in-out duration-200 ${buttonStyle}`}
					disabled={invalid}
				>
					GENERATE
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={4}
						stroke="currentColor"
						className="w-4 h-4 mx-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
						/>
					</svg>
				</button>
			</form>
		</>
	);
}
