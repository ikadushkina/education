function sum(a, b) {
  a = Numder(prompt("Введите а:", 5));
  b = Numder(prompt("Введите b:", 10));
  alert(a + b);
};

window.sum = sum;

export default sum;
