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
