
//create a function that renders what quests were completed 

function completedQuest(quest) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');

    span.style.top = quest.map.top;
    span.style.right = quest.map.right;

    span.textContent = quest.title;
    return span;

}
export default completedQuest;

