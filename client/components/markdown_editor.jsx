import React from 'react';
import ContentEditable from 'react-contenteditable';

MarkdownEditor = React.createClass({
	handleChange(event){
		console.log(event.target.value)
		this.props.onTextUpdate(event.target.value)
	},

	render(){
		return(
			<div className="col-sm-6">
				<ContentEditable
					html={this.props.content}
					disabled={false}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
})