import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MarkdownPreviewer from './MarkdownPreviewer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>React Markdown Previewer</h2>
        </header>
        <MarkdownPreviewer />
        <footer className="App-footer">
            created by <a href="https://github.com/makedonec88">@makedonec88</a>
        </footer>
      </div>
    );
  }
}

export default App;
