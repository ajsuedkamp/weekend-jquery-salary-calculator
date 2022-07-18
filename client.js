console.log('in client.js');

$(document).ready(readyNow);

function readyNow() {
    console.log('ready now!');
    $( 'h1' ).text('Salary Calculator'); //make sure jquery is working correctly
    $( '#submit' ).on( 'click', addEmployee);
    $( 'body' ).on( 'click', '.deleteBtn', removeEmployee);
} // end readyNow


let employeeList = [];

function addEmployee() {
 let firstName = $( '#firstNameInput' ).val();
 let lastName = $( '#lastNameInput' ).val();
 let employeeID =  $( '#employeeID' ).val();
 let jobTitle = $( '#jobTitle' ).val();
 let annualSalary = $( '#annualSalary' ).val();

 const employee = {
    name: firstName + ' ' + lastName,
    id: employeeID,
    title: jobTitle,
    salary: annualSalary,
 }

 employeeList.push(employee);
 console.log(employeeList);

 let yearlyTotal = 0
    for( let worker of employeeList ) {
        let yearlySalary = parseInt(worker.salary);
        yearlyTotal += yearlySalary;
    }
let monthlyTotal = yearlyTotal / 12

    console.log(yearlyTotal);
    console.log(monthlyTotal);
$( '#total-monthly' ).html(`
    Total Monthly: ${monthlyTotal}
    `)

if(monthlyTotal > 20000) {
    $( '#total-monthly' ).css( 'background-color', 'red');
}

 $( '#employee-table' ).append(`
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeID}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td>
            <button class="deleteBtn">Delete</button>
        </td>
    </tr>
 `)

 $( 'input' ).val('');
 
} // end addEmployee

function removeEmployee() {
    console.log('remove employee');
    let employee = $ ( this ).parent().parent();
    employee.remove();
} //end removeEmployee



