const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
// const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// //     });
// app.options("*", cors({ origin: 'http://localhost:8080', optionsSuccessStatus: 200 }));
// app.use(cors({ origin: "http://localhost:8080", optionsSuccessStatus: 200 }));

let currentUser = {
    id: '123',
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games']
}

let users = [
  {
    id: '123',
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games']
  },
  {
    id: '234',
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games']
  },
  {
    id: '235',
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics']
  },
]

const products = [
  {
   id: '1234',
   name: 'Flat-Screen TV',
   price: '$300',
   description: 'Huge LCD screen, a great deal',
   rating: 4.5
 },
 {
   id: '2345',
   name: 'Basketball',
   price: '$10',
   description: 'Just like the pros use',
   rating: 3.8
 },
 {
    id: '3456',
   name: 'Running Shoes',
   price: '$120',
   description: 'State of the art technology for optimum running',
   rating: 4.2
 },
]



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
}); 

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

app.get('/current-user', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
    res.json(currentUser);
})

app.get('/users/:id', (req,res) => {
    const { id } = req.params;
    res.json(users.find(user => user.id === id)); 
})

app.post('/users/:id', (req, res) => {
    const {id} = req.params;
    const { user: updatedUser } = req.body;

    users = users.map(user => user.id === id ? updatedUser : updatedUser);
    res.json(users.find(user => user.id === id))
})

app.get('/products/:id', (req,res) => {
  const { id } = req.params;
  res.json(products.find(product => product.id === id)); 
})

app.listen(8080, () => console.log(`listening on port ${8080}`))