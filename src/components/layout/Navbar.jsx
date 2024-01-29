import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<Link to="/">Algo Visualizer</Link>
			</div>
			<div className="navbar-links">
				<Link to="/arrays">Arrays</Link>
				<Link to="/strings">Strings</Link>
				<Link to="/linked-list">Linked List</Link>
				<Link to="/maps">Maps</Link>
			</div>
		</nav>
	);
};

export default Navbar;
