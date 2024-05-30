import { useLocation, Link } from 'react-router-dom';
import ErrorMessage from '@components/errorMessage/ErrorMessage';

const Page404 = () => {
	const location = useLocation();

	return (
		<div>
			<ErrorMessage />
			<p
				style={{
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '1.5rem',
					marginTop: '30px',
				}}
			>
				Page{' '}
				<span style={{ fontStyle: 'italic', color: '#9F0013' }}>
					{location.pathname}
				</span>{' '}
				doesn't exist
			</p>
			<Link
				style={{
					display: 'block',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '1.5rem',
					marginTop: '30px',
				}}
				to="/"
			>
				Back to main page
			</Link>
		</div>
	);
};

export default Page404;
