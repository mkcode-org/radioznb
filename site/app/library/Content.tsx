'use client'

import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import Image from 'next/image'
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
			<Link href='/' className='w-fit'>
				<Image src='/assets/logo.png' height={64} width={64} alt='logo' />
			</Link>
			<div className='flex gap-4'>
				<div className='flex flex-col gap-2 items-start min-w-1/3'>
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
				<Program selectedProgram={selectedProgram} />
			</div>
		</div>
	)
}

export default PageContent
