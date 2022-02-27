import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { user } = useUserAuth();
	return (
		<Route
			{...rest}
			render={(props) => {
				if (user) return <Component {...props} />;
				if (!user)
					return (
						<Redirect
							to={{ pathname: '/login', state: { from: props.location } }}
						/>
					);
			}}
		/>
	);
};
export default ProtectedRoute;
