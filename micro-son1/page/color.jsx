import React from "react";

import './color.module.scss';


export default function ColorPage() {
	const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
	console.log(process.env.API_KEY);

	return (
		<div className="wyz">
			{
				colors.map((color) => <p style={{ background: color }} onClick={() =>alert(111)} />)
			}
		</div>
	)
}
