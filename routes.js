const { addNoteHandler, getAllNotesHandler, updateNoteHandler } = require('./handler');
const routes = [
  {
    method: 'post',
    path: '/notes',
    handler: addNoteHandler
  },
  {
    method: 'get',
    path: '/notes',
    handler: getAllNotesHandler
  },
  {
    method: 'update',
    path: '/notes/{id}',
    handler: updateNoteHandler
  },
  {
    method: 'delete',
    path: '/notes/{id}',
    handler: () => {}
  }
];

module.exports = routes;