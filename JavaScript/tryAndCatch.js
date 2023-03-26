try{
    console.log("hello");
    console.log(a);

    console.log("boom!");
}
catch (err){
    console.log("handled", err);
}
finally{
    console.log("finally");
}

console.log("end");