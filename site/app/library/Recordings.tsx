'use client'

import { usePlayer } from '@/components/PlayerBar/PlayerContext'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import { FC, PropsWithChildren, useMemo } from 'react'

const Recordings: FC<{ programId: Id<'programs'> }> = ({ programId }) => {
	const recordings = useQuery(api.recordings.list, { id: programId })
	const { play } = usePlayer()

	const sorted = useMemo(
		() => recordings?.slice().sort((a, b) => b._creationTime - a._creationTime),
		[recordings]
	)

	if (!sorted) return <Container>Загрузка…</Container>
	if (sorted.length === 0) return <Container>Нет записей</Container>

	return (
		<Container>
			{sorted.map((rec) => (
				<button
					key={rec._id}
					onClick={() =>
						play({
							title: `${rec.program} – ${rec.episodeTitle}`,
							src: `http://127.0.0.1:3210/api/storage/37e771f2-aa77-46a3-9b09-85c08696cdf9`,
							// src: `/api/storage/${rec._id}`,
						})
					}
					className='text-left w-full py-1 hover:underline'
				>
					{rec.episodeTitle}
				</button>
			))}
		</Container>
	)
}

const Container: FC<PropsWithChildren> = ({ children }) => (
	<div className='flex flex-col items-start bg-stone-700/50 text-white rounded-xl p-4 w-full'>
		{children}
	</div>
)

export default Recordings
