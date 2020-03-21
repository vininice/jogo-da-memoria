// const phone = "99688-2826";

// const regex = /^[0-9]{4,5}-[0-9]{4}$/;

// console.log("validate phone:", regex.test(phone));

const email = "cleytoterceiro@outlook.com";
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

console.log("Email:", regex.test(email));
