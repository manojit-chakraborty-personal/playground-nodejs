const event = {
    name: 'Birthday Party',
    guestList: ['Manojit', 'Sentu', 'Ankur'],
    printGuestList() {
        console.log('Guest List for ' + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
            
        })
    }
}

event.printGuestList()