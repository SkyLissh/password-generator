import { forwardRef } from "react";

type Props = {
	message: string;
};

export const Tooltip = forwardRef<HTMLDivElement, Props>(({ message }, ref) => {
	const after =
		"after:absolute after:top-full after:left-1/2 after:-ml-[5px] after:border-[5px] after:border-t-green-200 after:border-r-transparent after:border-b-transparent after:border-l-transparent after:content-[''] after:block after:w-0 after:h-0 after:z-10";

	return (
		<div
			ref={ref}
			className={`hidden absolute left-50% -ml-7 bottom-[125%] p-[5px] ${after}`}
		>
			<span className="bg-green-200 text-zinc-900 text-sm font-bold p-2">{message}</span>
		</div>
	);
});
