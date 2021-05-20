console.log("test this");

async function getData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        console.log(data);
        console.log(data.title1);
        console.log(data.title2);
        console.log(data.title3);
        console.log(data.title4);
        console.log(data.title5);
        console.log(data.title6);
        document.querySelector('.num1').innerHTML = data.title1;
        document.querySelector('.num2').innerHTML = data.title2;
        document.querySelector('.num3').innerHTML = data.title3;
        document.querySelector('.num4').innerHTML = data.title4;
        document.querySelector('.titlename1').innerHTML = data.title5;
        document.querySelector('.titlename2').innerHTML = data.title6;

        // updating group data left
        const list_tickets = document.querySelector('#list-tickets ul');
        data.list.forEach(item => {
            console.log( item );
            const list_ticket_item = document.createElement('li');
            list_ticket_item.innerHTML = `<div class="card__line d-flex flex-wrap justify-content-between pb-3 pt-3">${item.para} <span class="ml lii">${item.text}</span></div>`;
            list_tickets.appendChild(list_ticket_item);
        });

        // update group data right
        const list_ticketsleft = document.querySelector('#list-ticketsleft ul');
        data.list1.forEach(item => {
            console.log(item);
            const list_ticket = document.createElement('li');
            list_ticket.innerHTML = `<div class="card__line d-flex flex-wrap justify-content-between pb-3 pt-3">${item.pararight}<span class="ml li">${item.textright}</span></div>`;
            list_ticketsleft.appendChild(list_ticket);
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
getData();

