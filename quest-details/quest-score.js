// create a function that calculates the user score based on choices selected 

function questScore(choice, questId, user) {
    user.magic += choice.magic; //add choice amount to user 
    user.might += choice.might; 
    user.completed[questId] = true; //set quest ID to completed 

}

export default questScore;