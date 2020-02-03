import { getUser } from '../utilities/localstorage.js';
import quests from '../metadata.js';
import userProfile from '../utilities/userProfile.js';
import createQuestLink from './questlink.js';
import completedQuest from './completed-quest.js';
import completedAllQuests from './competed-all.js';
import userDead from '../utilities/userDead.js';

userProfile(); //header 

//grab user data from local storage 

const user = getUser;

//if they are dead, or have completed all 
if (userDead(user) || completedAllQuests(quests, user)) {
    //send them to result paige 
    window.location = '../results';
}

//getting some quest element from the DOM 
const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    //every quest 
    const quest = quests[i];
    let questDisplay = null;

    //if the user had completed certain quiz 
    if (user.completed[quest.id]) {
        //make a completed quest display (with a chackmark)
        questDisplay = completedQuest(quest);
    }
    else {
        //if not completed, link to a quest 
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay);
}