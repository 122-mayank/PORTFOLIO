const express = require('express');
const app = express();
const path = require('path');

app.set('view engine' , 'ejs');
app.set("views" , "../views");

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname , '../style')));
app.use(express.static(path.join(__dirname,"../media")));

console.log(path.join(__dirname , '../views'));

app.use('/', (req,res)=>{
    res.render('index');
});

const PORT = 3005;
app.listen(PORT , ()=>{
      console.log(`Server is running on http://localhost:${PORT}`);
});