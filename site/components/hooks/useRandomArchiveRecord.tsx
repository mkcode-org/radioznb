import { api } from '@/convex/_generated/api'
import { Doc } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import { useEffect, useState } from 'react'
import { Stream } from '../PlayerContext'

const useRandomArchiveStream = (): Stream => {
	const allArchives = useQuery(api.recordings.list, {})
	const [randomRec, setRandomRec] = useState<Doc<'recordings'> | undefined>(
		undefined
	)

	useEffect(() => {
		if (allArchives && allArchives.length > 0) {
			const index = Math.floor(Math.random() * allArchives.length)
			setRandomRec(allArchives[index])
		}
	}, [allArchives])

	const randomArchiveUrl = useQuery(
		api.recordings.getAudioUrl,
		randomRec ? { id: randomRec._id } : 'skip'
	)

	return {
		src: randomArchiveUrl || '',
		title: randomRec?.episodeTitle || '',
	}
}

export default useRandomArchiveStream
