'use client'

import HomeButton from '@/components/HomeButton'
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import Program from './Program'

const PageContent = () => {
	const programs = useQuery(api.programs.list)
	const searchParams = useSearchParams()
	const router = useRouter()
	const slug = searchParams.get('program')

	const selectedProgram = useMemo(
		() => programs?.find((p) => p.slug === slug),
		[programs, slug]
	)

	const handleSearch = (slug: string) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set('program', slug)
		router.push(`?${params.toString()}`)
	}

	return (
		<div className='flex flex-col gap-4'>
			<HomeButton />
			<div className='flex gap-4'>
				<Link
					href={'/library'}
					className={`sm:hidden flex select-none text-4xl items-center text-center justify-center size-16 ${selectedProgram ? 'block' : 'hidden'}`}
				>
					{'◀'}
				</Link>
				<div
					className={`flex flex-col gap-2 items-start min-w-1/3 ${selectedProgram ? 'max-sm:hidden' : ''}`}
				>
					<div className={`flex flex-col gap-2 items-start min-w-1/3`}>
						{programs?.map(({ _id, name, slug }) => (
							<button
								key={_id}
								onClick={() => handleSearch(slug!)}
								className={`hover:underline text-left ${
									selectedProgram?._id === _id ? 'underline font-semibold' : ''
								}`}
							>
								{name}
							</button>
						))}
					</div>
				</div>
				<Program selectedProgram={selectedProgram} />
			</div>
		</div>
	)
}

export default PageContent
