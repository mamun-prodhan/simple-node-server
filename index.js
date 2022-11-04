const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Simple Node Seoorver Running');
});

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnoor', email: 'sabnoor@gmail.com' },
    { id: 3, name: 'Sabila', email: 'sabila@gmail.com' }
];

//userName: dbUser1
//password: Yp7ii9GZ7iEHXqFs


const uri = "mongodb+srv://dbUser1:Yp7ii9GZ7iEHXqFs@cluster0.nhx4fnh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('database connected');
  client.close();
});



app.get('/users', (req, res) =>{
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log('Post Api called');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(user);
    res.send(user);
})

app.listen(port, () => {
    console.log(`Simple Node Server is Running on port ${port}`);
})