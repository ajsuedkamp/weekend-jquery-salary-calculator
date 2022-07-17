console.log('in client.js');

$(document).ready(readyNow);

function readyNow() {
    console.log('ready now!');
    $( 'h1' ).text('Salary Calculator'); //make sure jquery is working correctly
    $( '#submit' ).on( 'click', addEmployee);
} // end readyNow


function addEmployee() {
 let firstName = $( '#firstNameInput' ).val();
 let lastName = $( '#lastNameInpute' ).val();
 let employeeID =  $( '#employeeID' ).val();
 let jobTitle = $( '#jobTitle' ).val();
 let annualSalary = $( '#annualSalary' ).val();

 console.log('add an employee', firstName);
}