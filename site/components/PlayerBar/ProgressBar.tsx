'use client'

import { formatTime } from './Player'
import { usePlayer } from '../PlayerContext'
import PlayerBarWavesAnimation from './Waves'

const ProgressBar = () => {
	const { title, timecode, duration, seek, isLive, isPlaying } = usePlayer()

	if (isLive) return <PlayerBarWavesAnimation playing={isPlaying} />

	return (
		<div className='w-full h-fit flex flex-col min-w-0 justify-center gap-1'>
			<div className='truncate'>{title}</div>
			<input
				type='range'
				min={0}
				max={duration}
				step={0.1}
				value={timecode}
				onChange={(e) => seek(Number(e.target.value))}
				className={`w-full dark:accent-white accent-black`}
			/>
			<div className='flex w-full text-xs opacity-30 justify-between'>
				<div>{formatTime(timecode)}</div>
				<div>{formatTime(duration)}</div>
			</div>
		</div>
	)
}

export default ProgressBar
