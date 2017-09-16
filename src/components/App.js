import React from 'react';
import YeomanImage from './YeomanImage';
import ChatInputForm from './ChatInputForm';
import './app.css';

const nlp = window.nlp; // load from script tag

export default class AppComponent extends React.Component {

  componentDidMount() { 
    loadjs('https://apis.google.com/js/client.js?onload=handleGoogleClientLoad')
  }

  render() {

    let doc = nlp('dinosaur');
    let str = doc.nouns().toPlural().out('text');

    return (
      <div className="index">
        <YeomanImage />
        <ChatInputForm /> 
        <div className="notice">
          Please edit <code>{str}</code> to get started!
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};