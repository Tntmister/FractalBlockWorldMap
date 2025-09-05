import localFont from "next/font/local";

const font = localFont({ src: "../../public/whiterabbit.woff" });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	);
}
