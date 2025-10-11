'use client'

import SwapImage from '@/components/ImageSwap'
import RadioPlayer from '@/components/RadioPlayer'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col justify-evenly items-center gap-8 h-full'>
			<RadioPlayer />
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
