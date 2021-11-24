const path = require(`path`);
const express = require(`express`);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));

app.get(`/`, (req,res) => {
    res.send(`Hello Guys 2`)
})

app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}/`));