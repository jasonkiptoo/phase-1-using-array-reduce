const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here



const totalBatteries=batteryBatches.reduce( (element,total)=>
{
return element+total;
}
);


console.log(`The total batteries found is : ${totalBatteries}`)