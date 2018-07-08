function solve(input,sortingMethod) {
    let tickets = [];
    for (let i = 0; i < input.length; i++) {

        let [destination,price,status] = input[i].split('|');
        price=Number(price);
        let Ticket={
            destination:destination,
            price:price,
            status:status
        };
        tickets.push(Ticket);
    }
        let sortedTickets;

    switch (sortingMethod)
    {
        case 'destination':
        {
            sortedTickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        }
        case 'price':
        {
            sortedTickets = tickets.sort((a, b) => a.price - b.price);
            break;
        }
        case 'status':
        {
            sortedTickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
        }
    }

    return sortedTickets;
}