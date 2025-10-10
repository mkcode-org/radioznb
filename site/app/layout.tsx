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
			<body className='m-4'>
				<ConvexContextProvider>
					<PlayerContextProvider>
						<ThemeProvider>
							<div className='fixed inset-0 sm:px-16 px-10 mb-20'>
								<div className='sm:px-4 px-0 h-full'>{children}</div>
							</div>
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
