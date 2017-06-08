import React, { Component } from 'react';
import './MarkdownPreviewer.css'

class MarkdownPreviewer extends Component {
    state = {
        markdownVal: 'Blabla'
    }

    onTextareaChange = (e) => {
        this.setState({
            markdownVal: e.target.value
        })
    }

    render () {
        return (
            <div className="container">
                <div className="markdown">
                    <textarea className="markdown__input" value={this.state.markdownVal} onChange={this.onTextareaChange}></textarea>
                    <div className="markdown__result">{this.state.markdownVal}</div>
                </div>
            </div>
        )
    }
}

export default MarkdownPreviewer