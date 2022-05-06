const data = require("./friends_data.json");
// console.log(data);

//access data;
// console.log(data.Firends);
// first frineds data access;
// console.log(data.Firends[0]);
//first friends name access
// console.log(data.Firends[0].name);


//modify data
// console.log(data.Firends[0].name = "Mehedi Miraz");

//delete first frined
// delete data.Firends[0].name
// console.log(data);

/* 
----------------------------------------------
easiest get data path using json path finder website
https://jsonpathfinder.com/
root name hisabe x ney ei x bad diya diya.Root name amra nijeder icca mto dibo tarpor
.(dot) theke copy kore nile path kaj korbe;
ei tah use kore complex path ber kora onk sohoz hoye jabe;
------------------------------------------------------
 */


// const studentsData = require("./students_data.json");
// console.log(studentsData.students[0].languages[1]);


//Looping JSON file

for(x in data){
    // console.log(x);
    // console.log(data[x]);
    // console.log(data.Students);
}


