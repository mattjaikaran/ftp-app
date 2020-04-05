// Initializes the `upload` service on path `/upload`
const { Upload } = require('./upload.class');
const createModel = require('../../models/upload.model');
const hooks = require('./upload.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/upload', new Upload(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('upload');

  service.hooks(hooks);
};
