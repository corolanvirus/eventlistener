// les dom / évènements

const btn = document.querySelector('#btn') // query selector
const img = document.getElementById('img') // par id sans #

btn.addEventListener('click', () => { // on ajoute un évenement au click
    //console.log('nb click')
    //img.classList.add('show')
    //img.classList.remove('show')
    img.classList.toggle('show')
    alert('ça change')
})

//*********************************************** */


const mouseEvent = document.querySelector('.mouseEvent')
const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')

mouseEvent.addEventListener('mousemove', (e) => { // e = event
    horizontal.innerHTML = e.x
    vertical.innerHTML = e.y
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%"

    if (e.x > 500) {
        document.body.style.filter = "blur(3px)"
    } else {
        document.body.style.filter = "none"
        //document.body.style.backgroundColor = "rgb(202, 49, 182)"
    }
})

//***************************************************** */

// onpeut ne pas declarer devariable
document.getElementById('input').addEventListener('input', (e) => {
    //console.log(e.target.value) // c'est ce qui est passé à l'input !
    vertical.innerHTML = e.target.value
})

//**************************************************** */

const theme = document.querySelectorAll('.theme')


theme.forEach((item) => { // grace au foreach il ont tous un event listener
    item.addEventListener('click', (e) => {
        console.log(e.target.id)
        document.body.classList.remove("darkTheme", "yellowTheme", "salmonTheme")

        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme")
                break
            case "yellow":
                document.body.classList.add("yellowTheme")
                break
            case "salmon":
                document.body.classList.add("salmonTheme")
                break
            default:
                null;
        }
    })
})

