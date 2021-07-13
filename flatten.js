

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


function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.textContent = contents;
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);

  
{/* <input type="file" id="file-input" />
<h3>Contents of the file:</h3>
<pre id="file-content"></pre> */}



