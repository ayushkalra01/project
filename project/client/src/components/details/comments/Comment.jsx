import { Typography, Box, makeStyles } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import { deleteComment } from '../../../service/api';
<<<<<<< HEAD
import { LoginContext } from '../../../context/ContextProvider';
import { useContext } from 'react';
=======
>>>>>>> 3fbefd9... initial commit
const useStyles = makeStyles({
	component: {
		marginTop: 30,
		background: '#F5F5F5',
		padding: 10,
	},
	container: {
		display: 'flex',
		marginBottom: 5,
	},
	name: {
		fontWeight: 600,
		fontSize: 18,
		marginRight: 20,
	},
	date: {
		fontSize: 14,
		color: '#878787',
	},
	delete: {
		marginLeft: 'auto',
	},
});

const Comment = ({ comment, setToggle }) => {
	const classes = useStyles();
<<<<<<< HEAD
	const { account, setAccount } = useContext(LoginContext);
=======
>>>>>>> 3fbefd9... initial commit
	const removeComment = async () => {
		await deleteComment(comment._id);
		setToggle((prev) => !prev);
	};

	return (
		<Box className={classes.component}>
			<Box className={classes.container}>
				<Typography className={classes.name}>{comment.name}</Typography>
				<Typography className={classes.date}>
					{new Date(comment.date).toDateString()}
				</Typography>
<<<<<<< HEAD
				{comment.name == account && (
					<Delete className={classes.delete} onClick={() => removeComment()} />
				)}
=======

				<Delete className={classes.delete} onClick={() => removeComment()} />
>>>>>>> 3fbefd9... initial commit
			</Box>
			<Typography>{comment.comments}</Typography>
		</Box>
	);
};

export default Comment;
