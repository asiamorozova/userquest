function completedAllQuests(quests, user) {
    //go through all the quests to make sure they have been completed 
    for (let i = 0; i < quests.length; i++) {
        const quest = quests[i];
        //if any quests are incomplete return false 
        if (!user.completed[quest.id]) {
            return false;
        }
    }

    //if all the quests are completed 
    return true;

}

export default completedAllQuests;