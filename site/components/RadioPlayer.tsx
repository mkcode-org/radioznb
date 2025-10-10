'use client'

import { useTheme } from 'next-themes'
import { stream, streamArchive } from './PlayerBar/Controls'
import { usePlayer } from './PlayerBar/PlayerContext'
import Volume from './Volume'
import WaveAnimation from './Waves'

const RadioPlayer = () => {
	const { isPlaying: playing, play, pause, volume, setVolume } = usePlayer()
	const { theme } = useTheme()

	const src = theme === 'dark' ? streamArchive : stream

	return (
		<div
			className='relative w-3/7 min-w-[256px]'
			onDragStart={(e) => e.preventDefault()}
		>
			<WaveAnimation playing={playing}>
				<img src='/assets/RADIO.png' alt='radio' />
				<button
					onClick={() => (playing ? pause() : play(src))}
					className={`absolute cursor-pointer bottom-1/6 left-4/7 w-1/5 h-auto`}
				>
					<img src={`/assets/${playing ? 'pause' : 'play'}-sm.png`} alt='play' />
				</button>
				<Volume volume={volume} setVolume={setVolume} />
			</WaveAnimation>
		</div>
	)
}

export type PlayerState = 'playing' | 'stopped' | undefined

export default RadioPlayer
