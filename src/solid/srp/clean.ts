type CoffeeType = '아메리카노' | '라떼';

class Coffee {
  constructor(readonly type: CoffeeType) {}
}

class Barista {
  order: CoffeeType;

  makeCoffee(): Coffee {
    const coffee = new Coffee(this.order);
    console.log(`${coffee.type}를 만들었습니다.`);
    return coffee;
  }
}

class Employee {
  order: CoffeeType;

  takeOrder(order: CoffeeType, barista: Barista) {
    this.order = order;
    barista.order = order;
    console.log(`${order} 주문을 받았습니다.`);
  }

  serveCoffee(coffee: Coffee, customer: Customer) {
    console.log(`${coffee.type}를 서빙합니다.`);
    customer.takeCoffee(coffee);
  }
}

class Customer {
  order: CoffeeType;
  coffee: Coffee;

  giveOrder(coffeeType: CoffeeType): CoffeeType {
    this.order = coffeeType;
    console.log(`${this.order} 주문을 합니다.`);
    return coffeeType;
  }

  takeCoffee(coffee: Coffee) {
    if (this.order !== coffee.type) {
      throw new Error(
        `${this.order}를 주문했는데 ${this.coffee.type}가 나왔어요`,
      );
    }
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
  // 출근
  const steeve = new Barista();
  const james = new Employee();

  // 손님 입장
  const customer = new Customer();

  // 주문
  const order = customer.giveOrder('아메리카노');
  james.takeOrder(order, steeve);

  // 커피 생성
  const coffee = steeve.makeCoffee();

  // 커피 서빙
  james.serveCoffee(coffee, customer);

  // 음료
  customer.drinkCoffee();
};
