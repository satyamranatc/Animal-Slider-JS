let Cards = document.getElementsByClassName("Card");
let Main = document.getElementsByTagName("main")[0];
Main.style.transition = "1s"


// Automatic Scrolling

// let i = 2;
// setInterval(()=>
// {

//     Main.style.backgroundImage = `url(./image/img${2 + +i}.jpg)`
//     if (i == 5)
//     {
//         i = 2;
//     }
//     i++;

// },4000)


for(let i in Cards)
{
    Cards[i].addEventListener("click", ()=>
    {
 
        Main.style.backgroundImage = `url(./image/img${2 + +i}.jpg)`

    });
}
