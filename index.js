import express from 'express';
import cors from 'cors';

const app=express();
app.use(cors());
app.get('task/2B',function(req,res) {
let url = req.query.fullname.toUpperCase() || ' ';
let inits=url ? url.split(" ").filter(ew=>ew) : 0;
let fullname,shortname;

if(inits && inits.lenght<=3 && inits.every( ew => !/[\d_\/]+/i.test(ew))
  ){
  fullname=inits.pop();
  fullname=fullname[0]+fullname.slice(1).toLowerCase();
  inits=inits.map( ew => `${ew[0]}.` );
  shortname=[fullname, ...inits].join(" ");
  } else {
  shortname="Invalid fullname";
  }
  
  res.send(shortname);
  });
  
  app.listen(3000, function() {
  console.log(' On http:\\localhost:3000');
  });
