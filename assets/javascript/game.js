//Define a new class Character with a constructer that makes the attack power, counterattack power, defense, force strength, and health points. Add a getter that randomly generates the result of a roll for attack, counterattack, or force attack.
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
    characters.luke = new Character("Luke", "<img src='assets/images/luke.png'>", 4, 4, 3, 4, 4, 14, 6, 130);
    characters.yoda = new Character("Yoda", "<img src='assets/images/yoda.png'>",2, 6, 1, 2, 6, 18, 10, 75);
    characters.vader = new Character("Darth Vader", "<img src='assets/images/vader.png'>", 5, 3, 2, 5, 3, 16, 7, 100);
    characters.obiwan = new Character("Obi Wan", "<img src='assets/images/obiwan.png'>", 3, 5, 2, 3, 5, 12, 8, 110);

    //Generate the default game state.
    function defaultGameState() {
        $("main").empty();
        $("main").attr("class", "game__player-selection");
        function add(location, elements) {
            for (let element of elements) {
                location.append(element);
            }
        }
        add($("main"),["<h4>Choose your fighter!</h4>", "<div class='l-container' id='roster'></div>"]);
        add($("#roster"), [characters.luke.image, characters.yoda.image, characters.vader.image, characters.obiwan.image])
    }

    defaultGameState();
    //1. Populate the roster

    //2. Add click method for player character selection

    //3. Rebuild site accordingly

    //4. Move into new combat setup function


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