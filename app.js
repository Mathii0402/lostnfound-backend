// const exp = require("express");
// const app = exp();
// const mongoose = require('mongoose');
// const db = mongoose.connection;
// const host = 'localhost';
// const {getLost,createLost} = require('./controller/lost');
// app.use(exp.json())
// mongoose.set("strictQuery", false);

// mongoose.connect('mongodb+srv://nifaz:Fb5UhL4TCP8mLOsg@cluster0.sdiy1fl.mongodb.net/?retryWrites=true&w=majority')
//     .then(()=>console.log('connected'))

// db.on("error", console.error.bind(console, "connection error"));
// db.once("open",  () =>{
//     console.log("connected sucessfully");
// });


 
// app.get('api/v1/lost',getLost);
// app.post('api/v1/lost',createLost);

// // app.get('/api/v1/exp',getExpenses);
// // app.put('/api/v1/exp/:id',updateExpense);
// // app.delete('/api/v1/exp/:id',deleteExpense);
// // app.get('/api/v1/exp/:id',getExpensebyId);
// // app.post('/api/v1/exp/create',loggerfunc,checkAdmin, createExpense);
// app.listen(3002, () => {
//     console.log("app is running...")
// })



const express = require("express");
var cors = require('cors')
const mongoose = require("mongoose");
const app = express();
app.use(cors())
const port = process.env.PORT || 3002;
const db = mongoose.connection;
const {
  getLost,
  getExpensesById,
  addLost,
  deleteExpensesID,
  UpdateExpensesID,
  checkAdmin,
  Loggerfunction,
} = require("./controller/lost");
app.use(Loggerfunction);
app.use(express.json());
mongoose.connect(
  "mongodb+srv://nifaz:Fb5UhL4TCP8mLOsg@cluster0.sdiy1fl.mongodb.net/?retryWrites=true&w=majority"
);

db.on("error", console.error.bind(console, "conn err"));
db.once("open", function () {
  console.log("connected");
});

app.get("/api/v1/expenses", getLost);
app.get("/api/v1/expenses/:id", getExpensesById);
app.post("/api/v1/expenses",  addLost); //checkAdmin is a middle ware
app.delete("/api/v1/expenses/:id", deleteExpensesID);
app.put("/api/v1/expenses/:id", UpdateExpensesID);

app.listen(port, () => {
  console.log(`port is ${port}`);
});