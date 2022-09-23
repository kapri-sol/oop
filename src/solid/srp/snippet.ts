type CoffeeType = '아메리카노' | '라떼';

class Coffee {
  type: CoffeeType;
  shot: number;
  water: number;
  milk: number;
}

class Employee {
  name: string;

  takeOrder(coffeType: CoffeeType) {
    console.log(`${coffeType} 주문을 받았습니다.`);
  }

  makeCoffee(coffeeType: CoffeeType): Coffee {
    const coffee = new Coffee();

    coffee.type = coffeeType;

    if (coffeeType === '아메리카노') {
      coffee.shot = 2;
      coffee.water = 5;
    } else if (coffeeType === '라떼') {
      coffee.shot = 2;
      coffee.milk = 5;
    }

    console.log(`${coffee.type}를 만들었습니다.`);
    return coffee;
  }

  serveCoffee(coffee: Coffee, customer: Customer) {
    console.log(`${coffee.type}를 서빙합니다.`);
    customer.takeCoffee(coffee);
  }
}

class Customer {
  name: string;
  coffee: Coffee;

  givOrder(coffeeType: CoffeeType): CoffeeType {
    console.log(`${coffeeType} 주문을 합니다.`);
    return coffeeType;
  }

  takeCoffee(coffee: Coffee) {
    this.coffee = coffee;
  }

  drinkCoffee() {
    if (!this.coffee) {
      throw new Error('커피가 없어서 마실수 없어요!');
    }

    console.log(`${this.coffee.type}를 마신다.`);
  }
}

export const open = () => {
  const steeve = new Employee();
  const james = new Employee();

  const anna = new Customer();

  const order = anna.givOrder('아메리카노');
  steeve.takeOrder(order);

  const coffee = steeve.makeCoffee(order);

  james.serveCoffee(coffee, anna);
  anna.drinkCoffee();
};
