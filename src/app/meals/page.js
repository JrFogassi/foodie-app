import { getMeals } from "@/lib/meals";
import MealsGrid from "@/src/components/Meals/mealsGrid";
import Link from "next/link";
import { Suspense } from "react";
import styles from "./page.module.css";

export const metadata = {
	title: "All Meals",
	description: "Browse the delicious meals shared byy our community.",
};

async function Meals() {
	const meals = await getMeals();

	return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
	return (
		<>
			<header className={styles.header}>
				<h1>
					Delicious meals, created{" "}
					<span className={styles.highlight}>by you</span>
				</h1>
				<p>Choose your favorite recipe and cook it yourself.</p>
				<p className={styles.cta}>
					<Link href="/meals/share">Share Your Favorite Recipe</Link>
				</p>
			</header>
			<main className={styles.main}>
				<Suspense
					fallback={<p className={styles.loading}>Fetching meals...</p>}
				>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}
