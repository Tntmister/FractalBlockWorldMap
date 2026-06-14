import localFont from "next/font/local";

const font = localFont({ src: "../../public/whiterabbit.woff" });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='google-site-verification'
					content='oyo0C9EsUZVa6qZaPylM7PInBZ_DK3jeMy_5I4towDk'
				/>
				<title>Fractal Block World Map</title>
				<meta
					name='description'
					content='A (mostly) accurate map of Fractal Block World, including pathfinding from one place to another.'
				/>
				<meta name='author' content='Tntmister' />
			</head>
			<body className={font.className}>{children}</body>
		</html>
	);
}
