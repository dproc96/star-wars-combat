//Define a new class Character with a constructer that makes the attack power, counterattack power, defense, force strength, and health points. Add a getter that randomly generates the result of a roll for attack, counterattack, or force attack.
var playerCharacter = {};
var enemyCharacter = {};

$(document).ready(function() {
    class Character {
        constructor(characterName, image, attackPower, attackBonus, attackIncrement, counterAttackPower, counterAttackBonus, defense, forceStrength, healthPoints) {
            this.characterName = characterName;
            this.image = image;
            this.attackPower = attackPower;
            this.attackBonus = attackBonus;
            this.attackIncrement = attackIncrement;
            this.counterAttackPower = counterAttackPower;
            this.counterAttackBonus = counterAttackBonus;
            this.defense = defense;
            this.forceStrength = forceStrength;
            this.healthPoints = healthPoints;
        }

        get attack() {
            return this.calculateAttack();
        }

        calculateAttack() {
            return this.attackBonus + Math.ceil(Math.random() * 20);
        }

        get counterAttack() {
            return this.calculateCounterAttack();
        }

        calculateCounterAttack() {
            return this.counterAttackBonus + Math.ceil(Math.random() * 20); 
        }

        get forceContest() {
            return this.forceStrength + Math.ceil(Math.random() * 20);
        }
    }

    //Build four character objects of class Character and push them all into an array
    var characters = {};
    //Object Properties = (name, attackPower, attackBonus, counterAttackPower,counterAttackBonus, defense,forceStrength, healthPoints)
    characters.luke = new Character("Luke", "<img id='luke' src='assets/images/luke.png'>", 4, 4, 3, 4, 4, 14, 6, 130);
    characters.yoda = new Character("Yoda", "<img id='yoda' src='assets/images/yoda.png'>",2, 6, 1, 2, 6, 18, 10, 75);
    characters.vader = new Character("Darth Vader", "<img id='vader' src='assets/images/vader.png'>", 5, 3, 2, 5, 3, 16, 7, 100);
    characters.obiwan = new Character("Obi Wan", "<img id='obiwan' src='assets/images/obiwan.png'>", 3, 5, 2, 3, 5, 12, 8, 110);

    

    //Generate the default game state.
    function add(location, elements) {
        for (let element of elements) {
            location.append(element);
        }
    }

    function generateCharacterCard(name, isPlayerCharacter) {
        var character = characters[name]
        $("main").empty();
        add($("main"),[`<div id='card' class='character-card border__${name}'>`])
        add($("#card"), [`<div id='name' class='border__${name}'>`, `<div id='image' class='border__${name}'>`, `<div id='stats' class='border__${name}'>`])
        add($("#name"),[`<h4 class="vertical-center">${character.characterName}</h4>`])
        add($("#image"),[character.image])
        var stats = [];
        if (isPlayerCharacter) {
            stats.push(`<h4>Attack Bonus: ${character.attackBonus}`);
            stats.push(`<h4>Base Attack Power: ${character.attackPower}`);
            stats.push(`<h4>Attack Power Increment: ${character.attackIncrement}`)
        }
        else {
            stats.push(`<h4>Attack Bonus: ${character.counterAttackBonus}`);
            stats.push(`<h4>Attack Power: ${character.counterAttackPower}`);
        }
        stats.push(`<h4>Force Strength: ${character.forceStrength}`);
        stats.push(`<h4>Defense: ${character.defense}`);
        stats.push(`<h4>Health: ${character.healthPoints}`)
        stats.push(`<button id='select' class='border__${name}'>Select</button>`)
        stats.push(`<button id='return' class='border__${name}'>Return</button>`)
        add($("#stats"), stats);
        $("#return").click(function() {
            if (isPlayerCharacter) {
                defaultGameState();
            }
        })
        $("#select").click(function() {
            if(isPlayerCharacter) {
                for (var key in character) {
                    playerCharacter[key] = character[key]
                }
            }
        })
    }

    function defaultGameState() {
        $("main").empty();
        $("main").attr("class", "game__player-selection");
        add($("main"),["<h4>Choose your fighter!</h4>", "<div class='l-container' id='roster'></div>"]);
        add($("#roster"), [characters.luke.image, characters.yoda.image, characters.vader.image, characters.obiwan.image])
        $("img").click(function() {
            generateCharacterCard($(this).attr("id"), true);
        })
    }

    defaultGameState();


    //Combat setup function
    //1. Add click method for enemy selection

    //2. Rebuild site accordingly

    //3. Move into combat function

    //Combat function
    //1. Add buttons and click methods for lightsaber and force attacks

    //2. Settle results of attacks

    //3. Declare victory or defeat

    //4. Recurse this function if no victory, else move back to combat setup
});