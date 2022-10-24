import { Password } from "src/components/Password";
import { Options } from "src/components/Options";
import { Strength } from "src/components/Strength";

export function App() {
	return (
		<main className="container mx-auto px-4 h-screen grid place-items-center">
			<div>
				<h1 className="py-6 font-bold text-xl text-center text-zinc-500">
					Password Generator
				</h1>

				<Password />

				<form className="bg-zinc-800 p-4 my-6">
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
			</div>
		</main>
	);
}
