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
        result: 'You pick up one of the little goblins and hold him above the bubbling liquid, treating to dip him in, god be your witness. Goblins offer you a trade for their buddy: gold or a mysterious elixir, that will give you powers beyond your belief. You agree and greedily chug the maroon liquid, feeling renewed. You bow to the goblins, and depart. They think you are awful and a bully, guess you gotta live with that.',
        magic: 10,
        might: 0,
    }, {
        id: 'run',
        description: 'Run away, nobody got time for this.'
        result: 'You turn your back on the enemy and start running. Goblins shoot a poisoned dart at you, rendering you, well, dead. You died.',
        magic: -1000,
        might: -1000,
    }]
};
const wizard = {
    id: 'Wizard',
    title: 'The Wizard lair',
    image: 'https://printsofjapan.files.wordpress.com/2018/08/rijksmuseum_st-_didymus_sadeler_after_maerten_de_vos_7c_rp-p-ob-60-255.jpg?w=584',
    description:
        'As you carry on, you stumble upon a Wizard, reciting stories to his pets, vile serpents, hideous amphibious critters of this world and the Netherworld, and bubonic rats. You feel contemplate if you should fight the Wizard and destroy the familiars, before they hurt unsuspecting children, or let him be in peace.',
    choices: [{

        id: 'fight',
        description: 'Challenge the Wizard and his hideous pets.',
        result: 'You hurt the Wizard and he retreats into his chambers carrying as many of his pets he could grab away from your sword. You feel pretty tough.Somehow your mighty sword was able to withstand the treachery of magic and you feel tougher then steel. You find some interesting swords and armor in the Wizard\'s swamp and decide to try them on. Looks good.',
        magic: 0,
        might: 20,

        id: 'run',
        description: 'Steal the least hideous pet of your choosing and run',
        result: 'The fatty warted toad cries out for its master. Wizard sees you running and turns you into a cat. You cannot complete anymore quests, but the Wizard does not mind giving you some milk, and the story sounds nice, you decide to stay and listen',
        magic: -1000,
        might: - 1000,

        id: 'magic',
        description: 'Pet the four-headed dragon, why won\'t the Wizard notice you?',
        result: 'The Wizard notices you and is impressed by your kinship with his familiar. The dragon likes you too. Wizard offers to give you a crash course in magic and you agree. You are now in his bootcamp for 6 months, you will cary on your quests after you graduate.',
        magic: +50,
        might: 0,
    }]
}

const demon = {
    id: 'demon',
    title: 'Cave of the Demon',
    image: 'https://i.pinimg.com/originals/d6/97/70/d697709b00e22952fef54e0ae56d46ff.jpg',
    description:
        'You pass by a suspicious cave: putrid stench of sulphur is coming from the cave, which could only mean one thing- Demon has escaped hell and made this cave his new home. As you enter the cave to explore, the Demon spots you. What will you do?',
    choices: [{

        id: 'fight',
        description: 'This demon does not frighten you, sword time.',
        result: 'No better time to show demon who is boss, sword time.',
        'You use your trusted sword and attack. The battle rages on, but you persevere. Demon is no match for your well-seasoned sword. You fight bravely. At the new dawn, demon drags back to hell, defeated. You loot the cave. As you exit the cave, you are greeted by villagers, who prepare you a feast. They have been terrorized by this Demon and you have freed them. Rewards and celebrations ensue.',
        magic: 0,
        might: 30,

        id: 'run',
        description: 'Run away from this hell child, this is a fight for someone else',
        result: 'Demon already noticed you, so he calls out your name. You turn around and you have become a pillar of salt',
        magic: -1000,
        might: - 1000,

        id: 'magic',
        description: 'Charm him with a few magic tricks you know.',
        result: 'The Demon is amused at the naive tricks you decided to show him. He finds you comical, so he offers you a deal- to teach you some dark arts, in exchange for the stand-up comedy that is your magic. You agree. You will start your new job tomorrow.',
        magic: +50,
        might: 0,
    }]
};

const quests = [
    goblins,
    wizard,
    demon,
];

export default quests;





