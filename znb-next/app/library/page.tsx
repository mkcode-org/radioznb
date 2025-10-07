'use client'

import { usePlayer } from '@/components/PlayerBar/PlayerContext'
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import Link from 'next/link'

const Page = () => {
	const { play } = usePlayer()

	const data = useQuery(api.programs.list)
	console.log(data)

	return (
		<div className='flex flex-col gap-4'>
			<Link href={'/'}>назад со страницы Библиотека</Link>
			<button onClick={() => play(beatles)}>{beatles.title}</button>
			<button onClick={() => play(tech)}>{tech.title}</button>
		</div>
	)
}

const beatles = {
	src: 'https://r0zpfsgakx.ufs.sh/f/ulX3r7DWQlCorlxyWusQhVOCPI7AobXt2jy1uJ6lGdaHBg04',
	title: 'передача про битлз 20.07',
}
const tech = {
	src: 'https://r0zpfsgakx.ufs.sh/f/ulX3r7DWQlCo1RosU9zBmFW5PUouC34HrbseOvEDTI8Gjakh',
	title: 'техвстреча 21.07',
}

export default Page
