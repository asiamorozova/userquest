//function to set parameters for user dying in the game 


function userDead(user) {
    return user.might <= -1000;
}

export default userDead;
