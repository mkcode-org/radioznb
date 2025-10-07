'use client'

import Image from 'next/image'
import { FC, useRef, useState } from 'react'

const Volume: FC<{ volume: number; setVolume: (arg: number) => void }> = ({
	volume,
	setVolume,
}) => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = useState(false)

	const updateVolumeFromClientX = (clientX: number) => {
		if (!sliderRef.current) return
		const rect = sliderRef.current.getBoundingClientRect()
		let newVolume = (clientX - rect.left) / rect.width
		newVolume = Math.max(0, Math.min(1, newVolume))
		setVolume(newVolume)
	}

	const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
		setIsDragging(true)
		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
		updateVolumeFromClientX(clientX)

		window.addEventListener('mousemove', handleMove)
		window.addEventListener('touchmove', handleMove, { passive: false })
		window.addEventListener('mouseup', handleEnd)
		window.addEventListener('touchend', handleEnd)
	}

	const handleMove = (e: MouseEvent | TouchEvent) => {
		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
		updateVolumeFromClientX(clientX)
	}

	const handleEnd = () => {
		setIsDragging(false)
		window.removeEventListener('mousemove', handleMove)
		window.removeEventListener('touchmove', handleMove)
		window.removeEventListener('mouseup', handleEnd)
		window.removeEventListener('touchend', handleEnd)
	}

	return (
		<div className='absolute max-md:hidden bottom-[10%] w-2/5 h-[2%] right-[15%]'>
			<div className='relative w-full h-full' ref={sliderRef}>
				<Image
					fill
					src='/assets/scale.jpg'
					alt='volume-scale'
					className='z-0'
					sizes='(max-width: 640px) 100vw, 30vw'
				/>
				<div
					className='absolute top-1/2 w-[15%] h-[300%] -translate-y-1/2 cursor-pointer z-10'
					style={{
						left: `${volume * 100}%`,
						transform: `translateX(-50%)`,
						scale: isDragging ? 1.2 : 1,
					}}
					onMouseDown={handleStart}
					onTouchStart={handleStart}
				>
					<Image
						src='/assets/pointer.png'
						alt='volume-pointer'
						sizes='(max-width: 640px) 100vw, 30vw'
						fill
					/>
				</div>
			</div>
		</div>
	)
}

export default Volume
