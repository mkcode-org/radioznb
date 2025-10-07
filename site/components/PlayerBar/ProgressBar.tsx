'use client'

import { formatTime } from './Player'
import { usePlayer } from './PlayerContext'
import PlayerBarWavesAnimation from './Waves'

const ProgressBar = () => {
	const { title, timecode, duration, seek, isLive, isPlaying } = usePlayer()

	if (isLive) return <PlayerBarWavesAnimation playing={isPlaying} />

	return (
		<div className='w-full h-full flex flex-col gap-1'>
			<div>{title}</div>
			<input
				type='range'
				min={0}
				max={duration}
				step={0.1}
				value={timecode}
				onChange={(e) => seek(Number(e.target.value))}
				className='w-full accent-black'
			/>
			<div className='flex w-full text-xs opacity-30 justify-between'>
				<div>{formatTime(timecode)}</div>
				<div>{formatTime(duration)}</div>
			</div>
		</div>
	)
}

export default ProgressBar
