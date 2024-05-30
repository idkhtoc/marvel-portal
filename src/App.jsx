import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '@components/appHeader/AppHeader';
import Spinner from '@components/spinner/Spinner';

const Page404 = lazy(() => import('@pages/404'));
const MainPage = lazy(() => import('@pages/MainPage'));
const ComicsPage = lazy(() => import('@pages/ComicsPage'));
const SingleComicPage = lazy(() => import('@pages/SingleComicPage'));

const App = () => {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<Suspense fallback={<Spinner />}>
					<main>
						<Routes>
							<Route
								path="/comics/:comicId"
								element={<SingleComicPage />}
							/>
							<Route path="/comics" element={<ComicsPage />} />
							<Route path="/" element={<MainPage />} />
							<Route path="*" element={<Page404 />} />
						</Routes>
					</main>
				</Suspense>
			</div>
		</Router>
	);
};

export default App;
