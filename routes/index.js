var express = require('express');
var router = express.Router();
var todoList = require('../database/model/todoList')

/* GET home page. */
router.get('/todo', function(req, res, next) {
  todoList.find().then(data=>{
      console.log(data);
      res.json({
          code:200,
          data
      });
  })
});
router.post('/todo',function (req,res) {
    let todo = req.body;
    todoList.create(todo).then(data =>{
        res.json({
            code:200,
            msg:'success'
        })
    })
})
router.patch('/todo/:id',(req,res)=>{
    let id = req.params.id;
    let isDone = req.body.isDone ==1?true:false;
    todoList.update({_id:id},{isDone}).then(data =>{
       res.json({
           code:200,
           msg:"状态修改成功"
       });
    })
})
router.delete('/todo/:id',(req,res)=>{
    let id = req.params.id;
    todoList.remove({_id:id}).then(data =>{
        res.json({
            code:200,
            msg:"删除成功！！"
        })
    })
})
router.post('/todo/',(req,res) =>{
    let title = req.body;
    todoList.create({title:title},{isDone:false}).then(data =>{
        res.json({
            code:200,
            msg:'添加成功'
        })
    })
})


module.exports = router;
