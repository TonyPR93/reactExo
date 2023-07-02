import React from 'react';
import TextArea from './components/textarea'
import ConvertedText from './components/convertedText';

class MarkdownPreviewer extends React.Component {

  render() {
    return (
      <div>
        <TextArea />
        <ConvertedText />
      </div>
    );
  }
}


export default MarkdownPreviewer;

