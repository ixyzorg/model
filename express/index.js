import express from 'express';

const app = express();
app.use(express.json())
app.post('/api/login', (req, res) => {
  if (req.body.username === '1' && req.body.password === '1') {
    res.status(200).send({
      code: 0,
      msg:'登录成功',
    });
  }else{
    res.status(401).send({
      code: 1,
      msg:'登录失败'
    });
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
