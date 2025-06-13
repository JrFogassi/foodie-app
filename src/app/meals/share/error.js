"use client";

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({ error }) {
	return (
		<main className="error">
			<h1>An error occurred!</h1>
			<p>Failed to create meal. Please try again later.</p>
		</main>
	);
}
