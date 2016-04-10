import React from 'react';

import dataComposer from '../../lib/AccountLogin.js';
import Component from './Component.jsx';
const ComponentCtx = dataComposer(Component);

export default class extends React.Component {

  render() {
    return (
      <div className="bs-docs-section clearfix">
          <div className="row">

              <div className="col-md-6">
                  <h2 className="font-bold">Willkommen</h2>

                  <p>Wenn Du Dich einloggst, kannst Du personalisiert für die A-Lizenz üben. Der Zugang ist kostenlos.
                  </p>


              </div>
              <div className="col-md-6">
                  <div className="ibox-content">

                    <h2 className="font-bold">Login</h2>
                    <p>
                        Gib Deine Emailadresse und Dein Passwort ein.
                    </p>


                    <ComponentCtx />

                    <a href="/password">
                        <small>Passwort vergessen?</small>
                    </a>

                    <p className="text-muted text-center">
                        <small>Noch keine Logindaten?</small>
                    </p>
                    <a className="btn btn-sm btn-block" href="/register">Benutzerkonto erstellen</a>
                  </div>
              </div>
          </div>
          <hr/>
      </div>

    );
  }
}
