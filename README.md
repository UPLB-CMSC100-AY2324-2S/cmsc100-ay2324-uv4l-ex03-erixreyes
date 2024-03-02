Name: Reyes, Erix Laud B.
Section: UV-4L

# Exercise 03: JavaScript Basics part 1

Title: Simulate a password validation program in JavaScript
Type: Individual Assessment
Score: (15 points)

Challenges:

This program aims to test our ability to comprehend and effectively use JavaScript. To be frank, I had forgotten on how to use JavaScript, but this exercise made it easier to understand the fundamentals and the functions the language has to offer. I experienced a few minor mistakes that has to do with semantics such as forgetting about zero indexing leading to "undefined" output. As of now, I would still love to learn more about the language as it was easier to use than most languages. I tried using the forEach loop function but it didn't work quite as I'd want to, and resorted to an ordinary for-loop instead. I'm still confused on how some in-built methods/functions works, but this exercise is really helpful, and might be a stepping stone to becoming more skilled at JavaScript. 

Code Mechanics:

For the code mechanic, I tried applying the two to three nesting rule to avoid clumpy code that is hard to edit, and difficult to understand; this is solved through the use of multiple functions. For the first function (validatePassword) I created seperate functions to check each requirement such as the minimum character of eight (8), isNumber, isLower, isCapital, and pwRequirement to check all (is(...)) functions. Most of these functions utilizes the in-built method such as .length, .toUpperCase, .toLowerCase. The only unique part is the constant array of numbers to check if the char is a number, this function also uses "==" for data type conversion. In contrast, the first condition in the validatePassword if-statement uses "===" for a much stricter comparator. On the otherhand, the reverseString function uses a decrementing for-loop to access the string's last character, and concatenating it to the previous iteration of another string. storePassword, uses both of the aforementioned functions, the needed output can easily be done through an if-else statement. Commented below the code are some sample output, uncomment for easy testing.
