
function Mother(){

}
Mother.prototype.say = "Hey! I'm the Mother.";
Mother.prototype.talk = function(){
    return this.say;
};

function Son(){

}

Son.prototype = Mother.prototype;

var siripala = new Son();
siripala.say = "I'm Siripala";
console.log(siripala.talk());
delete siripala.say;
console.log(siripala.talk());