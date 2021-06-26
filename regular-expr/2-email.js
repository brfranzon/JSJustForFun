// Write a pattern that matches e-mail addresses.
var mailValid = function (arg) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(arg) ? true : false;
};
console.log(mailValid('brfranzon@gmail.com'));
