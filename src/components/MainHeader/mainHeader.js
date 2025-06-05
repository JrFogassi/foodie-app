import Link from "next/link";

import logoImg from "@/assets/logo.png";
import Image from "next/image";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./mainHeaderBackground";
import NavLink from "./navLink";

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
							<NavLink href="/meals">Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Foodies Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
