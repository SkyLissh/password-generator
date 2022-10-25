type Props = {
	value: number;

	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Slider({ value, onChange }: Props) {
	return (
		<div className="w-full relative">
			<input
				type="range"
				name="slider"
				min={0}
				max={100}
				value={value}
				className="w-full cursor-pointer opacity-0 appearance-none"
				onChange={onChange}
			/>

			<div className="w-full h-2 bg-zinc-900 absolute top-2/4 -translate-y-2/4 pointer-events-none">
				<div className="h-full bg-green-200" style={{ width: `${value}%` }}></div>
			</div>
			<div
				className="w-8 h-8 absolute top-2/4 bg-green-200 rounded-full hover:bg-zinc-900 pointer-events-none"
				style={{ left: `${value}%`, transform: `translate(-${value}%, -50%)` }}
			></div>
		</div>
	);
}
