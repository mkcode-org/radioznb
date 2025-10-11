'use client'

import SwapImage from '@/components/ImageSwap'
import TapePlayer from '@/components/TapePlayer'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center h-full mt-10'>
			<TapePlayer />
			<div className='flex justify-evenly w-full flex-wrap'>
				<Link href={'/library'}>
					<SwapImage
						src='/assets/tab-archive.jpg'
						hover='/assets/tab-archive-bold.jpg'
						size={200}
					/>
				</Link>
				<Link href={'/about'}>
					<SwapImage
						src='/assets/tab-who2.jpg'
						hover='/assets/tab-who-bold.jpg'
						size={200}
					/>
				</Link>
			</div>
		</div>
	)
}
