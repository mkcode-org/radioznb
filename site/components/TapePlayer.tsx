'use client'

import { api } from '@/convex/_generated/api'
import { Doc } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { stream } from './PlayerBar/Controls'
import { usePlayer } from './PlayerBar/PlayerContext'
import WaveAnimation from './Waves'

const TapePlayer = () => {
	const { isPlaying: playing, isLive, play, pause } = usePlayer()
	const isPlayingLive = playing && isLive
	const isPlayingArchive = playing && !isLive
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const allArchives = useQuery(api.recordings.list, {}) || []
	const [randomRec, setRandomRec] = useState<Doc<'recordings'> | undefined>(
		undefined
	)

	useEffect(() => {
		if (allArchives.length > 0) {
			const index = Math.floor(Math.random() * allArchives.length)
			setRandomRec(allArchives[index])
		}
	}, [allArchives, isPlayingLive])

	const randomArchiveUrl = useQuery(
		api.recordings.getAudioUrl,
		randomRec ? { id: randomRec._id } : 'skip'
	)

	const toggle = (
		isPlaying: boolean,
		stream: { src: string; title: string; isLive?: boolean }
	) => (isPlaying ? pause() : play(stream))

	return (
		<div
			className='sm:w-2xl w-xl relative'
			onDragStart={(e) => e.preventDefault()}
		>
			<WaveAnimation playing={playing} />
			<div className='relative w-full h-full'>
				<Image
					className='relative inset-0 z-10'
					src='/assets/tape-player/main.png'
					alt='player'
					width={1366}
					height={768}
					priority
				/>
				<Image
					className={`absolute top-0 origin-[67%_25%] max-sm:scale-x-75 transition-transform duration-700 ease-in-out ${isPlayingLive && 'rotate-45'}`}
					src={'/assets/tape-player/antenna.png'}
					width={1366}
					height={768}
					alt='antenna'
				/>
				<div
					onClick={() => toggle(isPlayingLive, stream)}
					className='h-1/3 absolute top-10 w-auto aspect-square left-1/4 cursor-pointer z-20'
				/>
				<Image
					className='absolute top-[28%] left-[30%] h-6 w-auto'
					src={`/assets/tape-player/fm${isPlayingLive ? '-pressed' : ''}.png`}
					width={1366}
					height={768}
					alt='fm'
				/>
				<Image
					className='absolute top-0 z-10'
					src={'/assets/tape-player/live-indicator.png'}
					width={1366}
					height={768}
					alt='live'
				/>
				<div
					onClick={() =>
						toggle(isPlayingArchive, {
							src: randomArchiveUrl || '',
							title: randomRec?.episodeTitle || '',
						})
					}
					className='h-1/3 aspect-square absolute bottom-10 w-auto left-[41%] cursor-pointer z-10'
				/>
				<Image
					className='absolute bottom-[17%] left-[45%] h-6 w-auto cursor-pointer'
					src={`/assets/tape-player/tape-buttons${isPlayingArchive ? '-pressed' : ''}.png`}
					width={1366}
					height={768}
					alt='live'
				/>
				<Image
					className={`absolute bottom-[33%] left-[42.5%] size-5 ${isPlayingArchive && 'animate-spin'}`}
					src={'/assets/tape-player/gear-l.png'}
					width={1366}
					height={768}
					alt='gear-l'
				/>
				<Image
					className={`absolute bottom-[33%] right-[41.5%] z-10 size-5 ${isPlayingArchive && 'animate-spin'}`}
					src={'/assets/tape-player/gear-r.png'}
					width={1366}
					height={768}
					alt='gear-r'
				/>
			</div>
		</div>
	)
}

export default TapePlayer
