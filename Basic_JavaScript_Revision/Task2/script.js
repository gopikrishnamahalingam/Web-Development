// Task
// Store marks for five subjects.
// Calculate and display:
// Total
// Average
// Highest mark
// Lowest mark
// Percentage

const Marks = [96,94,85,93,99];
let total = Marks[0];
let min = Marks[0];
let max = Marks[0];
for(let i=1; i<Marks.length; i++){
    total += Marks[i];

    if(min > Marks[i]){
        min = Marks[i];
    }

    if(max < Marks[i]){
        max = Marks[i];
    }

}
console.log("Total Marks: "+total);
console.log("Average Marks: "+total/Marks.length);
console.log("Highest Marks: "+max);
console.log("Lowest Marks: "+min);
console.log(`Percentage: ${total/Marks.length}%`);