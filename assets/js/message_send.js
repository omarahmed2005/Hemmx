//////////Getting elments
let messName = document.getElementById('name')
let messEmail = document.getElementById('email')
let messSub = document.getElementById('subject')
let message = document.getElementById('bodyMess')
let sendMess = document.getElementById('sendMess')

/////////Connect to local server and insert into database////////////////////////////
sendMess.onclick = ()=>{

    // 1. create object
    let addMessDataToDatabase = {'Name':messName.value , 'Email':messEmail.value, 'Subject':messSub.value, 'Message':message.value};
    // 2. create url
    let addMessUrl = 'http://localhost:2060/addMessUrl'; // address = API = URL = Hotline
   // 3.


    fetch(addMessUrl,{
        method : 'POST',
        headers : {'content-Type':'application/json'},
        body : JSON.stringify(addMessDataToDatabase)
    })
    alert('your message has sent')
}

