import makeUser from './make-user.js';
import { saveUser } from '../utilities/localstorage.js';

const userName = document.getElementById('user-name')
userName.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(userName);
    const user = makeUser(formData);

    saveUser(user);

    window.location = 'selectquest';
});