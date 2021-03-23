export function ClosestCustomer(customers, lat, long) {
    const earthRadius = 6371;
    let closeCustomer = [];
    if (typeof customer !== 'undefined') {
        customers.forEach(customer => {
            let distance = earthRadius *
                (
                    deg2rad(Math.acos
                        (
                            Math.sin(lat) *
                            Math.sin(customer.latitude) +
                            Math.cos(lat) *
                            Math.cos(customer.latitude) *
                            Math.cos(
                                Math.abs(customer.longitude - long)
                            )
                        )
                    )
                );
            if (distance <= 100) {
                closeCustomer.push({ Customer_id: customer.user_id, Customer_name: customer.name });
            }
        });
    }

    return closeCustomer;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}