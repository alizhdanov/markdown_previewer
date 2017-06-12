import React, { Component } from 'react';
import './MarkdownPreviewer.css'
import 'gutenberg-web-type/src/style/gutenberg.scss'
import marked from 'marked'

class MarkdownPreviewer extends Component {
    state = {
        markdownVal: 'Blabla'
    }

    onTextareaChange = (e) => {
        this.setState({
            markdownVal: e.target.value
        })
    }

    createMarkup = () => {
        return {__html: marked(this.state.markdownVal)};
    }


    render () {
        return (
            <div className="container">
                <div className="markdown">
                    <textarea className="markdown__input" value={this.state.markdownVal} onChange={this.onTextareaChange}></textarea>
                    <div className="markdown__result" dangerouslySetInnerHTML={this.createMarkup()}></div>
                </div>
            </div>
        )
    }
}

export default MarkdownPreviewer