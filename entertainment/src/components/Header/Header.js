import './Header.css';

const Header = () => {
	return (
		<span onClick={() => window.scroll(0, 0)} className="header">
			Watch Your Favourite Show
		</span>
	);
};

export default Header;
