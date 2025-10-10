import ConvexContextProvider from '@/components/ConvexContext'
import { ThemeProvider } from '@/components/ThemeProvider'
import PlayerBar from '@/components/PlayerBar/Player'
import { PlayerContextProvider } from '@/components/PlayerBar/PlayerContext'
import type { Metadata } from 'next'
import './globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='m-4'>
				<ConvexContextProvider>
					<PlayerContextProvider>
						<ThemeProvider>
							<div className='min-w-full fixed inset-0 -z-10 min-h-full bg-black dark:block hidden opacity-70 blur-3xl' />
							{children}
							<PlayerBar />
						</ThemeProvider>
					</PlayerContextProvider>
				</ConvexContextProvider>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	title: 'радио зимы не будет — next',
}
