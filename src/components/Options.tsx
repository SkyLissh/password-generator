import { ChangeEvent } from "react";
import { Slider } from "src/components/Slider";
import { Checkbox } from "src/components/Checkbox";
import { useStore } from "src/store/useStore";

export function Options() {
	const { length, setLength } = useStore();
	const { uppercase, setUppercase } = useStore();
	const { lowercase, setLowercase } = useStore();
	const { numbers, setNumbers } = useStore();
	const { symbols, setSymbols } = useStore();

	const options = [uppercase, lowercase, numbers, symbols];

	function onLengthChange(e: ChangeEvent<HTMLInputElement>) {
		setLength(Math.round(parseInt(e.target.value) / 5));
	}

	return (
		<>
			<fieldset>
				<label>
					<p className="text-lg flex items-center justify-between my-2">
						Character Length
						<span className="text-3xl text-green-200 font-semibold">{length}</span>
					</p>
					<Slider value={length * 5} onChange={onLengthChange} />
				</label>
				{length === 0 && (
					<p className="text-red-400 text-sm font-semibold mt-2">
						Length must be greater than 0
					</p>
				)}
			</fieldset>

			<fieldset className="my-4">
				<Checkbox
					checked={uppercase}
					onClick={setUppercase}
					text="Include Uppercase Letters"
				/>
				<Checkbox
					checked={lowercase}
					onClick={setLowercase}
					text="Include Lowercase Letters"
				/>
				<Checkbox checked={numbers} onClick={setNumbers} text="Include Numbers" />
				<Checkbox checked={symbols} onClick={setSymbols} text="Include Symbols" />

				{options.every((option) => !option) && (
					<p className="text-red-400 text-sm mt-2">You must select at least one option</p>
				)}
			</fieldset>
		</>
	);
}
