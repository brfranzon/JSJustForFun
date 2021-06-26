// Write a pattern that matches e-mail addresses.



const mailValid = (arg: string): boolean => {
    const mailformat: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(arg) ? true : false;
}

console.log(mailValid('brfranzon@gmail.com'));