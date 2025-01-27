let input = document.querySelector("#input");
let btn = document.querySelectorAll(".btn");

let buttonArray = Array.from(btn);
let string = " ";

buttonArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "AC") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (e.target.innerHTML == "X") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC || X") {
      string = e.target.innerHTML;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

// let t='';
// let test = document.querySelector("#test");
// test.addEventListener("keydown", (event) => {
//     t+=(event.key);
//     console.log(t);
//   console.log(`key ${event.key} is pressed`);
// });

window.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        let result = eval(string);
        input.value = result;
       
    }
    else{
        string+=event.key;
        input.value = string;
    }
})
