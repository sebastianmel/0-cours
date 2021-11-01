
const btn = document.querySelector('#btn');
const img =document.getElementById('img');

btn.addEventListener('click' ,() =>{
    img.classList.toggle('show')
    
})


// -----------MOOUSSE EVENT------------
const mousseEvent =document.querySelector('.mousseEvent');
const horizontal =document.querySelector('.horizontal');
const vertical =document.querySelector('.vertical');

mousseEvent.addEventListener('mousemove',(e) => {
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mousseEvent.style.left = e.x / window.innerWidth*100+"%";

    if(e.x > 500){
        document.body.style.filter = 'blur(5px)'
    }else{
        document.body.style.filter ='none';
    }
})

// -----------input EVENT------------

document.getElementById('input').addEventListener('input',(e)=>{
    console.log(e.target.value);

})

// -----------theme EVENT------------

const theme = document.querySelectorAll('.theme');
const dark = document.querySelector('.dark');
const salmon = document.querySelector('.salmon');
const yellow = document.querySelector('.yellow');

theme.forEach((item) =>{
    item.addEventListener('click',(e)=>{
        console.log(e.target.id);
        document.body.classList.remove("darkTheme","salmonTheme","yellowTheme");
        switch(e.target.id){
            case"dark":
            document.body.classList.add("darkTheme");
            break;
            case"salmon":
            document.body.classList.add("salmonTheme");
            break;
            case"yellow":
            document.body.classList.add("yellowTheme");
            break;
            default:
                null;
        }
    })
})