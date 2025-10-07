import ConvexContextProvider from '@/components/ConvexContext'
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
		<html lang='en'>
			<body className='m-4'>
				<ConvexContextProvider>
					<PlayerContextProvider>
						{children}
						<PlayerBar />
					</PlayerContextProvider>
				</ConvexContextProvider>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	title: 'радио зимы не будет — next',
}
