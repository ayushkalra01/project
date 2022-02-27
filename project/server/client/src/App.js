import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components

import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import CreatePost from './components/create/CreatePost';
import Update from './components/create/Update';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
function App() {
	return (
		<BrowserRouter>
			<Box style={{ marginTop: 64 }}>
				<UserAuthContextProvider>
					<Header />
					<Switch>
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<ProtectedRoute exact path="/" component={Home} />
						<ProtectedRoute exact path="/details/:id" component={DetailView} />
						<ProtectedRoute exact path="/create" component={CreatePost} />
						<ProtectedRoute exact path="/update/:id" component={Update} />
					</Switch>
				</UserAuthContextProvider>
			</Box>
		</BrowserRouter>
	);
}

export default App;
