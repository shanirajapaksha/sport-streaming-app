const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const app = express();
const port = 4000;

// Load your Firebase service account key
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(cors());
app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name,
    });

   

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Firebase error:', error);
    res.status(500).json({ message: error.message || 'Error registering user' });
  }
});

app.listen(port, () => {
  console.log(`✅ Backend running at http://localhost:${port}`);
});
