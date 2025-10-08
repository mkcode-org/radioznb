'use client'

import Controls from './Controls'
import { usePlayer } from './PlayerContext'
import ProgressBar from './ProgressBar'
import VolumeBar from './VolumeBar'

const PlayerBar = () => {
	const { src } = usePlayer()

	if (!src) return null
	return (
		<div className='fixed flex bottom-16 justify-center mx-4 left-0 right-0 h-20'>
			<div className='flex max-w-3xl w-full items-center bg-white border-black border-2 h-full px-4 py-2 gap-4'>
				<Controls />
				<ProgressBar />
				<VolumeBar />
			</div>
		</div>
	)
}

export const formatTime = (time: number): string => {
	if (isNaN(time) || time < 0) return '00:00'

	const hours = Math.floor(time / 3600)
	const minutes = Math.floor((time % 3600) / 60)
	const seconds = Math.floor(time % 60)

	if (hours > 0) {
		return [hours, minutes, seconds]
			.map((v) => String(v).padStart(2, '0'))
			.join(':')
	} else {
		return [minutes, seconds].map((v) => String(v).padStart(2, '0')).join(':')
	}
}

export default PlayerBar
