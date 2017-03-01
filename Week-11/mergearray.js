//write your code here!
//Arr: [ Banana, 0, Dog]
//String: Banana0Dog
function MergeArray(array){
    let arr = ["Banana", 0, "Dog"]
    var output = "";
    for(i=0;i<arr.length; i++){
        let value = arr[i];
        output = output + value;
    }
    console.log(output);
}
MergeArray();