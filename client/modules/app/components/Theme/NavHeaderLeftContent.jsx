import React from 'react';
import DropDown from './NavDropDown.jsx';

export default class extends React.Component {

  render() {
    const {
      userId
    } = this.props;

    var links = [];
    links.push({url: '/questions/flugpraxis', name: 'Flugpraxis'} );
    links.push({url: '/questions/technik', name: 'Technik'} );
    links.push({url: '/questions/luftrecht', name: 'Luftrecht'} );
    links.push({url: '/questions/meteorologie', name: 'Meteorologie'} );

    let navAdmin = React.createElement(DropDown, {name: 'Fragenkataloge', links: links});

    return (
      <ul className="nav navbar-nav">

        <li className="">
          <a aria-expanded="false" role="button" href="/" target="">Start</a>
        </li>
        { userId ? navAdmin : null }
      </ul>
    );
  }

};
