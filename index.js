import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

function canonize(url) {  
  var tempvar = url.match(/@?(https?:)?(\/\/)?([\w\.\-]+\/)?@?([\w\.]+)(\/)?/i);

  if(tempvar===null){
     tempvar="invalid name";}

  return tempvar;
};

app.get('/test2C', function(req, res) {
  console.log(req.query.username);
  var resultval=canonize(req.query.username);
  res.send("@"+resultval[4]);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
