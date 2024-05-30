import { Component } from 'react';
import ErrorMessage from '@components/errorMessage/ErrorMessage';

class ErrorBoundary extends Component {
	state = {
		error: false,
	};

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
		this.setState({
			error: true,
		});
	}

	render() {
		if (this.state.error) {
			console.log(1);
			return <ErrorMessage />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
