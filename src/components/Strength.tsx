import { useStore } from "src/store/useStore";

type Strength = "weak" | "medium" | "strong";

export function Strength() {
	const { length } = useStore();

	const defaultStyle = "outline-zinc-200";
	const weakStyle = "outline-red-400 bg-red-400";
	const mediumStyle = "outline-amber-200 bg-amber-200";
	const strongStyle = "outline-green-200 bg-green-200";

	function barStyle(length: number, strength: Strength): string {
		if (length >= 16) return strongStyle;
		if (length >= 8 && strength !== "strong") return mediumStyle;
		if (length > 0 && strength === "weak") return weakStyle;

		return defaultStyle;
	}

	return (
		<div className="py-6 px-4 my-5 bg-zinc-900 flex items-center justify-between">
			<p className="text-xl text-zinc-500">STRENGTH</p>
			<div className="flex items-center">
				<p className="text-xl mx-2 text-zinc-200">
					{length === 0 ? "" : length < 8 ? "WEAK" : length < 16 ? "MEDIUM" : "STRONG"}
				</p>
				<div className="flex items-center justify-between">
					<div className={`h-7 w-2 mx-2 outline ${barStyle(length, "weak")}`}></div>
					<div className={`h-7 w-2 mx-2 outline ${barStyle(length, "medium")}`}></div>
					<div className={`h-7 w-2 mx-2 outline ${barStyle(length, "medium")}`}></div>
					<div className={`h-7 w-2 mx-2 outline ${barStyle(length, "strong")}`}></div>
				</div>
			</div>
		</div>
	);
}
