// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;
const ipAddress = '192.168.178.88'; // Replace with your desired IP address

app.use(cors());
app.use(cors({
    origin: '*'
  }));

app.get('/api/laughter', (req, res) => {
    console.log('GET request received at /api/laughter');
  const laughter = ['Ha', 'Hee', 'Ho', 'Haha', 'LOL'];
  const randomLaughter = laughter[Math.floor(Math.random() * laughter.length)];
  res.json({ laughter: randomLaughter });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.listen(PORT, ipAddress, () => {
    console.log(`Server listening on ${ipAddress}:${PORT}`);
  });