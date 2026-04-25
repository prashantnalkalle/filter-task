const cl = console.log;
const color = document.getElementById("color")


function oncolorchange(e){
    let selectcolor = e.target.value

    const all = [...document.querySelectorAll('.all')]

    all.forEach(ele => ele.classList.add('d-none'))

    const colorselect =[...document.querySelectorAll('.' + selectcolor)]

    colorselect.forEach(ele => ele.classList.remove('d-none'))

    
}









color.addEventListener('change',oncolorchange)




