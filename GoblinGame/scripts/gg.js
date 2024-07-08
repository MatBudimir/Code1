"use strict";
const dialogueData = {
    "start": {
        "text": "You are a young goblin boi, and it is a wonderfully dreary day in your moist cavern. Somehow, rays of light manage to reach the dark depths in which you slumber, prompting you to wake up. However, you are tired from the previous night, one full of debauchery, and you wish to keep sleeping.",
        "choices": [{
                "text": "Wake Up.",
                "next": "awake_early"
            }, {
                "text": "Sleep in.",
                "next": "sleeping"
            }]
    },
    "awake_early": {
        "text": "Even though you'd much rather keep sleeping, you reluctantly get up. It takes a short while for you to fully gain your bearings, but once you do, you sigh exasperatedly at the chores you know await you.",
        "choices": [{
                "text": "Continue.",
                "next": "awake"
            }]
    },
    "sleeping": {
        "text": "Your splitting headache makes you toss and turn, but you don't awaken. The day steadily moves on. Soon, your cavern is bathed in light as the sun reaches its zenith in the cloudless sky. Still you rest, but deep in your subconcious you feel a sudden, urgent need to wake up.",
        "choices": [
            {
                "text": "Wake up!",
                "next": "awake_late"
            },
            {
                "text": "Sleep more.",
                "next": "death_sleep"
            }
        ]
    },
    "awake_late": {
        "text": "You awaken with a loud groan. You stretch your short body, a few cracks here and there making you moan in relief. As you briefly register what time of day it is, you let out a slightly panicked screech. You don't have enough time to fully complete all of your chores! Well, surely this won't have any consequences.",
        "choices": [
            {
                "text": "Continue.",
                "next": "awake"
            },
        ]
    },
    "awake": {
        "text": "You have a long day ahead of you. Looking around your damp cave you notice a few things you need take care of. Your stockpile of wood for the firepit is running out, you are out of herbs and spices for your kitchen, and you still need to fetch water for your morning bath. You also remember, that you need to set traps for those pesky adventurers once you are finished with your chores.",
        "choices": [
            {
                "text": "Gather firewood.",
                "next": "wood",
                "addItem": "Wood"
            },
            {
                "text": "Forage for herbs and spices.",
                "next": "herbs"
            },
            {
                "text": "Fetch some water.",
                "next": "water"
            },
            {
                "text": "Set a trap.",
                "next": "set_trap_day1"
            },
        ]
    },
    "wood": {
        "text": "You wander around the cave entrance, carefully picking up suitable logs and branches. In the distance you hear the faint rhythmic ringing of metal clanking together. You hurry back.",
        "choices": [{
                "text": "Continue.",
                "next": "awake"
            }]
    },
    "herbs": {
        "text": "You survey the forest for some herbs and gather a handful of weeds. You hear a chopping sound, in the shrubs behind you. You hurry back to your cave.",
        "choices": [{
                "text": "Continue.",
                "next": "awake"
            }]
    },
    "water": {
        "text": "You hurry to fetch some murky water from the small river nearby. With a bucket full of water you turn to go back home, when suddenly you hear the sound of people splashing through the river. You hurry back.",
        "choices": [{
                "text": "Continue.",
                "next": "awake"
            }]
    },
    "set_trap_day1": {
        "text": "The adventurers are aproaching and you only have time to set up one trap. You could set a fire at the entrance of the cave to deter them, you could dig a pit filled with pointy sticks, you could collapse one of the tunnels and rain down rocks on them, or you could get ready to hide and ambush them with your trusty sling.",
        "choices": [
            {
                "text": "Set fire to the cave.",
                "next": "fire"
            },
            {
                "text": "Dig a pit.",
                "next": "pit"
            },
            {
                "text": "Collapse the tunnel.",
                "next": "rockslide"
            },
            {
                "text": "Ambush the adventurers.",
                "next": "ambush_trap"
            },
        ]
    },
    "fire": {
        "text": "You set fire to the cave and your home start to fill with smoke. The adventurers turn around for now, but you are still stuck and the cave is quickly running out of air. You cough and cough, until you finally pass out.",
        "choices": [{
                "text": "Continue.",
                "next": "retry"
            }]
    },
    "pit": {
        "text": "You carefully hid the pit with some leaves and dirt. Anxiously you await the adventurers, but soon you hear them spring your trap, then screaming and shouting. The adventurers are stuck in your pit, for now. Do you try to kill them, or do you take the chance to run?",
        "choices": [{
                "text": "Sling rocks at them.",
                "next": "pit_fight"
            }, {
                "text": "Flee.",
                "next": "pit_flee"
            }]
    },
    "pit_fight": {
        "text": "You grab a rough stone and sling it at the fools, hitting one of them straight between the eyes. A critical hit! Inspired by your success you rain down a hail of stones at the trespassers. The succumb to their wounds before they could climb out of the pit. The spoils are yours.",
        "choices": [{
                "text": "Continue.",
                "next": "retry"
            }]
    },
    "pit_flee": {
        "text": "You run as fast as your small legs allow you to. You exit the cave and you don't look back as you disappear into the dark forest.",
        "choices": [{
                "text": "Continue.",
                "next": "retry"
            }]
    },
    "rockslide": {
        "text": "As you hear the adventurers approach you break a load bearing pillar and the ceiling in front of you starts to collapse. An avalanche of rocks and stone bury the adventurers. Digging up their bodies for loot will take a while, but you are looking forward to it.",
        "choices": [{
                "text": "Continue.",
                "next": "retry"
            }]
    },
    "ambush": {
        "text": "You are one with the surrounding. Invisibile to the naked eye. The adventurers walk past you. You grab a rough stone and sling it at one of the fools. The stone glances off the armor of the knight. Your ambush fails. You try to run, but a knife hits you in the back. You die.",
        "choices": [{
                "text": "Continue.",
                "next": "retry"
            }]
    },
    "death_sleep": {
        "text": "Loud, echoing footsteps ring out through the main chamber, and you drowsily blink open your eyes. You're barely awake when you catch sight of a looming figure, looking down on you. Your mind tries to supply your body with a sense of urgency, but you're still far too groggy to register the danger you're in. The intruder, on the other hand, upon finding your prone, vulnerable body, makes a noise of confusion. He is perplexed at your carelessness, but without much thought pulls out his dagger. He walks up to you, looks down into your fatigued face, and your slowly opening eyes. With one swift movement, he effortlessly swipes his dagger across your bare throat. Blood wells up along the cut, gushing forth like a red water fountain. As you choke on your own blood, your last thought before succumbing to the fatal wound is how you should have just woken up earlier.",
        "choices": [{
                "text": "Continue.",
                "next": "retry"
            }]
    },
    "retry": {
        "text": "Do you want to try again?",
        "choices": [
            {
                "text": "Yes.", "reload": true,
                "next": "start"
            },
            {
                "text": "No.",
                "next": "end"
            }
        ]
    },
    "end": {
        "text": "Thank you for playing.",
        "choices": [{
                "text": "Play again?", "reload": true,
                "next": "start"
            }]
    },
};
//Inventory
class Inventory {
    constructor() {
        this.items = [];
    }
    addItem(name) {
        this.items.push({ name });
    }
    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    }
    hasItem(name) {
        return this.items.some(item => item.name === name);
    }
}
// Game Engine
class GoblinQuest {
    constructor(dialogueData) {
        this.dialogueData = dialogueData;
        this.currentScene = "start";
        this.inventory = new Inventory();
        this.health = 3;
        this.maxHealth = 3;
        this.renderScene();
        this.updateHealthDisplay();
    }
    renderScene() {
        const scene = this.dialogueData[this.currentScene];
        const textContainer = document.getElementById("text");
        const choicesContainer = document.getElementById("choices");
        if (textContainer) {
            textContainer.innerHTML = `<p>${scene.text}</p>`;
        }
        if (choicesContainer) {
            choicesContainer.innerHTML = "";
            scene.choices.forEach(choice => {
                const button = document.createElement("button");
                button.className = "choice";
                button.innerText = choice.text;
                button.addEventListener("click", () => this.handleChoice(choice));
                choicesContainer.appendChild(button);
            });
        }
    }
    handleChoice(choice) {
        // HandleInventory
        if (choice.addItem) {
            this.inventory.addItem(choice.addItem);
        }
        if (choice.removeItem) {
            this.inventory.removeItem(choice.removeItem);
        }
        // Handle health changes
        if (choice.addHealth) {
            this.health = Math.min(this.health + choice.addHealth, this.maxHealth);
        }
        if (choice.removeHealth) {
            this.health = Math.max(this.health - choice.removeHealth, 0);
        }
        this.updateHealthDisplay();
        // Restart Game
        if (choice.reload) {
            location.reload();
            return;
        }
        // Remove Choice
        const scene = this.dialogueData[this.currentScene];
        scene.choices = scene.choices.filter(c => c !== choice);
        // Choose Scene
        if (choice.requiredItem && this.inventory.hasItem(choice.requiredItem)) {
            this.currentScene = choice.alternateNext;
        }
        else {
            this.currentScene = choice.next;
        }
        this.renderScene();
    }
    updateHealthDisplay() {
        const healthContainer = document.getElementById("health-container");
        if (healthContainer) {
            healthContainer.innerHTML = `Health: ${this.health}/${this.maxHealth}`;
        }
    }
}
// Start Game
document.addEventListener("DOMContentLoaded", () => {
    new GoblinQuest(dialogueData);
});
