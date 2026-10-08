import express from "express"

// Define the application
const app = express();

// Defeine the port
const PORT = 3000; 

// Enable static file serving
app.use(express.static('public'));

// Define a deafult route 
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});