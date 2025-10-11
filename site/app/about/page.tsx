import Image from 'next/image'
import Link from 'next/link'

const Page = () => (
	<Link href='/' className='w-fit'>
		<Image src='/assets/logo.png' height={64} width={64} alt='logo' />
	</Link>
)

export default Page
