//////////Getting elments
let insName = document.getElementById('insName')
let insJob = document.getElementById('insJob')
let insDes = document.getElementById('insDes')
let addIns = document.getElementById('addIns')
let deletIns = document.getElementById('deleteIns')
let updateIns = document.getElementById('updateIns')

/////////Connect to local server and insert into database////////////////////////////
addIns.onclick = ()=>{

    // 1. create object
    let addInsDataToDatabase = {'Name':insName.value , 'Job':insJob.value,'Description':insDes.value};
    // 2. create url
    let addInsUrl = 'http://localhost:2060/addInsUrl'; // address = API = URL = Hotline


    fetch(addInsUrl,{
        method : 'POST',
        headers : {'content-Type':'application/json'},
        body : JSON.stringify(addInsDataToDatabase)
    })
}


/////////Connect to local server and update data of database////////////////////////////
updateIns.onclick = ()=>{

    // 1.
    let updateInsDataFromDatabase = {'Name':insName.value , 'Job':insJob.value,'Description':insDes.value}
    // 2.
    let updateInsUrl = 'http://localhost:2060/updateInsUrl'; // address = API = URL = Hotline


    fetch(updateInsUrl,{
        method : 'PUT',
        headers : {'content-Type':'application/json'},
        body : JSON.stringify(updateInsDataFromDatabase)
    })
}

/////////Connect to local server and delete data from database////////////////////////////
deletIns.onclick = ()=>{

    //1.
    let deleteInsFromDataBase = {'Name':insName.value , 'Job':insJob.value,'Description':insDes.value};
    //2.
    let deleteInsUrl = 'http://localhost:2060/deleteInsUrl';


    fetch(deleteInsUrl,{
            method : 'DELETE',
            headers : {'content-Type':'application/json'},
            body : JSON.stringify(deleteInsFromDataBase)
    })    
}
 
fetch('http://localhost:2060/getTeamUrlAdmin').then((results)=>{return results.json();}).then((results)=>{

        
    for (let i=0 ; i<results.results.length ; i++)
    {
    document.getElementById('teamTable').innerHTML +=




    `
    <td>${results.results[i].Name}</td>
    <td>${results.results[i].Job}</td>
    <td>${results.results[i].Description}</td>

    `    
    
    
    }
})