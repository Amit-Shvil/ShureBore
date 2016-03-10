'use strict';

var experiments = {

};

module.exports = {
  debug: true,
  enableMocks: false,
  experiments: JSON.stringify(experiments),
  locale: 'en',
  clientTopology: {
    documentsStaticsUrl: '',
    staticBaseUrl: '//static.parastorage.com/'
  },
  newRelicEndUserHeader: '',
  newRelicEndUserFooter: ''
};
