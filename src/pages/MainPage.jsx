import { useState } from 'react';

import RandomChar from '@components/randomChar/RandomChar';
import CharInfo from '@components/charInfo/CharInfo';
import CharList from '@components/charList/CharList';
import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';

import decoration from '@images/vision.png';

const MainPage = () => {
	const [selectedChar, setChar] = useState(null);

	const onCharSelected = (id) => {
		setChar(id);
	};

	return (
		<>
			<ErrorBoundary a='1'>
				<RandomChar />
			</ErrorBoundary>
			<div className='char__content'>
				<ErrorBoundary>
					<CharList onCharSelected={onCharSelected} />
				</ErrorBoundary>
				<ErrorBoundary>
					<div className='char__info-wrapper'>
						<CharInfo charId={selectedChar} />
					</div>
				</ErrorBoundary>
			</div>
			<img className='bg-decoration' src={decoration} alt='vision' />
		</>
	);
};

export default MainPage;
