const flavInput = prompt(
  "Please enter some ice cream flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,chocolate,chocolate"
);
 
const flavArray = flavInput.split(",");

const flavObject = {
  vanilla: 0,
  chocolate: 0,
  strawberry: 0
};

console.log(flavArray);


function sumVanilla(flavArray){
  let vx = 0;
  for(let i=0;i<flavArray.length;i++)
  {
   if(flavArray[i] == 'vanilla'){
    vx+=1;
   }
  }
  return (vx);
}
flavObject['vanilla'] = sumVanilla(flavArray);


function sumChocolate(flavArray){
  let cx = 0;
  for(let i=0;i<flavArray.length;i++)
  {
   if(flavArray[i] == 'chocolate'){
    cx+=1;
   }
  }
  return (cx);
}
flavObject['chocolate'] = sumChocolate(flavArray);


function sumStrawberry(flavArray){
  let sx = 0;
  for(let i=0;i<flavArray.length;i++)
  {
   if(flavArray[i] == 'strawberry'){
    sx+=1;
   }
  }
  return (sx);
}
flavObject['strawberry'] = sumStrawberry(flavArray);

console.log(flavObject);