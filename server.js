 const express = require('express');

 const app = express();


 const server = app.listen(process.env.PORT || 8000, () => {
     console.log('Server port is running at 8000... Good luck! :)')
 });

 app.use((req, res) => {
    res.status(404).send({ message: 'Not found...' });
  });