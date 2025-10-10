'use client'

import Controls from './Controls'
import { usePlayer } from './PlayerContext'
import ProgressBar from './ProgressBar'
import VolumeBar from './VolumeBar'

const PlayerBar = () => {
	const { src } = usePlayer()

	if (!src) return null
	return (
		<div className='fixed flex bottom-0 justify-center border-t-2 left-0 sm:right-16 right-8 sm:dark:left-16 dark:left-8 dark:right-0 z-50 h-fit'>
			<div className='flex relative  w-full items-center sm:ml-16 ml-8 sm:dark:mr-16 dark:mr-8 dark:ml-0 h-fit py-2 px-4 gap-2'>
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
