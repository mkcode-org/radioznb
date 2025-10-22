'use client'

import Image from 'next/image'
import { usePlayer } from './PlayerContext'
import Volume from './_Volume'
import WaveAnimation from './Waves'

const RadioPlayer = () => {
	const { isPlaying: playing, volume, setVolume, toggle } = usePlayer()

	return (
		<div
			className='relative w-3/7 min-w-[256px]'
			onDragStart={(e) => e.preventDefault()}
		>
			<WaveAnimation>
				<div className='relative w-auto h-auto'>
					<Image
						src='/assets/RADIO.png'
						alt='radio'
						width={1061}
						height={1000}
						priority
					/>
				</div>
				<button
					onClick={toggle}
					className='absolute cursor-pointer bottom-1/6 left-4/7 w-1/5 h-auto'
				>
					<div className='relative w-full aspect-square'>
						<Image
							src={`/assets/${playing ? 'pause' : 'play'}-sm.png`}
							alt='play'
							fill
							className='object-contain'
						/>
					</div>
				</button>

				<Volume volume={volume} setVolume={setVolume} />
			</WaveAnimation>
		</div>
	)
}

export default RadioPlayer
