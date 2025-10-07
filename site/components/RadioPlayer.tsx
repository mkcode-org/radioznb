'use client'

import Image from 'next/image'
import { usePlayer } from './PlayerBar/PlayerContext'
import Volume from './Volume'
import WaveAnimation from './Waves'
import { orpheyStream } from './PlayerBar/Controls'

const RadioPlayer = () => {
	const { isPlaying: playing, play, pause, volume, setVolume } = usePlayer()

	return (
		<div className='flex justify-center'>
			<WaveAnimation playing={playing}>
				<div className='relative' onDragStart={(e) => e.preventDefault()}>
					<Image
						priority
						className='size-full'
						src='/assets/RADIO.jpg'
						alt='radio'
						width={1061}
						height={1000}
					/>
					<button
						onClick={() =>
							playing ? pause() : play({ ...orpheyStream, isLive: true })
						}
						className={`absolute cursor-pointer bottom-1/5 left-3/5 w-1/6 h-1/5`}
					>
						<Image
							priority
							width={151}
							height={178}
							src={`/assets/${playing ? 'stop' : 'play'}-sm.jpg`}
							alt='play'
						/>
					</button>
					<Volume volume={volume} setVolume={setVolume} />
				</div>
			</WaveAnimation>
		</div>
	)
}

export type PlayerState = 'playing' | 'stopped' | undefined

export default RadioPlayer
