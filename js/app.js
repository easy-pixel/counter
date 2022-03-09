const input = document.getElementById("input");
const inputBtn = document.getElementById("input_btn");
const saveList = document.getElementById("save_list");
let mySaves = [];

localStorage.setItem()

//Save sites
inputBtn.addEventListener("click", 
function() {
    if(input.value != "") {
        mySaves.push(input.value);
        input.value = "";
    }
    renderSaves();
})

let renderSaves = () => {
    let saveItems = "";
    for(let i=0; i<mySaves.length; i++) {
    saveItems += `
    <li>
        <a target='_blank' href='${mySaves[i]}'>
            ${mySaves[i]}
        </a>
    </li>`; 
    }
saveList.innerHTML = saveItems;
}