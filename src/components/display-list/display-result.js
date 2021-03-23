export function DisplayResult(closestCustomers) {
    var customersList = `
        <span>No</span>
        <span>Name</span>
        <span>Id</span>
        `;  
    for (var i = 0, j = 1; i < closestCustomers.length; i++, j++) {
        var customer = `
        <span>${j}</span>
        <span>${closestCustomers[i].Customer_name}</span>
        <span>${closestCustomers[i].Customer_id}</span>
        `;
        customersList += customer;
    }
    document.querySelector('close-clients').innerHTML = customersList;
}