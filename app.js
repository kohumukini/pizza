import express from "express"

// Define the application
const app = express();

// Defeine the port
const PORT = 3000; 

const orders = []

// Enable static file serving
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Define a deafult route 
app.get('/', (req, res) => {
    res.render('home');
});

// Add a contact route to display a contact viewpage
app.get("/contact-us", (req, res) => {
    res.render('contact')
});


app.get('/confirm-order', (req, res) => {
    res.render('confirm')
});

app.get('/admin', (req, res) => {
    res.render("admin", { orders });
})

// Add a route to process a pizza order
app.post('/submit-order', (req, res) => {

    // Create a JSON object to store order data
    const order = req.body;
    order['timestamp'] = new Date();

    console.log(order);

    // Add order object to orders array
    orders.push(order);
    console.log(orders);

    // Display the confirmation page
    res.render('confirm', { order })

});

app.get("/menu", (req, res) => {
    res.render('menu')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});