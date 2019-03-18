`use strict`;
const createError = require(`http-errors`);
const express = require(`express`);
const path = require(`path`);
const cookieParser = require(`cookie-parser`);
const logger = require(`morgan`);
const indexRouter = require(`./routes/index`);
/*const Sequelize = require(`sequelize`);

var connection = new Sequelize(`test1`, `postgres`, `postgres`, {
  host: `localhost`,
  dialect: `postgres`
});

var Orders = connection.define(`orders`, {
  oid: Sequelize.INTEGER,
  name: Sequelize.STRING,
  imported: Sequelize.BOOLEAN,
  quantity: Sequelize.INTEGER,
  category: Sequelize.STRING,
  price: Sequelize.FLOAT,
}, {
  timestamps: false
});

var obj = {
    "name": "box of chocolates",
    "category": "food",
    "quantity": 1,
    "price": 10,
    "imported": true
}

var Receipt = connection.define(`receipt`, {
  oid: Sequelize.INTEGER,
  salesTax: Sequelize.FLOAT,
  total: Sequelize.FLOAT
}, {
  timestamps: false
});

connection.sync({
  force: true
}).then(function () {
  Orders.create({
    name: obj.name,
    imported: obj.imported,
    quantity: obj.quantity,
    category: obj.category,
    price: obj.price
  });
});
*/
const app = express();

app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `hbs`);

app.use(logger(`dev`));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, `public`)));

app.use(`/`, indexRouter);

module.exports = app;