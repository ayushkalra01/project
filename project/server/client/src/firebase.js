import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyD3UJxQjw4w7L0Ls2TEnQL86u2-Y5yDUh4',
	authDomain: 'placementprep-545de.firebaseapp.com',
	projectId: 'placementprep-545de',
	storageBucket: 'placementprep-545de.appspot.com',
	messagingSenderId: '535412184866',
	appId: '1:535412184866:web:135162282b1e1ca9e1777b',
	measurementId: 'G-SL1H2ZRY6P',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
