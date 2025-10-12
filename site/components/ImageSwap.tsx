import Image from 'next/image'
import { FC } from 'react'

const SwapImage: FC<{
	src: string
	hover: string
	size: number | `${number}` | undefined
  className?: string
}> = ({ src, hover, size, className}) => {
	return (
		<div className={`relative inline-block ${className}`}>
			<Image
				src={src}
				alt=''
				height={size}
				width={size}
				className='hover:opacity-0'
			/>
			<Image
				src={hover}
				alt=''
				fill
				className='absolute inset-0 opacity-0 hover:opacity-100'
			/>
		</div>
	)
}

export default SwapImage
