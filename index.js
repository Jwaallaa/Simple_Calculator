let output =""
let btns = document.querySelectorAll('.btn')
Array.from(btns).forEach((bton)=>{
    bton.addEventListener('click' , (e)=>{
        if(e.target.innerHTML== '='){
            output = eval(output);
            document.getElementById('input_i').value=output;


        }
        else if(e.target.innerHTML == 'Clear'){
            output='';
            document.getElementById('input_i').value=output;
        }
        else{
            output = output + e.target.innerHTML
            document.getElementById('input_i').value=output;
    }
    })

})