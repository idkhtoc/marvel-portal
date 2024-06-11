import { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '@components/errorMessage/ErrorMessage';

class ErrorBoundary extends Component {
	state = {
		error: false,
	};

	componentDidCatch() {
		this.setState({
			error: true,
		});
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default ErrorBoundary;
