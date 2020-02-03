import { saveUser } from './localstorage.js';
import userDead from './userDead.js';

//creating a function that sets up a user profile 

function userProfile() {
    const name = document.getElementById('name');
    const magic = document.getElementById('magic');
    const might = document.getElementById('might');

    const user = saveUser();

    name.textContent = user.name;
    if (userDead(user)) {
        might.textContent = 'Dead';
    }
    else {
        might.textContent = user.might;
        magic.textContent = user.magic;
    }

}
export default userProfile;