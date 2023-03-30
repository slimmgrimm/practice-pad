// const loadDatabase = fetch('data/library.json', {
//     mode: 'cors'
// });


const stuff = fetch('data/library.json');
stuff.then(function(data) {
    console.log(data);
})






// $.get("data/library.json").then(function(data){
//     console.table(data);
// });




    // const loadDatabase = fetch("data/library.json", {mode: 'cors'});
    // loadDatabase.then(function(data){
    //     console.table(data);
    // });
