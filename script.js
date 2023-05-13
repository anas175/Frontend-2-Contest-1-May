/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr.map((item) => {
          if (item.marks > 50) {
            console.log(item.name);
          }
        });
 
}
PrintStudentswithMap();

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
}
PrintStudentsbyForEach();

function addData() {
  //Write your code here, just console.log
    arr.push({ id: 4, name: "susan", age: "20", marks: 45 });
        console.log(arr);
}
addData();

function removeFailedStudent() {
  //Write your code here, just console.log
   arr = arr.filter((item) => item.marks < 50);
        console.log(arr);
}
removeFailedStudent();

function concatenateArray() {
  //Write your code here, just console.log
    let arr = [
          { id: 5, name: "anas", age: "24", marks: 87 },
          { id: 6, name: "adnan", age: "22", marks: 70 },
          { id: 7, name: "arslan", age: "15", marks: 75 },
        ];
        console.log(arr);
}
concatenateArray();
