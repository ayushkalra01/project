<<<<<<< HEAD

=======
>>>>>>> 3fbefd9... initial commit
// import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
<<<<<<< HEAD
import AppWithRouterAccess from './AppWithRouterAccess ';
import ContextProvider from './context/ContextProvider';
// import Header from './components/header/Header';
// import Home from './components/home/Home';
// import DetailView from './components/details/DetailView';
// import CreatePost from './components/create/CreatePost';
// import Update from './components/create/Update';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppWithRouterAccess/>
        {/* <Header />
        <Box style={{marginTop: 64}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/details/:id' component={DetailView} />
            <Route exact path='/create' component={CreatePost} />
            <Route exact path='/update/:id' component={Update} />
          </Switch>
        </Box> */}
      </BrowserRouter>
    </ContextProvider>
  );
=======

import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import CreatePost from './components/create/CreatePost';
import Update from './components/create/Update';

import { Box } from '@material-ui/core';
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Box style={{ marginTop: 64 }}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/details/:id" component={DetailView} />
					<Route exact path="/create" component={CreatePost} />
					<Route exact path="/update/:id" component={Update} />
				</Switch>
			</Box>
		</BrowserRouter>
	);
>>>>>>> 3fbefd9... initial commit
}

export default App;
