// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run, sopapos

const amIaPolindrome = (setence: string): string => {

    const setenceNoSpace: string = setence.toLowerCase().replace(/\s/g, "");

    const forward = setenceNoSpace;
    let backfoward: string = '';

    for (let i = setenceNoSpace.length - 1; i >= 0; i--) {
        backfoward = backfoward + setenceNoSpace[i];
    }

    if (forward === backfoward) return "Yes, i am a palindrome!"
    return "Nope!"
}

/** second solution */
const amIaPolindrome2 = (setence: string): string => {

    const setenceNoSpace: string = setence.toLowerCase().replace(/\s/g, "");
    const backward = setenceNoSpace.split('').reverse().join('');

    if (setenceNoSpace === backward) return 'Yes, i am a palindrome.'
    return "Nope!"
}

const setence: string = "9nurs8e8sRun9";
console.log(amIaPolindrome(setence));
console.log(amIaPolindrome2(setence));