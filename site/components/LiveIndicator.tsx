import Image from 'next/image'
import { usePlayer } from './PlayerBar/PlayerContext'

const LiveIndicator = () => {
	const { isLive, isPlaying, livestream } = usePlayer()
	const isBlinking = livestream?.is_live && !isLive
	const isVisible = isBlinking || (isLive && isPlaying)

	return (
		<div
			className={`${isVisible ? 'opacity-100' : 'opacity-0'} ${isBlinking && 'animate-blink'} absolute top-0 z-10 transition-opacity duration-300`}
		>
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
