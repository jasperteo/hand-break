import { TextArea as Root } from "react-aria-components";
import type { TextAreaProps } from "react-aria-components";

import { cn } from "@/utils/utils";

const TextArea = ({ className, ...props }: TextAreaProps) => {
	return (
		<Root
			className={cn(
				"border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border bg-transparent py-2 px-3 text-sm shadow-sm focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...props}
		/>
	);
};

export { TextArea };
