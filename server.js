const express = require('express')
const path = require('path')

const app = express();

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/build'));
  app.get('/3rd-party-licenses.txt', (req,res) => {
    res.sendFile(path.join(__dirname,'/', 'build', '3rd-party-licenses.txt'));
  })
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
