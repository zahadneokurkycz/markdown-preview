import React from 'react'
import './App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { marked } from 'marked'

marked.use({
	async: false,
	pedantic: false,
	gfm: true,
	breaks: true
});

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
		console.log(marked.parse(e.target.value))
	}

	render() {
		return(
			<>
				<div className='p-2'>
					<Row style={{height: '100%'}} className='p-2'>
						<Col className='text-center' style={{height: '100%'}}>
							<textarea className="form-control" id="editor" rows="28" onChange={this.handleChange} >
								
							</textarea>
						</Col>
						<Col className='text-break' style={{height: '100%', width: '100%'}} id='preview'>
							
						</Col>
					</Row>
				</div>
			</>
		)
	}
}

function Theme() {
	return(
		<div className='position-fixed end-0 bottom-0 p-3'>
			<themer-btn btnclass="btn btn-secondary"></themer-btn>
		</div>
	)
}

function Source() {
	return(
		<div className='position-fixed start-0 bottom-0 p-3'>
			<a href='https://github.com/zahadneokurkycz/markdown-preview' target='_blank' rel='noopener' className='btn btn-outline-secondary'><i className="bi bi-github" /> Source Code</a>
		</div>
	);
}

export {
	App,
	Theme,
	Source
}
