const goblins = {
    id: 'goblins',
    title: 'Forest of Goblins',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Goblin_illustration_from_19th_century.jpg',
    description: 'You enter the forest, after wandering aimlessly, you stumble upon a group of goblins. You watch them prance and stir the mysterious contents of a bubbling cauldron, joyfully, you fall through the bushes, alarming and angering the goblins. They are not happy so see you, a quarrel ensues. Goblins are starting to circle in on you. What will you do?',

    choices: [{
        id: 'fight',
        description: 'Use your sword and fight the hordes off!',
        result:
            'You did what you knew best and used your sword, rendering your enemy helpless. Goblins scattered at the sight of your Might, abandoning their cauldron, gold, and various mystical artifacts. You took the gold and made a necklace out of the fingers of the goblins that failed to escape, kicking the cauldron over on your way out. Way to tell us how you really feel.',
            magic: 0,
            might: 10,
    }, {
        id: 'magic',
        description: 'Use their weird cauldron against them.',
        result: 'You pick up one of the little goblins and hold him above the bubbling liquid, treating to dip him in, god be your witness. Goblins offer you a trade for their buddy: gold or a mysterious elixer, that will give you powers beyond your belief. You agree and greedily chug the maroon liquid, feeling renewed. You bow to the goblins, and depart. They think you are awful and a bully, guess you gotta live with that.',
        magic: 10,
        might: 0, 
    }, {
        id: 'run',
        description: 'Run away, nobody got time for this.'
        result: 'You turn your back on the enemy and start running. Goblins shoot a poisoned dart at you, rendering you, well, dead. You died.',
        magic: -10,
        might: -10,
    }]
};
    const wizard = {
        id: 'wizard',
        title: 'The wizard lair',
        image: 'https://printsofjapan.files.wordpress.com/2018/08/rijksmuseum_st-_didymus_sadeler_after_maerten_de_vos_7c_rp-p-ob-60-255.jpg?w=584',
        description: 
            'As you carry on, you stumble upon a wizard, reciting stories to his pets, vile serpents, hideous amphibious critters of this world and the Netherworld. You feel contemplate if you should fight the wizard and destroy the familials, before they hurt unsuspecting children, or let him be in peace.',
        choises: [{
            id: 'fight'
            description:
            result: ''
        }]
    }

}




    