import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import AuthProvider from "@/components/auth/AuthProvider";
import {ApolloWrapper} from "@/lib/apollo-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<ApolloWrapper>
				<AuthProvider>
					<body
						className={inter.className + " text-black h-screen flex flex-col"}
					>
						<NavBar />
						{children}
					</body>
				</AuthProvider>
			</ApolloWrapper>
		</html>
	);
}
