const path = require(`path`);
const express = require(`express`);
// const exphbs = require(`express-handlebars`);
// const session = require(`express-session`);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));

app.get('/', (req,res) => {
    res.send(`Hello World`)
})

app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}/`));