import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names or class name arrays into a single string.
 *
 * @param inputs - The class names or class name arrays to be combined.
 * @returns The combined class names as a string.
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cn };
