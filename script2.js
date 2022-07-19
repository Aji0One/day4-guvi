var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    //To display all the countries flag
    for (ele in result)  
        console.log(result[ele].flag);
    
    // To display all countries name, region, sub-region and population.
    result.forEach((element) => {console.log(element.name);
        console.log(element.region);
        console.log(element.subregion);
        console.log(element.population);
        
    });
}
