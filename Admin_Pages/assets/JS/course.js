//////////Getting elments
let courseName = document.getElementById('courseName')
let coursePrice = document.getElementById('coursePrice')
let courseHours = document.getElementById('courseHours')
let courseDes = document.getElementById('courseDes')
let addCourse = document.getElementById('addCourse')
let deletCourse = document.getElementById('deleteCourse')
let updateCourse = document.getElementById('updateCourse')

/////////Connect to local server and insert into database////////////////////////////
addCourse.onclick = ()=>{

    // 1. create object
    let addCourseDataToDatabase = {'Name':courseName.value , 'Description':courseDes.value,'Hours':courseHours.value,'Price':coursePrice.value};
    // 2. create url
    let addCourseUrl = 'http://localhost:2060/addCourseUrl'; // address = API = URL = Hotline


    fetch(addCourseUrl,{
        method : 'POST',
        headers : {'content-Type':'application/json'},
        body : JSON.stringify(addCourseDataToDatabase)
    })
}

/////////Connect to local server and delete data from database////////////////////////////
deletCourse.onclick = ()=>{

    //1.
    let deleteCourseFromDataBase = {'Name':courseName.value , 'Description':courseDes.value,'Hours':courseHours.value,'Price':coursePrice.value};
    //2.
    let deleteCourseurl = 'http://localhost:2060/deleteCourseUrl';


    fetch(deleteCourseurl,{
        method : 'DELETE',
        headers : {'content-Type':'application/json'},
        body : JSON.stringify(deleteCourseFromDataBase)

    })    

}

/////////Connect to local server and update data of database////////////////////////////
updateCourse.onclick = ()=>{
    // 1.
    let updateCourseDataFromDatabase = {'Name':courseName.value , 'Description':courseDes.value,'Hours':courseHours.value,'Price':coursePrice.value}
    // 2.
    let updateCourseUrl = 'http://localhost:2060/updateCourseUrl'; // address = API = URL = Hotline
 
    
    fetch(updateCourseUrl,{
        method : 'PUT',
        headers : {'content-Type':'application/json'},
        body : JSON.stringify(updateCourseDataFromDatabase)
    })
}

fetch('http://localhost:2060/getCourseUrlAdmin').then((results)=>{return results.json();}).then((results)=>{

        
    for (let i=0 ; i<results.results.length ; i++)
    {
    document.getElementById('courseTable').innerHTML +=




    `
    <td>${results.results[i].Name}</td>
    <td>${results.results[i].Description}</td>
    <td>${results.results[i].Hours}</td>
    <td>${results.results[i].Price}</td>

    `    
    
    
    }
}) 


/* <tr>
                    <td>${results.results[i].Name}</td>
                    <td>${results.results[i].Description}</td>
                    <td>${results.results[i].Hours}</td>
                    <td>${results.results[i].Price}</td>
                  </tr> */