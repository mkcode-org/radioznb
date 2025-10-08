import { Doc } from '@/convex/_generated/dataModel'
import { FC } from 'react'
import Recordings from './Recordings'

const Program: FC<{ selectedProgram: Doc<'programs'> | undefined }> = ({
	selectedProgram,
}) => {
	if (!selectedProgram) return null
	return (
		<div className='flex flex-col w-full gap-2'>
			<div className='pl-4'>
				<div className='text-2xl font-bold'>{selectedProgram.name}</div>
				{selectedProgram.description}
			</div>
			<Recordings programId={selectedProgram._id} />
		</div>
	)
}

export default Program
