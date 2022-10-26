import { FormEvent } from "react";
import { useClipboard } from "src/hooks/useClipborad";

import { Clipboard } from "src/components/Clipboard";

type Props = {
	password?: string;
};

export function Password({ password }: Props) {
	const [value, copy] = useClipboard();

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!password) return;

		copy(password);
	};

	return (
		<form
			onSubmit={onSubmit}
			className="bg-zinc-800 p-4 flex justify-between md:px-6 md:py-4"
		>
			<input
				className="bg-transparent text-2xl md:text-3xl font-bold w-[90%] outline-none placeholder:text-zinc-600 placeholder:font-bold"
				placeholder="P4$5W0rD!"
				value={password}
				disabled
			/>
			<Clipboard disabled={!password} />
		</form>
	);
}
