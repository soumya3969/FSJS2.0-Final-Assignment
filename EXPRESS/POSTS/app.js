const express = require('express');
// import { express } from 'express';
const app = express();

app.get("/posts", (req, res) => {
  const posts = [];
  for (let i = 0; i < 20; i++) {
    posts.push({ id: i, title: `Post ${i}` });
  }
  res.json(posts);
});

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})