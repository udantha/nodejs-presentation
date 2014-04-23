
function bowBow() {
    console.log(this);
};

var Balla = {};
Balla.bowBow = function() {
    console.log(this);
}

//execute
bowBow();
Balla.bowBow();
Balla.bowBow.call({});