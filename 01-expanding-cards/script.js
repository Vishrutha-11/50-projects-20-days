console.log("Sri Rama")


const firstPanelElement = document.querySelector(".first")
const secondPanelElement = document.querySelector(".second")
const thirdPanelElement = document.querySelector(".third")
const fourthPanelElement = document.querySelector(".fourth")
const fifthPanelElement = document.querySelector(".fifth")

firstPanelElement.addEventListener("click", ()=>{
    console.log("Clicked first")
    removeActiveClass();
    firstPanelElement.classList.add("active")
})

secondPanelElement.addEventListener("click", ()=>{
    console.log("Clicked second")
    removeActiveClass();
    secondPanelElement.classList.add("active")
})

thirdPanelElement.addEventListener("click", ()=>{
    console.log("Clicked third")
    removeActiveClass();
    thirdPanelElement.classList.add("active")
})

fourthPanelElement.addEventListener("click", ()=>{
    console.log("Clicked fourth")
    removeActiveClass();
    fourthPanelElement.classList.add("active")
})

fifthPanelElement.addEventListener("click", ()=>{
    console.log("Clicked fifth")
    removeActiveClass();
    fifthPanelElement.classList.add("active")
})

function removeActiveClass(){
    const allPanelElements = document.querySelectorAll(".panel")
    allPanelElements.forEach(ele => {
        ele.classList.remove('active');
    })
}

// const panelElements = document.querySelectorAll(".panel")

// console.log("panelElements ====> ", panelElements)

// for (let i = 0; i < panelElements.length; i++) {
//     const element = panelElements[i];
//     console.log("element =====> ", element);
    
//     element.addEventListener("click", ()=>{
//         console.log("clicked element =====> ", element)
//     })
// }