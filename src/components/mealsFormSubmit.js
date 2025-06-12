"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
	const { pending } = useFormStatus();

	return (
		// biome-ignore lint/a11y/useButtonType: <explanation>
		<button disabled={pending}>
			{pending ? "Submitting..." : "Share Meal"}
		</button>
	);
}
