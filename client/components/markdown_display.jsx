import React from 'react';

MarkdownDisplay = React.createClass({
	render(){
		return(
			<div className="col-sm-6">
				{ this.props.children }
			</div>
		)
	}
})