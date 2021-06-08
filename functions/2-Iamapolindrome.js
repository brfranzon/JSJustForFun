// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run, sopapos
var amIaPolindrome = function (setence) {
    var setenceNoSpace = setence.toLowerCase().replace(/\s/g, "");
    var forward = setenceNoSpace;
    var backfoward = '';
    for (var i = setenceNoSpace.length - 1; i >= 0; i--) {
        backfoward = backfoward + setenceNoSpace[i];
    }
    if (forward === backfoward)
        return "Yes, i am a palindrome!";
    return "Nope!";
};
/** second solution */
var amIaPolindrome2 = function (setence) {
    var setenceNoSpace = setence.toLowerCase().replace(/\s/g, "");
    var backward = setenceNoSpace.split('').reverse().join('');
    if (setenceNoSpace === backward)
        return 'Yes, i am a palindrome.';
    return "Nope!";
};
var setence = "9nurs8e8rsRun9";
console.log(amIaPolindrome(setence));
console.log(amIaPolindrome2(setence));
