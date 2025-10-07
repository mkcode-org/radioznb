'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

const PlayerBarWavesAnimation: FC<{ playing: boolean }> = ({ playing }) => {
	const [src, setSrc] = useState<Wave>(waves[0])

	useEffect(() => {
		setSrc(waves[Math.floor(Math.random() * waves.length)])

		const interval = setInterval(() => {
			setSrc((prev) => {
				const nextIndex = (waves.indexOf(prev) + 1) % waves.length
				return waves[nextIndex]
			})
		}, 2000)
		return () => clearInterval(interval)
	}, [playing])

	return <div className='grow'>{playing && <Waves src={src.right} />}</div>
}

const Waves: FC<{ src: string[] }> = ({ src }) => (
	<div className='absolute h-2/5 top-6 w-16 flex gap-4'>
		<div
			className={`animate-fadeInOut relative opacity-0 w-1/8`}
			style={{ animationDelay: '0ms' }}
		>
			<Image src={src[0]} alt='wave-r-1' fill />
		</div>
		<div
			className={`animate-fadeInOut relative opacity-0 w-1/6`}
			style={{ animationDelay: '250ms' }}
		>
			<Image src={src[1]} alt='wave-r-2' fill />
		</div>
		<div
			className={`animate-fadeInOut relative opacity-0 w-1/4`}
			style={{ animationDelay: '500ms' }}
		>
			<Image src={src[2]} alt='wave-r-3' fill />
		</div>
	</div>
)

const waves = [
	{
		left: [
			'/assets/waves/lwave-11.png',
			'/assets/waves/lwave-21.png',
			'/assets/waves/lwave-31.png',
		],
		right: [
			'/assets/waves/rwave-11.png',
			'/assets/waves/rwave-21.png',
			'/assets/waves/rwave-31.png',
		],
	},
	{
		left: [
			'/assets/waves/lwave-12.png',
			'/assets/waves/lwave-22.png',
			'/assets/waves/lwave-32.png',
		],
		right: [
			'/assets/waves/rwave-12.png',
			'/assets/waves/rwave-22.png',
			'/assets/waves/rwave-32.png',
		],
	},
	{
		left: [
			'/assets/waves/lwave-13.png',
			'/assets/waves/lwave-23.png',
			'/assets/waves/lwave-33.png',
		],
		right: [
			'/assets/waves/rwave-13.png',
			'/assets/waves/rwave-23.png',
			'/assets/waves/rwave-33.png',
		],
	},
]

type Wave = (typeof waves)[0]

export default PlayerBarWavesAnimation
