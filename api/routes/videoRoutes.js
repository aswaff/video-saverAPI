'use strict';


module.exports = function(app) {
  var todoList = require('../controllers/videoController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

    app.route('/search')
      .get(todoList.search_all_videos);

    // app.get('/search?search=',function(req,res){
    //   var search_key = req.param('search');
    //       Tasks.find({Category: search_key})
    //          .then(ebooks => res.json(ebooks))
    //          .catch(err => res.status(404).json({ success: false }));
    //       });


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
