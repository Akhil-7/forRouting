import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';
function Links() {
	const abc = 'Akhil';

	const toLink = `/paris/${abc}`;
	return (
		<div className="content">
			<ul>
				<li>
					<Link className="btns" to="/london">
						London
					</Link>
				</li>
				<li>
					<Link className="btns" to="/paris">
						Paris
					</Link>
				</li>
				<li>
					<Link className="btns" to="/tokoyo">
						Tokoyo
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Links;
