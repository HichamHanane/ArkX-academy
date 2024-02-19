const { log } = require('console');
const fs = require('fs');

const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];


let readInputValue = () =>{
    let inputValue = fs.readFileSync('input.txt','utf-8');
    return inputValue;
}

let cityFromFile = readInputValue();

let chosenCity = cities.filter((index)=>{
    return index.name == cityFromFile;
})


const GetTemp = async () =>{
   let lat = chosenCity[0].lat;
   let lng = chosenCity[0].lng;
   let name = chosenCity[0].name;
   
   const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
   d = await response.json();

   fs.unlinkSync('./cityname.txt');

   fs.writeFile('./cityname.txt',`${d.current_weather.temperature} °C`,(err)=>{
    if (err) {
        console.log('Error : ',err);
    }
    else{
        console.log('File created');
    }
   })
   console.log(`The temperature in ${name} is : ${d.current_weather.temperature }${d.current_weather_units.temperature }`);
}
GetTemp();

















