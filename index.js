
const express = require('express') 
const bodyparser = require('body-parser') 
const path = require('path') 
const app = express() 

var Publishable_Key = 'pk_test_51Lpt29SJD3D9HnznesA0cP1T2lA6AOloyJdsMxW1EUTULGJi5l1BU6yBLNMhDGZsvSD1qvSEHbGk126SKKNZIitQ00MxoaSbdD'
var Secret_Key = 'sk_test_51Lpt29SJD3D9HnznfT7VXLnHb8Leh8wHjQUzXPQ59AT4WzGB8o5MGhB7KZ2kudpJLN9oruJphBEVXKNIRd0xp8ZD00ZndYrVsx'
 

const stripe = require('stripe')(Secret_Key) 

const port = process.env.PORT || 3000 

app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 

// View Engine Setup 
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs') 

app.get('/', function(req, res){ 
    res.render('Home', { 
    key: Publishable_Key 
    }) 
}) 

app.post('/payment', function(req, res){ 

    // Moreover you can take more details from user 
    // like Address, Name, etc from form 
    stripe.customers.create({ 
        email: req.body.stripeEmail, 
        source: req.body.stripeToken, 
        name: 'Gautam Sharma', 
        address: { 
            line1: 'TC 9/4 Old MES colony', 
            postal_code: '110092', 
            city: 'New Delhi', 
            state: 'Delhi', 
            country: 'India', 
        } 
    }) 
    .then((customer) => { 

        return stripe.charges.create({ 
            amount: 7000,    // Charing Rs 25 
            description: 'Web Development Product', 
            currency: 'USD', 
            customer: customer.id 
        }); 
    }) 
    .then((charge) => { 
        res.send("Success") // If no error occurs 
    }) 
    .catch((err) => { 
        res.send(err)    // If some error occurs 
    }); 
}) 

app.listen(port, function(error){ 
    if(error) throw error 
    console.log("Server created Successfully") 
})