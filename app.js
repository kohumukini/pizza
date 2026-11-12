import express from "express";
import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// Define the application
const app = express();

// Create Connection Pool
const pool = mysql2.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB, 
    port: process.env.DB_PORT, 
}).promise();

app.get('/db-test', async(req, res) => {
    try {
        const orders = await pool.query('SELECT * FROM orders'); 
        res.send(orders[0]); 
    } catch(err) {
        console.error('Database error:', err);
        res.status(500).send('Database error occurred');
    }
})

// Defeine the port
const PORT = 3000; 

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

app.get('/admin', async(req, res) => {
    try {
        const orders = await pool.query('SELECT * FROM orders'); 
        console.log(orders[0]); 
        res.render("admin", { orders:orders[0] });
    } catch(err) {
        console.log('Database error:', err);
        res.status(500).send('Database error occurred');
    } 
})

// Add a route to process a pizza order
app.post('/submit-order', async(req, res) => {

    // Create a JSON object to store order data
    const order = req.body;
    console.log(order);

    const sql = `INSERT INTO orders (fname, lname, email, size, method, toppings, comment) VALUES(?, ?, ?, ?, ?, ?, ?)`;

    // Create an array of parameters from order data
    const params = [
        order.fname, 
        order.lname, 
        order.email, 
        order.size, 
        order.method, 
        order.toppings, 
        order.comment
    ]

    const [result] = await pool.execute(sql, params); 

    // Display the confirmation page
    res.render('confirm', { order })

});

app.get("/menu", (req, res) => {
    res.render('menu')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});