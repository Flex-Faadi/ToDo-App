
    let mainDiv=document.getElementById('main');
    let inpValue=document.getElementById('inp');
  function AddValue() {
    let inpText=inpValue.value;
    let finalText=document.createTextNode(inpText);
    if(inpValue.value==""){
        let addBtn=document.getElementById('addBtn').style.display.disabled;
    }
    else{
        let listPara=document.createElement('li');
        listPara.setAttribute("class","list");
    
        listPara.appendChild(finalText);
        main.appendChild(listPara);
        inpValue.value="";
       

    //DELETE BUTTON

    let btnDiv=document.createElement("div");
    btnDiv.setAttribute("class","btnDiv");
    let btn=document.createElement('button');
    btn.setAttribute("class","btn");
    btn.setAttribute("onClick","DeleteBtn(this)");
    let btnText="Delete";
    let finalBtnText=document.createTextNode(btnText);
    btn.appendChild(finalBtnText);
    btnDiv.appendChild(btn);
    listPara.appendChild(btnDiv);
    }

}


//DELETE FUNCTION
function DeleteBtn(e) {
    let deleteList=e.parentNode.parentNode
    deleteList.remove();
    console.log(deleteList);
}

//EDIT FUNCTION
function EditBtn(e) {

}