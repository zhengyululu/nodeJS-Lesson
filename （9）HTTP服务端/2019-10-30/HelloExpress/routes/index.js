var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list',function(req, res, next) {
  /**render做页面的渲染，读取ejs文件内容，将文件中占位符<%=userName %>
   * 替换成后端给定的数据（第二个参数）
   * 在将文件中的代码内容响应到客户端去
   *  */
  res.render('list',{userName:"zhangsan",newList:[{"newId":1,newTitle:"8欧火热积分 "},{"newId":2,newTitle:"8欧火热积分 "}]});
})
router.get("/index/list",function(req, res, next) {
  res.end("list");
})
module.exports = router;
