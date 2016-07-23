import React from 'react';

MyLayout = React.createClass({
	render(){
		return(
			<div className="container">
				<main>
					{ this.props.content }
				</main>
			</div>
		)
	}
})