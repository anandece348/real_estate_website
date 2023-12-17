const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
   console.log('remote mongodb database connection sccessfully');
}).catch(error => console.log(error))