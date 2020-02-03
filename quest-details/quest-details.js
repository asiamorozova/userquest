import userProfile from '../utilities/userProfile.js';
import { saveUser, getUser } from '../utilities/localstorage.js';
import quests from '../metadata.js';
import userChoice from './user-choice.js';
import findById from '../utilities/find-by-id.js';
import questScore from './quest-score.js';

userProfile();

//query parameters from the URL 
const searchParams = new URLSearchParams(window.location.search);
// quest id from URL 
const questId = searchParams.get('id');
// use findById to locate quest 
const quest = findById(quests, questId);

//if theres no quest 
if (!quest) {
    window.location = '../map';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

//populating the DOM

title.textContent = quest.title;
image.src = quest.image;
description.textContent = quest.description;

//setting up for each of the user quests 
for (let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];
    const choiceDOM = userChoice(choice);
    choices.appendChild(choiceDOM);

}
choiceForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //get user choice
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    //utilize the findById to find the choice 
    const choice = findById(quest.choices, choiceId);

    //get user out of local storage 
    const user = getUser();
    //generate score and manipulate the user state 
    questScore(choice, quest.id, user);
    //save user 
    saveUser(user);

    //update UI 
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
    //reload
    userProfile();

});
