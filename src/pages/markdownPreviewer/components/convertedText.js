import React from 'react'
import { connect } from 'react-redux'
import {marked} from 'marked';
marked.use({
    async: false,
    breaks: false,
    gfm: true,
    pedantic: false,
    renderer: new marked.Renderer(),
    silent: false,
    tokenizer: new marked.Tokenizer(),
    walkTokens: null,
})
class convertedText extends React.Component {

  render(){
    return (
        <div>
        <div dangerouslySetInnerHTML={{__html: marked.parse(this.props.convertedText) }} />
        <div>{marked.parse(this.props.convertedText)}</div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    convertedText: state.markdown.convertedText,
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(convertedText)