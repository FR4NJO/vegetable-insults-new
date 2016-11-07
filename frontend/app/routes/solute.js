import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Route.extend({

    vegetables: ['Tomaten', 'Zwiebel', 'Kohl', 'Champignon', 'Paprika'],
    insults: ['hure', 'stricher', 'wixxer', 'fotze', 'penis'],

    createRandomVegInsult(array){
        let randomNumber = _.random(0, array.length -1);
        return array[randomNumber];
    },

    model(){
        return {
            vegetable: this.createRandomVegInsult(this.vegetables),
            insult: this.createRandomVegInsult(this.insults),
        };
    },

    actions: {
        createNewVegInsult(){
            let element = document.getElementById('veginsult');
            element.innerHTML = this.createRandomVegInsult(this.vegetables) + this.createRandomVegInsult(this.insults); 
        }
    }
});
