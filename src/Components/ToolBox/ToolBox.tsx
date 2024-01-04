/** @format */

import { ReactNode } from 'react';
import Draggable from 'react-draggable';
import { RiDraggable } from 'react-icons/ri';
import { CiGrid32 } from 'react-icons/ci';
interface ToolBoxPropsTpe {
	children: ReactNode;
}
const ToolBox: React.FC<ToolBoxPropsTpe> = () => {
	return (
		<>
			<Draggable handle='.handle' axis='x' defaultPosition={{ x: 0, y: 0 }} scale={1}>
				<div className='w-1/4 p-2 border border-sky-300 rounded-sm bg-white shadow'>
					<div className='flex gap-4'>
						<button
							className='handle'
							title='Dragable-button'
							aria-label='button for drag the tool-box'>
							<RiDraggable />
						</button>
						<button className='' title='Grid layout' aria-label='Create Grid layout'>
							<CiGrid32 />
						</button>
					</div>
				</div>
			</Draggable>
		</>
	);
};

export default ToolBox;
