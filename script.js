// let input = document.querySelector("input");
// let div = document.querySelector("div");
// let btn = document.querySelector("button");

// async function getwheather(city) {
//   try {
//     let apikey = "e75ce63786571094861ea971594bf0b7";

//     let raw = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`,
//     );

//     if (!raw.ok) {
//       throw new Error("header.ok = false");
//     }

//     let data = await raw.json();

//     // data = data.main.temp - 273.15;

//     data = data.main.temp;

//     // data = Math.floor(data)
//     data = data.toFixed();
//     // if(data > 30){
//     div.innerText = data + "°C";
//     throw new Error("temperature is high");
//     // }

//     div.innerText = data + "°C";
//     // console.log();
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// btn.addEventListener("click", () => {
//   let city = input.value;

//   getwheather(city);
// });

// ==========================================================

// let user = ["praful@","jack@","wankhade@"]

// function sendemail(email){

//   return new Promise((res,rej)=>{

//     let time = Math.floor(Math.random() * 3000)
//     setTimeout(function(){

//       if(time>1500) res(email + " " + "send")
//         else rej(email + " " +"not send")
//     },time)
//   })
// }

// async function sendemails(users){

//  let a = users.map((arr)=>{

//    return sendemail(arr)
//    .then((data)=>{ return data})
//    .catch((err)=>{return err })

//   })

//  let ans = await Promise.all(a)

//  ans.forEach((status)=>{
//   console.log(status)
//  })
// }

// sendemails(user)

let input = document.querySelector("input");
let but = document.querySelector("button");
let di = document.querySelector(".box");

async function wheather(city) {
  try{
    let apikey = "e75ce63786571094861ea971594bf0b7";

    let rawdata = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`,
    );

    let data = await rawdata.json();

    if (rawdata.ok === false) {
      throw new Error(data.message)
    }


    let point = await data.main.temp - 273.15;
    let dp = point.toFixed();
    console.log(data.sys.country)
    
    di.innerText = dp + "°C";
  }
  catch(err){
di.innerText = err.message;

  }
}

but.addEventListener('click', () => {
  let city = input.value

  wheather(city);
});


