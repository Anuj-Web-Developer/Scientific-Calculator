 let input = document.querySelector("#input");
 let btn = document.querySelectorAll(".btn");
 
 let buttonArray = Array.from(btn);
 let string = '';

 buttonArray.forEach(btn=>{
    btn.addEventListener("click",(e)=>{

        if(e.target.innerHTML == 'AC'){
            string = string.substring(0,string.length-1);
            input.innerHTML = string;
        }
        else if(e.target.innerHTML == 'X'){
            string = '';
            input.innerHTML = string;
        }
        else if(e.target.innerHTML == '='){
            string = eval(string);
            input.innerHTML = string;
        }
else if (e.target.innerHTML == 'AC || X'){
    string = e.target.innerHTML;
}
        else{
            string+= e.target.innerHTML;
        input.innerHTML = string;
        }
    });
 });

