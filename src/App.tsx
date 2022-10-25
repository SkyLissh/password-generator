import { FormEvent } from "react";

import { useStore } from "src/store/useStore";

import { Password } from "src/components/Password";
import { Options } from "src/components/Options";
import { Strength } from "src/components/Strength";

export function App() {
	const { length, uppercase, lowercase, numbers, symbols } = useStore();
	const options = [uppercase, lowercase, numbers, symbols];

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (length === 0 || options.every((option) => !option)) return;

		const data = new FormData(e.currentTarget);
		console.log(data.get("slider"));
	}

	return (
		<>
			<h1 className="py-6 font-bold text-xl md:text-2xl text-center text-zinc-500">
				Password Generator
			</h1>

			<Password />

			<form onSubmit={onSubmit} className="bg-zinc-800 p-4 my-6 md:px-6 md:py-4">
				<Options />
				<Strength />
				<button className="w-full bg-green-200 p-4 text-zinc-900 font-bold text-xl flex items-center justify-center border-[5px] border-green-200 hover:bg-zinc-800 hover:text-green-200 transition-colors ease-in-out duration-200">
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
