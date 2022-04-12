import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  description: validatePresence({ presence: true, message: 'Required' }),
};
