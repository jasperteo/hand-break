import type { InputHTMLAttributes } from "react";
import { Input as Root } from "react-aria-components";

import { cn } from "@/utils/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
	return (
		<Root
			className={cn(
				"border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent py-1 px-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...props}
		/>
	);
};

export { Input };
