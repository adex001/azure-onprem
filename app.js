const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const subPath = '/api/v1'
const port = process.env.PORT || 8000;

// MiddleWares
app.use(express.json());

// Routes

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'I am live at azure api'
  });
});

app.post(`${subPath}/login`, (req, res) => {
  try {
    const {username, password} = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: 'No username or password'
      });
    }
    return res.status(200).json({
      message: "Successfully Logged in",
      token: 'hjwdfwhbciybwiwbcwkcwocniwcbicb2347fy938cg792g92euc2ef2g9ev2bv2'
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Interal server error',
      err
    });
  }
})

// sample Azure API

app.post(`${subPath}/sample`, (req, res) => {
  try {
    const {username} = req.body;
    if (!username) {
      return res.status(400).json({
        message: 'No username'
      });
    }
    return res.status(200).json({
      message: "Working API dectected!"
    });
  } catch (err) {
    return res.status(500).json({
      message: 'internal server error'
    }); 
  }
})


// Listen on port
app.listen(port, () => {
  console.log('Azure api started on port' +port);
});
