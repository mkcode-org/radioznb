import Image from 'next/image'
import { usePlayer } from './PlayerContext'

const Controls = () => {
	const { isPlaying, toggle, isLive, play } = usePlayer()
	const icon = isPlaying ? 'pause' : 'play'

	return (
		<div className='flex gap-4 relative w-full sm:w-32 justify-center max-sm:flex-row-reverse'>
			<button onClick={toggle} className='w-8 h-8 m-auto'>
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
					className={`sm:static size-16 p-2 absolute -left-4 -bottom-4`}
					onClick={() => play(stream)}
				>
					<Image
						className='ignore-invert'
						src={'/assets/new/live-animation.gif'}
						width={107}
						height={107}
						alt='live'
					/>
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
