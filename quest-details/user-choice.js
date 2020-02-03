// create a file that will allow user to select choices for quests via radio buttons 

function userChoice(choice) {
    const label = document.createElement('label');
    label.classList.add('choice');
    
    const radio = document.createElement('input');
    radio.type = 'radio'; //type of selection 
    radio.name = 'choice'; //name
    radio.required = true; //has to be selected
    label.appendChild(radio);

    const description = document.createElement('span'); //creating an element where choice goes
    description.textContent = choice.description; //where description of choice goes
    label.appendChild(description);

    return label;
} 
export default userChoice;