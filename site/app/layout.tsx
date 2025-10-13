import ConvexContextProvider from '@/components/ConvexContext'
import PlayerBar from '@/components/PlayerBar/Player'
import { PlayerContextProvider } from '@/components/PlayerBar/PlayerContext'
import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'
import './globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='mb-34'>
				<ConvexContextProvider>
					<PlayerContextProvider>
						<ThemeProvider>
							<div className='sm:px-16 p-6'>{children}</div>
							<PlayerBar />
						</ThemeProvider>
					</PlayerContextProvider>
				</ConvexContextProvider>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	title: 'радио зимы не будет',
	openGraph: {
		title: 'радио зимы не будет',
	},
	robots: {
		index: true,
		follow: true,
	},
}
