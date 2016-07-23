import React from 'react';
import marked from 'marked';

MarkdownBox = React.createClass({

	getInitialState(){
		return {
			html: "<b>Hello World</b>"
		}
	},

	handleTextUpdate(html){
		this.setState( {html: html} )
	},

	createMarkdown(){
		return marked(this.state.html)
	},

	render(){
		return(
			<div className="row">
				<MarkdownEditor
					content={this.state.html} 
					onTextUpdate={this.handleTextUpdate}
				/>
				<div dangerouslySetInnerHTML={{__html: this.createMarkdown()}} className="col-sm-6">
				</div>
			</div>
		)
	}
})