import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StoreState {
	length: number;
	uppercase: boolean;
	lowercase: boolean;
	numbers: boolean;
	symbols: boolean;

	setLength: (length: number) => void;
	setUppercase: () => void;
	setLowercase: () => void;
	setNumbers: () => void;
	setSymbols: () => void;
}

export const useStore = create<StoreState>()(
	devtools(
		persist(
			(set) => ({
				length: 10,
				setLength: (length: number) => set({ length }),

				uppercase: true,
				setUppercase: () => set((state) => ({ uppercase: !state.uppercase })),

				lowercase: true,
				setLowercase: () => set((state) => ({ lowercase: !state.lowercase })),

				numbers: true,
				setNumbers: () => set((state) => ({ numbers: !state.numbers })),

				symbols: true,
				setSymbols: () => set((state) => ({ symbols: !state.symbols }))
			}),
			{
				name: "password-generator"
			}
		)
	)
);
