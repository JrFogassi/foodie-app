import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export async function generateMetadata({ params }) {
	const meal = getMeal(params.mealSlug);

	if (!meal) {
		notFound();
	}

	return {
		title: meal.title,
		description: meal.summary,
	};
}
export default function MealDetailsPage({ params }) {
	const meal = getMeal(params.mealSlug);

	if (!meal) {
		notFound();
	}

	meal.instructions = meal.instructions.replace(/\n/g, "<br />");

	return (
		<>
			<header className={styles.header}>
				<div className={styles.image}>
					<Image src={meal.image} alt={meal.title} fill />
				</div>
				<div className={styles.headerText}>
					<h1>{meal.title}</h1>
					<p className={styles.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={styles.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
				<p
					className={styles.instructions}
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={{
						__html: meal.instructions,
					}}
				></p>
			</main>
		</>
	);
}
