
export default {

  login({Meteor, LocalState, FlowRouter, Accounts}, email, password) {

    if (!email || !password) {
      return LocalState.set('LOGIN_ERROR', 'Login & Passwort werden benötigt!');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      FlowRouter.go('/account');
    });

  },

  loginErrorClear({LocalState}) {
    return LocalState.set('LOGIN_ERROR', null);
  },

  register({Meteor, LocalState, FlowRouter, Accounts}, email, password1, password2) {

    if (!email || !password1 || !password2) {
      return LocalState.set('REGISTER_ERROR', 'Bitte alle Felder ausfüllen!');
    }

    if (password1 !== password2 ) {
      return LocalState.set('REGISTER_ERROR', 'Die Passwörter sind nicht identisch!');
    }

    Accounts.createUser({email, password: password1}, (err) => {
      if (err && err.reason) {
        return LocalState.set('REGISTER_ERROR', err.reason);
      }
      FlowRouter.go('/account');
    });
  },

  registerErrorClear({LocalState}) {
    return LocalState.set('REGISTER_ERROR', null);
  },

};
