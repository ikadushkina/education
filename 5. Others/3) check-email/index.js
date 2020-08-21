function isValidEmail(email) {
  let reg = /^([a-z])+([\w\-.])+@([\w\-.])+\.([a-z]{2,3})$/i;
  return reg.test(email);
}

window.isValidEmail = isValidEmail;

export default isValidEmail;
