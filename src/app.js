const express = require('express');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || '3000';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index', { 'title': 'Index' });
})


app.listen(port, () => {
    console.log(`Running on port ${port} ...`);
})
