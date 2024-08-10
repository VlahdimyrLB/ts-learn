const menu = [
  { name: "Margarita Pizza", price: 8 },
  { name: "Peperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Spinach", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];
let id = 1;

const addNewPizza = (pizzaObj) => {
  menu.push(pizzaObj);
};

const placeOrder = (pizzaName) => {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name == pizzaName);
  cashInRegister += selectedPizza.price;
  const orderObj = orderQueue.push({
    orderId: id++,
    pizza: selectedPizza,
    status: "ordered",
  });

  return orderObj;
};

const completeOrder = (orderId) => {
  const order = orderQueue.find(
    (order) => order.id === orderId && order.status === "ordered"
  );

  order.status = "completed";

  return order;
};

addNewPizza({ name: "Meat Overload", price: 12 });
addNewPizza({ name: "BBQ", price: 12 });
addNewPizza({ name: "Spci Sausage", price: 11 });

placeOrder("BBQ");
completeOrder(1);

console.log("Menu", menu);
console.log("Cash In Register", cashInRegister);
console.log("Order Queue", orderQueue);
