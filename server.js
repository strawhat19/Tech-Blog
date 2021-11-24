const path = require(`path`);
const express = require(`express`);
const exphbs = require(`express-handlebars`);
const routes = require(`./controllers`);
const session = require(`express-session`);
const sequelize = require(`./config/connection`);
const SequelizeStore = require(`connect-session-sequelize`)(session.Store);

// const sess = {
//     secret: `Secret Secret`,
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

const app = express();
const PORT = process.env.PORT || 3001;

// app.engine(`.hbs`, exphbs({ extname: `.hbs` }));
// app.set(`view engine`, `.hbs`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));

app.get('/', (req,res) => {
    res.send(`Hello World`)
})

// app.use(session(sess));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}/`));
// });