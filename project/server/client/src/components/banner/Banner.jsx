import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
	image: {
		width: '100%',
		background: `url(${'https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?cs=srgb&dl=pexels-startup-stock-photos-7070.jpg&fm=jpg'}) center/55% repeat-x #000`,
		height: '50vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& :first-child': {
			fontSize: 30,
			padding: 8,
			background: '#FFFFFF',
		},
	},
});

const Banner = () => {
	const classes = useStyle();
	const url =
		'https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg';
	return (
		<>
			<Box className={classes.image}>
				<Typography>Crack Your Dream Company</Typography>
			</Box>
		</>
	);
};

export default Banner;
