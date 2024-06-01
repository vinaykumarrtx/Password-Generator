let city="goa";
console.log(city);

//is same to below//

console.log("goa")

//if yes so//
const response = fetch('https://api.openweathermap.org/data/2.5/weather?e=$(city) Cappid=s(API_KEY)&units=metric') ;
//then above link should be//
const response = fetch('https://api.openweathermap.org/data/2.5/weather?e=$("goa") Cappid=s(API_KEY)&units=metric') ;
                                                                         //here above//

