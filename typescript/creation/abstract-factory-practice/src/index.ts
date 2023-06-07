interface Beverage {}

class Coffee implements Beverage {}
class Tea implements Beverage {}

interface Machine {}

class CoffeeMachine implements Machine {}
class TeaMachine implements Machine {}

// Maker는
interface MakerFactory {
  createBeverage(): Beverage;
  createMachine(): Machine;
}

class CoffeeFactory implements MakerFactory {
  createBeverage(): Beverage {
    return new Coffee();
  }
  createMachine(): Machine {
    return new CoffeeMachine();
  }
}

class TeaFactory implements MakerFactory {
  createBeverage(): Beverage {
    return new Tea();
  }

  createMachine(): Machine {
    return new TeaMachine();
  }
}

class App {
  static run() {
    this.getBeverage(new CoffeeFactory());
    this.getBeverage(new TeaFactory());
  }

  static getBeverage(makerFactory: MakerFactory) {
    makerFactory.createBeverage();
    makerFactory.createMachine();
  }
}
