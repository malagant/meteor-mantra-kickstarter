import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';

import appModule from './modules/app';
import adminModule from './modules/admin';
import questionsModule from './modules/questions';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);

app.loadModule(appModule);
app.loadModule(adminModule);
app.loadModule(questionsModule);

app.init();
