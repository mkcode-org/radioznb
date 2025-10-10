'use client'

import { usePlayer } from '@/components/PlayerBar/PlayerContext'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import { FC, useMemo } from 'react'

const Recordings: FC<{ programId: Id<'programs'> }> = ({ programId }) => {
	const recordings = useQuery(api.recordings.list, { id: programId })
	const { play } = usePlayer()

	const sorted = useMemo(
		() => recordings?.slice().sort((a, b) => b._creationTime - a._creationTime),
		[recordings]
	)

	if (!sorted) return <div>Загрузка…</div>
	if (sorted.length === 0) return <div>Нет записей</div>

	return (
		<div className='flex flex-col items-start bg-gray-200 rounded-xl p-4 w-full'>
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
		</div>
	)
}

export default Recordings
