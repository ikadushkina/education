function isOdd(a) {
 if (a & 1) alert ("Нечетное");
  else alert ("Четное");
}

window.isOdd = isOdd;

export default isOdd;
