import Link from "next/link";

import logoImg from "@/assets/logo.png";
import Image from "next/image";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./mainHeaderBackground";

export default function MainHeader() {
	return (
		<>
			<MainHeaderBackground />
			<header className={styles.header}>
				<Link className={styles.logo} href="/">
					{/* biome-ignore lint/a11y/useAltText: <explanation> */}
					<Image src={logoImg} alt="icon" priority />
					NextLevel Food
				</Link>

				<nav className={styles.nav}>
					<ul>
						<li>
							<Link href="/meals">Browse Meals</Link>
						</li>
						<li>
							<Link href="/community">Foodies Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
