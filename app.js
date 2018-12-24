var https = require('https');


function getCountryName(countryname){
  try{
https.get(`https://api.openweathermap.org/data/2.5/weather?q=${countryname}&APPID=69b7b8eacac115e497c5fe6329f78ba5`,response=>{
  let body = "";
       response.on("data",data=>{
            body+=data;
        });  
       response.on('end',()=>{
          var name = JSON.parse(body);
          console.log(`Temperature of ${countryname} is ${name.main.temp}`);
  });
});

}catch(error){
          console.log(error.message);
}
}
const countrynames = process.argv.slice(2) ;
countrynames.forEach(getCountryName);


