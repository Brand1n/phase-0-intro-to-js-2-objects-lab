// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress:"11 Broadway",
}
const updateEmployeeWithKeyAndValue = (employee, key, value)=>{
const newemployee = { ...employee};
newemployee[key] = value
return newemployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value
return employee;
}

   function deleteFromEmployeeByKey(employee, key){
   const employeecopy = { ...employee};
    delete employeecopy[key];
    return employeecopy;
   }
   function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
   }