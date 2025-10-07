'use client'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { FC, PropsWithChildren } from 'react'

const ConvexContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const client = new ConvexReactClient(URL)
	return <ConvexProvider client={client}>{children}</ConvexProvider>
}

const URL = process.env.NEXT_PUBLIC_CONVEX_URL!

export default ConvexContextProvider
