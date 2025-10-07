'use client'

import Image from 'next/image'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

const WaveAnimation: FC<PropsWithChildren & { playing: boolean }> = ({
	children,
	playing,
}) => {
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

	if (!playing) return children
	return (
		<div className='relative'>
			<WavesLeft src={src.left} />
			{children}
			<WavesRight src={src.right} />
		</div>
	)
}

const WavesLeft: FC<{ src: string[] }> = ({ src }) => (
	<div className='absolute right-full h-1/2 w-1/2 top-2/5 flex gap-2 sm:gap-6 max-sm:hidden'>
		<div
			className={`animate-fadeInOut relative opacity-0 h-full w-1/4`}
			style={{ animationDelay: '500ms' }}
		>
			<Image src={src[0]} alt='wave-l-1' fill sizes='100vw' />
		</div>
		<div
			className={`animate-fadeInOut relative opacity-0 top-1/5 h-2/3 w-1/6`}
			style={{ animationDelay: '250ms' }}
		>
			<Image src={src[1]} alt='wave-l-2' fill sizes='100vw' />
		</div>
		<div
			className={`animate-fadeInOut relative opacity-0 top-2/5 h-2/5 w-1/8`}
			style={{ animationDelay: '0ms' }}
		>
			<Image src={src[2]} alt='wave-l-3' fill sizes='100vw' />
		</div>
	</div>
)

const WavesRight: FC<{ src: string[] }> = ({ src }) => (
	<div className='absolute -right-3/5 h-1/2 w-1/2 top-2/5 flex gap-2 sm:gap-6 max-sm:hidden'>
		<div
			className={`animate-fadeInOut relative opacity-0 top-2/5 h-2/5 w-1/8`}
			style={{ animationDelay: '0ms' }}
		>
			<Image src={src[0]} alt='wave-r-1' fill />
		</div>
		<div
			className={`animate-fadeInOut relative opacity-0 top-1/5 h-2/3 w-1/6`}
			style={{ animationDelay: '250ms' }}
		>
			<Image src={src[1]} alt='wave-r-2' fill />
		</div>
		<div
			className={`animate-fadeInOut relative opacity-0 h-full w-1/4`}
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

export default WaveAnimation
