import * as React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";

export default class MDEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  handleChange = (value) => {
    const {onChange, refId} = this.props;
    onChange(refId, "update", value);
    this.setState = {value}
  };

  render() {
    const {value} = this.state
    return (
      <SimpleMDE
        value={value}
        onChange={this.handleChange}
        options={{spellChecker: false}}
      />
    );
  }
}