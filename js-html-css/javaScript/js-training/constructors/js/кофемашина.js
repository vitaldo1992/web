var CoffeeMachine = function(power) {
  this.timer;
  this.power=power;
  this.volume = 4000;
  this.BoiledWater = function() {
    console.log("The water is boiled");
  }
  this.TimeForBoil = function() {
    console.log(this.volume*60/this.power)
    return this.volume*60/this.power
  }
  this.runBoiling = function() {
    this.timer = setTimeout(this.BoiledWater,this.TimeForBoil())
  }
  this.stop = function() {
    console.log("Вы остановили кофемашину");
    clearTimeout(this.timer);
  }
}

var myCoffeeMachine = new CoffeeMachine(20);
myCoffeeMachine.runBoiling();
// myCoffeeMachine.stop();
