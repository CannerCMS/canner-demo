import SimpleMDE from 'simplemde';
import * as React from 'react';

export default class MDEditor extends React.Component {
  componentDidMount() {
    this.editor = new SimpleMDE({ element: this.mde });
  }

  render() {
    return (
      <div ref={node => this.mde = node}/>
    );
  }
}