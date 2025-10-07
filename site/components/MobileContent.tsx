import Image from 'next/image'
import Link from 'next/link'

const Mobile = () => {
	return (
		<div className='flex flex-wrap sm:gap-4 px-8 justify-around sm:justify-center'>
			<button className='relative size-24 scale-y-90'>
				<Link href='https://www.facebook.com/radioznb' target='_blank'>
					<Image
						src='/assets/fb.png'
						fill
						style={{ objectFit: 'contain' }}
						alt='fb'
					/>
				</Link>
			</button>
			<button className='relative size-24 scale-y-90'>
				<Link href='https://vk.com/znb_radio' target='_blank'>
					<Image
						src='/assets/vk.png'
						fill
						style={{ objectFit: 'contain' }}
						alt='vk'
					/>
				</Link>
			</button>
			<button className='relative size-24 scale-y-90'>
				<Link
					href='https://c26.radioboss.fm/playlist/713/stream.m3u'
					target='_blank'
				>
					<Image
						src='/assets/m3u.png'
						fill
						style={{ objectFit: 'contain' }}
						alt='m3u'
					/>
				</Link>
			</button>
			<button className='relative size-24 scale-y-90'>
				<Link href='https://t.me/radi0ZnB' target='_blank'>
					<Image
						src='/assets/tg.png'
						fill
						style={{ objectFit: 'contain' }}
						alt='tg'
					/>
				</Link>
			</button>
			<button className='relative w-full mt-2 h-18'>
				<Link href='https://teleg.me/radiochata' target='_blank'>
					<Image
						src='/assets/chat.png'
						fill
						style={{ objectFit: 'contain' }}
						alt='chat'
					/>
				</Link>
			</button>
		</div>
	)
}

export default Mobile
