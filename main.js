let light = document.querySelector("#light")
let on = document.querySelector("#onbtn")
let of = document.querySelector("#ofbtn")



on.addEventListener("click" , function(){
    light.style.backgroundColor="yellow"
    on.style.backgroundColor = "green"
    of.style.backgroundColor= ""
    on.style.color ="white"
    of.style.color ="black"
})

of.addEventListener("click" , function(){
    light.style.backgroundColor="white"
    of.style.backgroundColor= "green"
    on.style.backgroundColor = ""
    of.style.color ="white"
    on.style.color ="black"
})