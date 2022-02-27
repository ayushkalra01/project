import React, { useState, useEffect, useContext } from 'react';
import {
	Box,
	makeStyles,
	TextareaAutosize,
	Button,
	FormControl,
	InputBase,
} from '@material-ui/core';

import { useHistory, useLocation } from 'react-router-dom';

import { createPost, uploadFile } from '../../service/api';
import { useUserAuth } from '../../context/UserAuthContext';

const useStyle = makeStyles((theme) => ({
	container: {
		margin: '150px 150px',
	},
	image: {
		width: '100%',
		height: '50vh',
		objectFit: 'cover',
	},
	title: {
		marginTop: 10,
		display: 'flex',
		flexDirection: 'row',
	},
	textfield: {
		flex: 1,
		margin: '0 30px',
		fontSize: 25,
	},
	textarea: {
		width: '100%',
		border: 'none',
		marginTop: 50,
		fontSize: 18,
		'&:focus-visible': {
			outline: 'none',
		},
	},
}));

const initialPost = {
	title: '',
	description: '',
	picture: '',
	username: 'ayush',
	categories: '',
	createdDate: new Date(),
};

const CreatePost = () => {
	const classes = useStyle();
	const history = useHistory();
	const location = useLocation();
	const { user } = useUserAuth();
	const [post, setPost] = useState(initialPost);
	const [file, setFile] = useState('');
	const [imageURL, setImageURL] = useState('');

	post.username = user.email.split('@')[0];
	const savePost = async () => {
		await createPost(post);
		history.push('/');
	};

	const handleChange = (e) => {
		setPost({ ...post, [e.target.name]: e.target.value });
	};

	return (
		<Box className={classes.container}>
			{/* <img src={url} alt="post" className={classes.image} /> */}

			<FormControl className={classes.title}>
				{/* <label htmlFor="fileInput">
					<Add className={classes.addIcon} fontSize="large" color="action" />
				</label>
				<input
					type="file"
					id="fileInput"
					style={{ display: 'none' }}
					onChange={(e) => setFile(e.target.files[0])}
				/> */}
				<InputBase
					onChange={(e) => handleChange(e)}
					name="title"
					placeholder="Title"
					className={classes.textfield}
				/>
				<InputBase
					onChange={(e) => handleChange(e)}
					name="categories"
					placeholder="company"
					className={classes.textfield}
				/>
				<Button onClick={() => savePost()} variant="contained" color="primary">
					Publish
				</Button>
			</FormControl>

			<TextareaAutosize
				rowsMin={5}
				placeholder="Tell your story..."
				className={classes.textarea}
				name="description"
				onChange={(e) => handleChange(e)}
			/>
		</Box>
	);
};

export default CreatePost;
