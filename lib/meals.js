import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	//throw new Error("Loading meals failed");
	// biome-ignore lint/correctness/noUnreachable: <explanation>
	return db.prepare("SELECT * FROM meals").all();
}
