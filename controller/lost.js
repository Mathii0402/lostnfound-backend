// const lost = require('../model/lost');

// exports.createLost = async(req,res,next)=>
// {
//     try{
//         console.log(req.body);
//         const expense = await lost.create(req.body);
//         return res.status(200).json(
//             {
//                 sucess:true,
//                 message:expense
//             }
//         );
//     }
//     catch(err)
//     {
//         if(err.name=='ValidationError')
//         {
//             const mes = Object.values(err.errors).map(val=>val.message)
//             return res.status(400).json(
//                 {
//                     sucess:false,
//                     message:mes
//                 }
//             );
//         }
//         else{
//              return res.status(500).json(
//                 {
//                     sucess:false,
//                     message:"internal server error"
//                 }
//             );
//         }
//     }
    
// }
// exports.getLost = async (req, res, next) => {
//     try {
//       const expenses = await lost.find();
//       console.log(expenses);
//       return res.status(200).json({
//         success: true,
//         count: expenses.length,
//         data: expenses,
//       });
//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         error: "server error",
//       });
//     }
//   };


// const request=require("../../src/")
const Expenses = require("../model/lost");
exports.getLost = async (req, res, next) => {
  try {
    const expenses = await Expenses.find();
    console.log(expenses);
    return res.status(200).json({
  
       expenses
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};

exports.getExpensesById = async (req, res, next) => {
  try {
    const expense = await Expenses.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({
        success: false,
        error: "no expen",
      });
    }
    return res.status(200).json(expense);
  } catch (err) {
    return res.status(500).json({
      success: true,
      error: "srv error",
    });
  }
};
exports.addLost = async (req, res, next) => {
    try {
      const { name, amount, dec ,title,place} = req.body;
      console.log(name, amount, dec,title,place);
      const expense = await Expenses.create(req.body);
      return res.status(201).json({
   data:expense
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: "srv error",
      });
    }
  };
//-------------------BY USING FIND ID AND DELETE-------------------------------
exports.deleteExpensesID = async (req, res, next) => {
  try {
    const id=req.params.id;
    const expense=await Expenses.findByIdAndDelete(re.params.id);
    
    return res.status(201).json({
        success: true,
        data: expense,
      });

  } catch {
    return res.status(500).json({
      success: true,
      error: "srv error",
    });
  }
};
exports.deleteExpensesID = async (req, res, next) => {
    try {
      const id=req.params.id;
      const expense=await Expenses.findById(req.params.id);
      await expense.remove();
      return res.status(201).json({
          success: true,
          data: expense,
        });
  
    } catch {
      return res.status(500).json({
        success: true,
        error: "srv error",
      });
    }
  };
  
  exports.UpdateExpensesID = async (req, res, next) => {
    try {
      const id=req.params.id;
      const expense=await Expenses.findByIdAndUpdate(id,req.body,{ new: true });
  
      return res.status(201).json({
          success: true,
          data: expense,
        });
  
    } catch {
      return res.status(500).json({
        success: true,
        error: "srv error",
      });
    }
  };
  
  exports.Loggerfunction = async (req, res, next) => {
  console.log("logging");
  console.log(req.method,req.url);
  next();
  };
  
  exports.checkAdmin=(req,res,next)=>{
    const isAdmin=true;
    if(!isAdmin){
        res.status(401).json({
            message:"unauthorized acces"
        })
    }
    next();
  }
