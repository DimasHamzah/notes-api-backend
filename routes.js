const { addNoteHandler, getAllNotesHandler, editNoteByIdHandler } = require('./handler');
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
    handler: editNoteByIdHandler
  },
  {
    method: 'delete',
    path: '/notes/{id}',
    handler: () => {}
  }
];

module.exports = routes;