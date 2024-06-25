"use client";

import { cva } from "class-variance-authority";
import { Label as Root } from "react-aria-components";
import type { LabelProps } from "react-aria-components";

import { cn } from "@/utils/utils";

const labelVariants = cva(
	"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = ({ className, ...props }: LabelProps) => (
	<Root className={cn(labelVariants(), className)} {...props} />
);

export { Label, labelVariants };
