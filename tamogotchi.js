const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,

    getStatus: function () {
        let meal = this.meal < 3 ? "Я голоден" : "Я не голоден";
        let energy = this.energy < 3 ? "Я хочу спать" : "Я не хочу спать";
        let mood = this.mood < 3 ? "Мне скучно" : "Мне весело";

        if (this.meal < 1 || this.energy < 1 || this.mood < 1) {
            console.log(`${this.name} умер :(`);
        }
        else {
            console.log(`Имя: ${this.name}, Еда: ${meal} (${this.meal}), Энергия: ${energy} (${this.energy}), Настроение: ${mood} (${this.mood})`);
        }
    },

    setName: function (name) {
        this.name = name;
    },

    eat: function () {
        if(this.meal < 5) {
            this.meal++;
        }
        this.mood--;
    },

    sleep: function () {
        if (this.energy < 5)  {
            this.energy++;
        }
        this.meal--;
    },

    game: function () {
        if(this.mood < 5) {
            this.mood++;
        }
        this.energy--;
    },

    warning: function () {
        if (this.meal === 1 || this.energy === 1 || this.mood === 1) {
            console.log(`${this.name} на грани вымирания, необходимо усилить жизненно-важные показатели`);
        }
    }
};

tamogotchi.warning();

tamogotchi.getStatus();