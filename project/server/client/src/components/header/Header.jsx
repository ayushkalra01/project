import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import { useHistory } from 'react-router';

const useStyle = makeStyles({
	component: {
		background: '#FFFFFF',
		color: 'black',
	},
	container: {
		justifyContent: 'center',
		'&  >*': {
			padding: 20,
			color: 'black',
			textDecoration: 'none',
		},
	},
});

const Header = () => {
	const { logOut, user } = useUserAuth();
	const history = useHistory();
	const handleLogout = async () => {
		try {
			await logOut();
			history.push('/login');
		} catch (error) {
			console.log(error.message);
		}
	};
	const classes = useStyle();

	return (
		<>
			{user && (
				<AppBar className={classes.component}>
					<Toolbar className={classes.container}>
						<Link to="/">HOME</Link>
						<Link to="/about">ABOUT</Link>
						<Link to="/contact">CONTACT</Link>
						<Button onClick={handleLogout} size="large">
							Log out
						</Button>
					</Toolbar>
				</AppBar>
			)}
		</>
	);
};

export default Header;
