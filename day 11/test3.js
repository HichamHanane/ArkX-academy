

let arr = [1,2,3,1,50,10,50];


let newArray = [];
for(let i=0;i < arr.length ; i++){
    let dupl=[];
    dupl.push(arr[i]);
    for(let j = i+1 ; j < arr.length ; j++){
        if(arr[j] == arr[i]){
            
            dupl.push(arr[j])
        }
    }
    newArray.push(dupl);
    console.log(dupl);
}
