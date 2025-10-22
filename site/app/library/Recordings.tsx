'use client'

import { usePlayer } from '@/components/PlayerContext'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import { FC, PropsWithChildren, useMemo } from 'react'
import Recording from './Recording'

const Recordings: FC<{ programId: Id<'programs'> }> = ({ programId }) => {
	const recordings = useQuery(api.recordings.list, {
		id: programId,
		status: 'published',
	})
	const { play } = usePlayer()

	const sorted = useMemo(
		() => recordings?.slice().sort((a, b) => b._creationTime - a._creationTime),
		[recordings]
	)

	if (!sorted)
		return (
			<Container className='h-16 w-full animate-pulse opacity-50'>
				загрузка...
			</Container>
		)
	if (!sorted.length) return null

	return (
		<Container>
			{sorted.map((rec) => (
				<Recording key={rec._id} rec={rec} play={play} />
			))}
		</Container>
	)
}

const Container: FC<PropsWithChildren & { className?: string }> = ({
	children,
	className,
}) => (
	<div
		className={`flex flex-col items-start bg-stone-700/50 text-white p-4 w-full ${className}`}
	>
		{children}
	</div>
)

export default Recordings
