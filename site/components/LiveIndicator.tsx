import Image from 'next/image'
import { usePlayer } from './PlayerContext'

const LiveIndicator = () => {
	const { isLive, isPlaying, livestream } = usePlayer()
	const isBlinking = livestream?.is_live && !isLive
	const isVisible = isBlinking || (isLive && isPlaying)

	if (!isVisible) return null
	return (
		<div className={`${isBlinking && 'animate-blink'} absolute top-0 z-10`}>
			<Image
				title={
					isBlinking && livestream?.streamer_name
						? `в эфире ${livestream.streamer_name}!`
						: undefined
				}
				src='/assets/tape-player/live-indicator.png'
				width={1366}
				height={768}
				alt='live indicator'
			/>
		</div>
	)
}

export default LiveIndicator
