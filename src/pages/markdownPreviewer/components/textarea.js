import React from 'react';
import { connect } from 'react-redux';
import { updateText } from '../../../actions/actionMarkdown';

class TextArea extends React.Component {
  handleChange = (event) => {
    const {value} = event.target;
    this.props.updateText(value);
  };

  render() {
    return (
      <textarea onChange={this.handleChange} value={this.props.text} >
        
      </textarea>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.markdown.text
});
function mapDispatchToProps(dispatch) {
    return {
        updateText: (value) => dispatch(updateText(value))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
 
