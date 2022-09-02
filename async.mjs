function devin (){
    return Promise.resolve("devin ganteng")
}
const name = await devin();
console.info(name); 

