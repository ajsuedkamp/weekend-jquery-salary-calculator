console.log('in client.js');

$(document).ready(readyNow);

function readyNow() {
    console.log('ready now!');
    $( 'h1' ).text('Salary Calculator'); //make sure jquery is working correctly
    $( '#submit' ).on( 'click', addEmployee);
}


function addEmployee() {
    
}