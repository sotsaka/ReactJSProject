const express = require('express');
const path = require('path')
const fs = require("fs");
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3001;

var corsOptions = { origin: ["http://localhost:3000", "https://localhost:3000"] }
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => console.log(`Listening on port ${port}`));


app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
app.get('/info/contact', (req, res) => {
  res.header("Content-Type", 'application/json');
  console.log(path.join(__dirname, './ressources/contact.json'));
  res.sendFile(path.join(__dirname, './ressources/contact.json'));
});
app.get('/info/schedule', (req, res) => {
  res.header("Content-Type", 'application/json');
  console.log(path.join(__dirname, './ressources/schedule.json'));
  res.sendFile(path.join(__dirname, './ressources/schedule.json'));
});

app.post("/auth", (req, res) => {
  loadDB((result) => {
    var email = req.body.email;
    var pass = req.body.pass;
    var found = false;
    console.log(email, pass);
    for (const row in result) {
      if (result[row]["email"] == email) {
        found = true;
        if (result[row]["pass"] == pass) {
          res.end("authentified");
        }
        else {
          res.end("wrong password");
        }
      }
    }
    if (!found) {
      res.end("no user");
    }
  });
});

app.post("/signup", (req, res) => {
  loadDB((result) => {
    var email = req.body.email;
    var pass = req.body.pass;
    var found = false;
    console.log(email, pass);
    for (const row in result) {
      if (result[row]["email"] == email) {
        found = true;
      }
    }
    if (found) {
      res.end(JSON.stringify("user already exists"));
    }else{
      result.push({"custId" : (result.length+1).toString(), "email" : email, "pass" : pass});
      saveDB(result);
      res.end(JSON.stringify("successfully added"));
    }
    console.log(result);
  });
});

function readFileAsJson(file) {
  //read the file async
  return new Promise((resolve, reject) => {

    fs.readFile(file, function (err, data) {
      if (err) {
        console.error(err)
        //reject({});
      } else {
        const lines = JSON.parse(data.toString());
        resolve(lines);
      }
    });
  });
}
async function loadDB(callback) {
  let result = await readFileAsJson("./ressources/customers.json");
  callback(result);
}

async function saveDB(data) {
  await writeStreamPromise(data);
}
function writeStreamPromise(data) {
  return new Promise((resolve, reject) => {
      var writerStream = fs.createWriteStream("./ressources/customers.json");
      writerStream.write(JSON.stringify(data), 'UTF8');
      writerStream.end();
      writerStream.on('finish', function () {
          console.log("db save completed.");
          resolve();
      });
      writerStream.on('error', function (err) {
          console.log(err.stack);
          reject();
      });
  });
}