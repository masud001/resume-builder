/** @format */
import { useState } from 'react';
import ContentEditable from 'react-contenteditable';

interface ComponentState {
	isEditable: boolean;
	htmlContent: string;
}

const App: React.FC = () => {
	const [state, setState] = useState<ComponentState>({
		isEditable: true,
		htmlContent: '<h1>this is html <b>content</b> </h1>',
	});
	const handleChange = (event: any) => {
		setState((prevState) => ({
			...prevState,
			htmlContent: event.target.value,
		}));
	};
	const handelEditable = () => {
		console.log('this is the blur on click!');
	};
	return (
		<>
			<h1 className='text-3xl font-bold underline text-cyan-500'>Hello resume builder.</h1>
			<div className='content_etitable_wrapper'>
				<ContentEditable
					className='content_editable'
					tagName='pre'
					html={state.htmlContent}
					onChange={handleChange}
					onBlur={handelEditable}
				/>
			</div>
		</>
	);
};

export default App;
