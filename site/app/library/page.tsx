'use client'

import { Suspense } from 'react'
import PageContent from './Content'

const Page = () => {
	return (
		<Suspense>
			<PageContent />
		</Suspense>
	)
}

export default Page
