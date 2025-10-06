'use client'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { FC, PropsWithChildren } from 'react'

const ConvexContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const client = new ConvexReactClient(URL)
	return <ConvexProvider client={client}>{children}</ConvexProvider>
}

const URL = 'https://api.radioznb.ru'

export default ConvexContextProvider
