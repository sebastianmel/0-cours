const btn = document.querySelector('#btn')
const img = document.getElementById('img')

btn.addEventListener('click', () => {
    img.classList.toggle('show')
    
})


//*************************************************** */

const mouseEvent = document.querySelector('.mouseEvent')
const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')

mouseEvent.addEventListener('mousemove', (e) => {
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 +"%";

    if (e.x > 500){
        document.body.style.filter = "blur(3px)";
    }else{
        document.body.style.filter = "none";
    }
})

//*************************************************************** */

document.getElementById('input').addEventListener('input',(e) =>{
    console.log(e.target.value);
    vertical.innerHTML = e.target.value;
})

/**********************************************************.. */
const theme = document.querySelectorAll('.theme');


theme.forEach((item) => {
    item.addEventListener('click', (e)=>{
        console.log(e.target.id);
        document.body.classList.remove("darkTheme","yellowTheme","salmonTheme");
        switch(e.target.id){
            case "dark":
                document.body.classList.add("darkTheme")
                break;
            case "yellow":
                document.body.classList.add("yellowTheme")
                break;
            case "salmon":
                document.body.classList.add("salmonTheme")
                break;
            default:
                null;
        }
    })
})