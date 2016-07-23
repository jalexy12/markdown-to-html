import React from 'react';

FlowRouter.route('/', {
	action: function(){
		ReactLayout.render(MyLayout, {
			content: <MarkdownBox />
		})
	}
})