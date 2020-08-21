function isValidEmail(email) {
    let reg = /^([A-Za-z0-9_\-.])+@gmail.com$/;
    return reg.test(email);
}

window.isValidEmail = isValidEmail;

export default isValidEmail;
