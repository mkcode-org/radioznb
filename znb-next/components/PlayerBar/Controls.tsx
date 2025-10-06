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
					onClick={() => play({ ...orpheyStream, isLive: true })}
				>
					🔴
				</button>
			)}
		</>
	)
}

export const orpheyStream = {
	src: 'https://radiopotok1.ru/orfej',
	title: 'радио орфей',
}

export default Controls
