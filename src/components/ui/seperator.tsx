"use client";

import { Separator as Root } from "react-aria-components";
import type { SeparatorProps } from "react-aria-components";

import { cn } from "@/utils/utils";

const Separator = ({
	className,
	orientation = "horizontal",
	...props
}: SeparatorProps) => (
	<Root
		className={cn(
			"bg-border shrink-0 border-none",
			orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
			className
		)}
		orientation={orientation}
		{...props}
	/>
);

export { Separator };
