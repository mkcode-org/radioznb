import Image from 'next/image'
import { usePlayer } from './PlayerContext'

const Controls = () => {
	const { isPlaying, toggle, isLive, play } = usePlayer()
	const icon = isPlaying ? 'pause' : 'play'

	return (
		<div className='flex gap-4 relative w-full sm:w-fit justify-center max-sm:flex-row-reverse'>
			<button onClick={toggle} className='w-8 h-8'>
				<Image
					className='w-full h-full'
					width={354}
					height={354}
					src={`/assets/${icon}-sm.png`}
					alt='play'
				/>
			</button>
			{!isLive && (
				<button
					className={`sm:static w-fit absolute left-0 h-full m-auto animate-pulse`}
					onClick={() => play(stream)}
				>
					🔴
				</button>
			)}
		</div>
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
	isLive: false,
}

export default Controls
