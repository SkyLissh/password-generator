import { ReactNode, useState } from "react";

type Props = {
	text?: string;
};

export function Checkbox({ text }: Props) {
	const [checked, setChecked] = useState(false);
	const style = checked ? "bg-green-200 outline-green-200" : "outline-zinc-200";

	return (
		<label className="my-4 flex items-center">
			<input type="checkbox" className="hidden" onChange={(e) => setChecked(!checked)} />
			<span
				className={`${style} outline w-5 h-5 flex items-center justify-center hover:outline-green-200 cursor-pointer`}
			>
				{checked && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={5}
						stroke="currentColor"
						className="w-5 h-5 text-zinc-900"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 12.75l6 6 9-13.5"
						/>
					</svg>
				)}
			</span>
			<p className="text-lg mx-4">{text}</p>
		</label>
	);
}
