

// /////////Connect to local server and search for data in database////////////////////////////

        fetch('http://localhost:2060/getMassUrl').then((results)=>{return results.json();}).then((results)=>{

        
            for (let i=0 ; i<results.results.length ; i++)
            {
            document.getElementById('massTable').innerHTML +=
       
        
      
        
            `
            <td>${results.results[i].Name}</td>
            <td>${results.results[i].Email}</td>
            <td>${results.results[i].Subject}</td>
            <td>${results.results[i].Message}</td>
        
            `    
            
            
            }
        })


