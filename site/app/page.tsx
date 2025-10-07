import RadioPlayer from '@/components/RadioPlayer'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col justify-center items-center gap-4 h-full'>
			<RadioPlayer />
			<div className='flex flex-col w-full justify-center items-center gap-4'>
				<div className='flex gap-4'>
					<Link href={'/library'}>библиотека</Link>
					<Link href={'/about'}>о нас</Link>
				</div>
			</div>
		</div>
	)
}
