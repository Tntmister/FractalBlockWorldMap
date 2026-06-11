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
			</head>
			<body className={font.className}>{children}</body>
		</html>
	);
}
