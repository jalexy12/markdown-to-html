import React from 'react';
import marked from 'marked';

MarkdownBox = React.createClass({

	getInitialState(){
		let renderer = new marked.Renderer();
		renderer.heading = function(text, level){
			return `
				<h${level}>
					${text}
				</h${level}>
			`
		}

		return {
			md: "What",
			renderer: renderer,
		}
	},

	processLists(arrayOfLines){
		let lastLiIndex = 0
		let newLines = [""]

		let liTest = /\* [A-z0-9]*/
		arrayOfLines = arrayOfLines.filter( (line) => {
			return line
		})

		arrayOfLines.forEach((line, index) => {
			let lastLine = index >= 1 ? arrayOfLines[index - 1] : line
			console.log("last line", lastLine)
			let lastIsLi = liTest.test(lastLine)
			let isLi = liTest.test(line)

			console.log("isLi", isLi, "lastIsLi", lastIsLi)
			if (isLi && lastIsLi){
				lastIsLi = true
				newLines[lastLiIndex] += `${line}\n`
			} else if (isLi){
				lastIsLi = true
				lastLiIndex = index
				newLines[lastLiIndex] += `${line}\n`
			} else {
				newLines.push(line)
				lastIsLi = false
			} 
		})
		console.log(newLines)
		return newLines
	},

	processMarkdown(md){
		let stripped = md.replace(/(<((\/?)[A-z0-9]*)>)/ig, "*^&(")
		let lines = this.processLists(stripped.split("*^&("))

		return lines.map( (line, index) => {
			marked.setOptions({ sanitize: true })
			return marked(line, { renderer: this.state.renderer })
		}).join("")
	},

	handleTextUpdate(md, isNextLine){
		// let split = md.replace(/(<((\/?)[A-z0-9]*)>)/ig, "\n")
		this.setState({ md: md })
	},

	createMarkdown(){
		let markdown = this.processMarkdown(this.state.md)
		return markdown
	},

	render(){
		return(
			<div className="row">
				<MarkdownEditor
					content={this.state.md} 
					onTextUpdate={this.handleTextUpdate}
				/>
				<div 
					dangerouslySetInnerHTML={{__html: this.createMarkdown()}} 
					className="col-sm-6 markdown-content">
				</div>
			</div>
		)
	}
})