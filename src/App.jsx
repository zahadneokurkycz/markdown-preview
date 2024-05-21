import React from 'react'
import './App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { marked } from 'marked';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			display: ''
		}
	}

	handleChange(e) {
		this.setState({
			display: marked.parse(e.target.value)
		})
		$('#preview').html(marked.parse(e.target.value))
	}

	render() {
		return(
			<>
				<div className='p-2'>
					<Row style={{height: '100%'}} className='p-2'>
						<Col className='text-center' style={{height: '100%'}}>
							<textarea className="form-control" id="editor" rows="28" onChange={this.handleChange} >
								# Markdown previewer
								Hello, and welcome to my markdown previewer by zahadneokurkycz
								## Example use
								[This is a link to the source code](https://playground-markdown.vercel.app/)

								`This is an inline code`
								```
								This is a block of code
								```
								* Some unordered lists
								1. And some ordered lists

								---
								> This is an blockquote example

								— Autor of this page

								![Github logo](https://avatars.githubusercontent.com/u/78108685?v=4)


								**This was my github pfp**"
							</textarea>
						</Col>
						<Col className='text-break' style={{height: '100%', width: '100%'}} id='preview'>
							<h1>Markdown previewer</h1>
							<p>Hello, and welcome to my markdown previewer by zahadneokurkycz</p>
							<h2>Example use</h2>
							<p>
								<a href="https://playground-markdown.vercel.app/">This is a link to the source code</a>
							</p>
							<p>
								<code>
									This is an inline code
								</code>
							</p>
							<pre>
								<code>
									This is a block of code
								</code>
							</pre>
							<ul>
								<li>Some unordered lists</li>
							</ul>
							<ol>
								<li>And some ordered lists</li>
							</ol>
							<hr />
							<blockquote>
								<p>This is an blockquote example</p>
							</blockquote>
							<p>— Autor of this page</p>
							<p>
								<img src="https://avatars.githubusercontent.com/u/78108685?v=4" alt="Github logo" />
							</p>
							<p>
								<strong>This was my github pfp</strong>
							</p>
						</Col>
					</Row>
				</div>
			</>
		)
	}
}


export {
	App
}
