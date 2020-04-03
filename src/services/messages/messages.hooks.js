const { authenticate } = require("@feathersjs/authentication").hooks;

const updatedAt = async context => {
  context.data.updatedAt = new Date();
  return context;
};

const processMessage = require("../../hooks/process-message");

const populateUser = require('../../hooks/populate-user');

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [processMessage()],
    update: [updatedAt],
    patch: [],
    remove: []
  },

  after: {
    all: [populateUser()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
