import Image from 'next/image'
import { usePlayer } from './PlayerContext'

const Controls = () => {
	const { isPlaying, toggle, isLive, play } = usePlayer()
	const icon = isPlaying ? 'pause' : 'play'

	return (
		<>
			<button onClick={toggle}>
				<img className='w-6 h-6' src={`/assets/${icon}-sm.png`} alt='play' />
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
	src: 'https://server.radioznb.ru/listen/radioznb-live/radio.mp3',
	title: 'радио зимы не будет',
	isLive: true,
}
export const streamArchive = {
	title: `моковая архивная запись – орфей`,
	src: `https://orfeyfm.hostingradio.ru:8034/orfeyfm128.mp3`,
	isLive: true,
}

export default Controls
