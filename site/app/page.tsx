'use client'

import SwapImage from '@/components/ImageSwap'
import TapePlayer from '@/components/TapePlayer'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center h-full sm:mt-20 mt-10'>
			<TapePlayer />
			<div className='flex justify-around flex-wrap w-full'>
				<Link href={'/library'} className='max-sm:w-1/3'>
					<SwapImage
						src='/assets/tab-archive.jpg'
						hover='/assets/tab-archive-bold.jpg'
						size={200}
					/>
				</Link>
				<Link href={'/about'} className='max-sm:w-1/3'>
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
