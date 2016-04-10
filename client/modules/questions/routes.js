import React from 'react';
import {mount} from 'react-mounter';


import {
  AuthCheck,
  LayoutDefault,
  Simplest,
} from '/client/configs/components.js';

export default function (injectDeps, {FlowRouter}) {

  const AuthCheckCtx = injectDeps(AuthCheck);

  FlowRouter.route('/questions', {
    name: 'questions.list',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Simplest title="Fragebögen"/>)
      });
    }
  });
}
