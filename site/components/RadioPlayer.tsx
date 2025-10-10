'use client'

import Image from 'next/image'
import { stream, streamArchive } from './PlayerBar/Controls'
import { usePlayer } from './PlayerBar/PlayerContext'
import Volume from './Volume'
import WaveAnimation from './Waves'
import { useTheme } from 'next-themes'

const RadioPlayer = () => {
	const { isPlaying: playing, play, pause, volume, setVolume } = usePlayer()
	const { theme } = useTheme()

	const src = theme === 'dark' ? streamArchive : stream

	return (
		// <div className='flex justify-center w-full h-full items-center'>
		<WaveAnimation playing={playing}>
			<div
				className='relative w-1/2 min-w-[256px]'
				onDragStart={(e) => e.preventDefault()}
			>
				<img
					// priority
					src='/assets/RADIO.jpg'
					alt='radio'
					// fill
					// width={400}
					// width={1061}
					// height={1000}
				/>
				<button
					onClick={() => (playing ? pause() : play(src))}
					className={`absolute cursor-pointer bottom-1/6 left-4/7 w-1/5 h-auto`}
				>
					<img
						// priority
						// fill
						// width={151}
						// height={178}
						src={`/assets/${playing ? 'stop' : 'play'}-sm.jpg`}
						alt='play'
					/>
				</button>
				<Volume volume={volume} setVolume={setVolume} />
			</div>
		</WaveAnimation>
		// </div>
	)
}

export type PlayerState = 'playing' | 'stopped' | undefined

export default RadioPlayer
