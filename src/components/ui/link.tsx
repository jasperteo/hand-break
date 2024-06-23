"use client";

import { Link as Root } from "react-aria-components";
import type { LinkProps } from "react-aria-components";
import type { VariantProps } from "class-variance-authority";

import { buttonVariants } from "./button";
import { cn } from "@/utils/utils";

type ButtonLinkProps = LinkProps & VariantProps<typeof buttonVariants>;

const Link = ({ ...props }: LinkProps) => <Root {...props} />;

const ButtonLink = ({
	className,
	variant,
	size,
	...props
}: ButtonLinkProps) => (
	<Link
		className={cn(buttonVariants({ variant, size }), className)}
		{...props}
	/>
);

export { Link, ButtonLink };
