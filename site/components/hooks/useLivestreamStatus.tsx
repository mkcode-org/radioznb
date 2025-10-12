import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

export const useLivestreamStatus = () => {
	const [livestream, setLivestream] = useState(undefined)
	const ws = useWebSocket(
		'wss://server.radioznb.ru/api/live/nowplaying/websocket'
	)

	ws.sendJsonMessage({
		subs: { 'station:radioznb-soundchecks': { recover: true } },
	})

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				'https://server.radioznb.ru/api/nowplaying_static/radioznb-live.json'
			)
			if (!response.ok) throw new Error('Network response was not ok')
			return response.json()
		}

		fetchData()
			.then((data) => setLivestream(data.live))
			.catch((error) => console.error('Fetch error:', error))
	}, [])

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const msg = ws.lastJsonMessage as any
		const live = msg?.pub?.data?.np?.live
		if (live !== undefined) setLivestream(live)
	}, [ws.lastJsonMessage])

	return livestream
}
