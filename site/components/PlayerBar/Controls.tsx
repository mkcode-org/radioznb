import Image from 'next/image'
import { usePlayer } from './PlayerContext'

const Controls = () => {
	const { isPlaying, toggle, isLive, play } = usePlayer()
	const icon = isPlaying ? 'stop' : 'play'

	return (
		<>
			<button onClick={toggle}>
				<Image
					priority
					width={32}
					height={32}
					className='w-auto'
					src={`/assets/${icon}-sm.jpg`}
					alt='play'
				/>
			</button>
			{!isLive && (
				<button
					className={`m-auto w-fit animate-pulse`}
					onClick={() => play(stream)}
				>
					🔴
				</button>
			)}
		</>
	)
}

export const stream = {
	src: 'https://server.radioznb.ru/listen/radioznb/radio.mp3',
	title: 'радио зимы не будет',
	isLive: true,
}

export default Controls
