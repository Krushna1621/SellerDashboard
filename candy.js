function Savetolocalstorage(event){
    event.preventDefault();
    var name=event.target.username.value;
    var email=event.target.emailid.value;
    var phoneno=event.target.phoneno.value;
    const obj={
        name,
        email,
        phoneno
    }
    axios.post("https://crudcrud.com/api/77e92fb8d01943f3be150e120e42c96f/Sham",obj)
    .then((response)=>{
        ShowUserOnScreen(response.data)
        console.log(response)
    })
    .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML+"<h4>Something went to wrong</h4>"
        console.log(err)
    })
    //localStorage.setItem('userdetails',JSON.stringify(obj));
    //ShowUserOnScreen(obj)
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/77e92fb8d01943f3be150e120e42c96f/Sham")
    .then((response)=>{
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            ShowUserOnScreen(response.data[i])
            
        }
    })
    .catch((error)=>{
        console.log(error)
    })
   // const localStorageObj=localStorage;
    //const localStoragekeys=Object.keys(localStorageObj)

    //for(var i=0;i<localStoragekeys.length;i++){
      //  const key=localStoragekeys[i]
       // const userDetailsString=localStorageObj[key]
       // const userDetailsObj=JSON.parse(userDetailsString)
       // ShowUserOnScreen(userDetailsObj)
    //}
})
function ShowUserOnScreen(obj){
        const parentElem=document.getElementById('listof')
        const childrenElem=document.createElement('li')
        childrenElem.textContent=obj.name+'-'+obj.email+'-'+obj.phoneno;
        
        const deletebtn=document.createElement('input')
        deletebtn.type="button"
        deletebtn.value='Delete'
        deletebtn.onclick=()=>{
             localStorage.removeItem(obj.email)
             parentElem.removeChild(childrenElem)
        }
        const editbtn=document.createElement('input')
        editbtn.type="button"
        editbtn.value='Edit'
        editbtn.onclick=()=>{
             localStorage.removeItem(obj.email)
             parentElem.removeChild(childrenElem)
             document.getElementById('inputnametag').value=obj.name
             document.getElementById('inputemailtag').value=obj.email
             document.getElementById('inputphonenotag').value=obj.phoneno

        }
        
        
        childrenElem.appendChild(deletebtn)
        childrenElem.appendChild(editbtn)
        parentElem.appendChild(childrenElem)
       
}