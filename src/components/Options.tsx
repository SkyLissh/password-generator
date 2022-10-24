import { useState } from "react";
import { Slider } from "src/components/Slider";
import { Checkbox } from "src/components/Checkbox";

export function Options() {
	const [length, setLength] = useState(0);

	function onChangeLength(e: React.ChangeEvent<HTMLInputElement>) {
		setLength(Number(e.target.value));
	}

	return (
		<>
			<fieldset>
				<label>
					<p className="text-lg flex items-center justify-between my-2">
						Character Length
						<span className="text-3xl text-green-200 font-semibold">
							{Math.round(length / 5)}
						</span>
					</p>
					<Slider value={length} min={0} max={100} onChange={onChangeLength} />
				</label>
			</fieldset>

			<fieldset className="my-4">
				<Checkbox text="Include Uppercase Letters" />
				<Checkbox text="Include Lowercase Letters" />
				<Checkbox text="Include Numbers" />
				<Checkbox text="Include Symbols" />
			</fieldset>
		</>
	);
}
