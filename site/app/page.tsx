'use client'

import SwapImage from '@/components/ImageSwap'
import TapePlayer from '@/components/TapePlayer'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center inset-0 fixed'>
			<TapePlayer />
			<div className='flex justify-evenly flex-wrap w-full'>
				<Link href={'/library'} className='max-sm:w-1/3'>
					<SwapImage
						src='/assets/tab-archive.jpg'
						hover='/assets/tab-archive-bold.jpg'
						size={200}
					/>
				</Link>
				<Link href={'/about'} className='max-sm:w-1/3'>
					<SwapImage
						src='/assets/tab-who.jpg'
						hover='/assets/tab-who-bold.jpg'
						size={200}
					/>
				</Link>
			</div>
		</div>
	)
}
