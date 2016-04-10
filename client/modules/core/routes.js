import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
}
