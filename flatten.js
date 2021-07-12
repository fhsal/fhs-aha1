

let e = {...a, ...b}


let epicFlatArray = [];

function epicFlatten4 (obj){
    {for (i=0; i<(obj.length-1); i++){
        console.log ('i= ' + i)
        if(obj[i][1]){
          obj[i][1].forEach(element => {
              let fullEpic = { ...obj[i][0], ...element}
          epicFlatArray.push(fullEpic)    
          });
      }
    }
  
  }
  }



function epicFlatten (obj){
  {for (i=0; i<(5); i++){
      console.log ('i= ' + i)
      if(obj[i][1]){
        obj[i][1].forEach(element => {
            let fullEpic = [];
            fullEpic.push(obj[i][0]);
            fullEpic.push(element);
        epicFlatArray.push(fullEpic)    
        });
    }
  }

}
console.log('epicFlatArray: ' + epicFlatArray)
}

function epicFlatten2 (obj){
  {for (i=0; i<(5); i++){
      console.log ('i= ' + i)
      if(obj[i][1]){
        obj[i][1][0].forEach(element => {
            let fullEpic = { ...obj[i][0], ...element}
        epicFlatArray.push(fullEpic)    
        });
    }
  }

}
console.log('epicFlatArray: ' + epicFlatArray)
}





