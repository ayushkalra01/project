import { Box, makeStyles, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles({
	banner: {
		backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
		width: '100%',
		height: '50vh',
		backgroundPosition: 'left 0px bottom 0px',
		backgroundSize: 'cover',
	},
});

const About = () => {
	const classes = useStyles();
	return (
		<Box>
			<Box className={classes.banner}></Box>
		</Box>
	);
};

export default About;
