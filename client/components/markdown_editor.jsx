import React from 'react';
import ContentEditable from 'react-contenteditable';

MarkdownEditor = React.createClass({
	handleChange(event){
		this.props.onTextUpdate(event.target.value)
	},

	render(){
		return(
				<ContentEditable
					className="col-sm-6 markdown-editor"
					html={this.props.content}
					disabled={false}
					onChange={this.handleChange}
				/>
		)
	}
})