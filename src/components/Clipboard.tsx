import { useRef } from "react";
import { Tooltip } from "src/components/Tooltip";

type Props = {
	disabled: boolean;
};

export function Clipboard({ disabled }: Props) {
	const tooltipRef = useRef<HTMLDivElement>(null);

	function showTooltip() {
		if (tooltipRef.current) {
			tooltipRef.current.classList.remove("hidden");
		}
	}

	function hideTooltip() {
		if (tooltipRef.current && !tooltipRef.current.classList.contains("hidden")) {
			tooltipRef.current.classList.add("hidden");
		}
	}

	return (
		<button
			className="relative"
			disabled={disabled}
			onClick={showTooltip}
			onMouseOut={hideTooltip}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke="currentColor"
				className={`w-7 h-7 ${disabled ? "text-zinc-600" : "text-green-200"}`}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
				/>
			</svg>

			<Tooltip ref={tooltipRef} message="Copied!" />
		</button>
	);
}
