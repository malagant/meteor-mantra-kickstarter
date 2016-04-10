import React from 'react';

export default class extends React.Component {

  render() {
    const {title, content} = this.props;

    return (
      <div>
        <h3>{title ? title : 'Simplest react component'}</h3>
        <p>{content ? content : 'Lorem ipsum'}</p>
      </div>
    );
  }
}
