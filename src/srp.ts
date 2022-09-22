class Coffee {}

class Employee {
  makeCoffee() {
    return new Coffee();
  }
}

class Customer {
  drinkCoffee(coffee: Coffee) {}

  takeOutCoffee(coffee: Coffee) {}
}

const steeve = new Employee();

const coffee = steeve.makeCoffee();

const anna = new Customer();

anna.takeOutCoffee(coffee);
