const express = require("express");
const cors = require("cors");
const connect = require("./config/db.config");

var corsOptions = {
  origin: 'https://solution-it.pl',
}
//var allowedOrigins = ['localhost:4200', 'https://solution-it.pl/ebok/'];

const app = express();
app.use(cors());
app.set('json spaces', 2);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });



app.get("/ebok/allusers", (req, res) =>{
  connect.query("SELECT * FROM Users", function (err, result) {
    if (err) throw res.send(err);  
        res.json(result);
  })  
});

app.get("/ebok/users/:id", (req, res) =>{
  connect.query("SELECT * FROM Users WHERE ID ='"+req.params.id + "' OR Imie = '"+req.params.id+"'", function (err, result) {
    if (err) throw res.send(err);
        res.json(result);
  })    
}); 

app.post("/ebok/file", uploadFiles);
function uploadFiles(req, res) {
    console.log(req.body);
    res.json({ message: "Hellow to files" });
}

app.post("/ebok/add", jsonParser, (req, res) => {
  connect.query("INSERT INTO Users (`login`, `Imie`, `Nazwisko`) VALUES ('"+req.body.userLogin+"','"+req.body.userName+"','"+req.body.userSurname+"')", function (err, result, fields) {
    if (err) throw res.send(err);
    res.json(result);   
  });
  return res.send('Succes! req.body' +req.body);
});

app.post("/ebok/addrow", jsonParser, (req, res) => {
  connect.query("INSERT INTO `Ogrzewanie`(`Adres`, `Typ deklaracji`, `Zainstalowane źródło ciepła`, `Klasa kotłów na paliwo stałe`, `Rodzaj stosowanych paliw w kotłach na paliwo stałe`, `Źródła ciepła/spalania paliw uruchomione po 1 lipca 2021 r.`, `Zgłaszający urzędnik`, `Budynek jednorodzinny`, `Budynek wielorodzinny`, `Budynek zbiorowego zamieszkania`, `Typy budynków dla deklaracji B`, `Liczba lokali mieszkalnych`, `Liczba lokali zbiorowego zamieszkania`, `Dotyczy wszystkich lokali mieszkalnych`, `Liczba lokali objętych deklaracją`, `Numery lokali mieszkalnych objętych deklaracją`, `Data utworzenia deklaracji`) VALUES ('"+req.body[0]+"', '"+req.body[1]+"', '"+req.body[2]+"', '"+req.body[3]+"', '"+req.body[4]+"', '"+req.body[5]+"', '"+req.body[6]+"', '"+req.body[7]+"', '"+req.body[8]+"', '"+req.body[9]+"', '"+req.body[10]+"', '"+req.body[11]+"', '"+req.body[12]+"', '"+req.body[13]+"', '"+req.body[14]+"', '"+req.body[15]+"', '"+req.body[16]+"')", function(err, result, fields){
    if (err) throw res.send(err);
      res.json(result);   
      });
  return res.send('Succes!! ');
});
app.get("/ebok/allrow", (req, res) =>{
  connect.query("SELECT * FROM Ogrzewanie", function (err, result) {
    if (err) throw res.send(err);  
        res.json(result);
  })  
});

app.delete("/ebok/:id", (req, res) =>{
  connect.query("DELETE FROM Users WHERE ID ="+req.params.id+"", function (err, result) {
    if (err) throw res.send(err);
        res.json(result);
  })    
}); 

app.get("/ebok/q", (req, res) => {
  //console.log('Hellooooooooooooooooo!');  
  
  //res.json({ message: "Welcome to bezkoder application." });
});

// simple route
app.get("/ebok/", (req, res) => {
 // res.json({ message: "Welcome to bezkoder application." });
  res.send('Hello World');
  console.log('Hello Word')
});
app.get("/ebok/products", (req,res) => {
  const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    ,
    {
      id: 3,
      name: "wrench",
    },
  ];

 res.json(products);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}.`);
});