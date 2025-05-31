import "./globals.css";

export const metadata = {
	title: "NextJs Course App",
	description: "My first NextJs app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
