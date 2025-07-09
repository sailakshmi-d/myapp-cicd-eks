const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello from user-service service!'));
app.listen(port, () => console.log('user-service service listening on port 3000'));
