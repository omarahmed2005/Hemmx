
// // /////////Connect to local server and search for data in database////////////////////////////
// fetch('http://localhost:2022/getCourseUrl').then((results)=>{return results.json();}).then((results)=>{

// console.log(results);

    
// })


// /////////Connect to local server and search for data in database////////////////////////////
fetch('http://localhost:2022/getTeamUrl').then((results)=>{return results.json();}).then((results)=>{

  console.log(results);

      for (let i=0 ; i<results.results.length ; i++)
      {
      document.getElementById('teamDiv').innerHTML +=

      `
        <div style="margin-bottom: 2em;>
        <div class="col-lg-6 mt-4 mt-lg-0">
        <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="${[i]}00" >
         <div class="member-info">
           <h4>${results.results[i].Name}</h4>
          <span>${results.results[i].Job}</span>
          <p>${results.results[i].Description}.</p>
         </div>
        </div>
        </div>
        </div>
        `
    }
})


 fetch('http://localhost:2022/getCourseUrl').then((results)=>{return results.json()}).then((results)=>{

  console.log(results)
  
  for (let i=0 ; i<results.results.length ; i++)
  {
  document.getElementById('courseDiv').innerHTML +=

  `
  <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="${[i]}00" style="margin-bottom: 2em;">
  <div class="icon-box">
  <h4>${results.results[i].Name}</h4>
  <p>${results.results[i].Description}</p>
  <br><h5>Duration:${results.results[i].Hours} hours</h5>
  <br><h5>Price:${results.results[i].Price}</h5>
  </div>
  </div>
  `
 }
 })