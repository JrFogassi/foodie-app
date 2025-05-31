import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1>Morgana, i love you.</h1>
			<p>
				<Link href="/about">About us</Link>
			</p>
		</main>
	);
}
