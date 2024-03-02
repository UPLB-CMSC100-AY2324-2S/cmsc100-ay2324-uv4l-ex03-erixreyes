function minCharac(pw1){
    const charMin = 8; // adjust here to change character length min
    return (pw1.length >= charMin);
}

function isNumber(letter){ // check if character is a number
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] == letter) { // utilizes type conversion
            return true;
        }
    }
    return false;
}

// apply !isNumber(letter), number characters are true for toLowerCase & toUpperCase methods
function isLower(letter){ 
    return (letter == letter.toLowerCase() && !isNumber(letter))
}

function isCapital(letter){
    return (letter == letter.toUpperCase() && !isNumber(letter))
}

function pwRequirement(pw1){
    var hasUpper = 0, hasLower = 0, hasNumber = 0; // default bool values
    for(let i = 0; i < pw1.length; i++){
        let letter = pw1[i]
        
        // If default values become true, no need to keep checking
        if(isCapital(letter) && hasUpper == 0){ hasUpper = 1; }
        if(isLower(letter) && hasLower == 0){ hasLower = 1; }
        if(isNumber(letter) && hasNumber == 0){ hasNumber = 1; }
    }

    if(hasUpper && hasLower && hasNumber){
        return true;
    }

    return false;
}

function validatePassword(pw1, pw2){
    if(pw1 === pw2  // equal strings (no need to use pw2 for other functions)
        && minCharac(pw1) // at least 8 characters
        && pwRequirement(pw1) ) // 1 number, 1 uppercase, 1 lowercase
        {
            return true;
        }

    return false;
}

function reverseString(pw1){
    let reversed = "";
    for(let i = pw1.length - 1; i >= 0; i--){ // account zero-indexing
        reversed = reversed + pw1[i]
    }

    return reversed;
}

function storePassword(name, pw1, pw2){
    var newpw = "";

    if(validatePassword(pw1, pw2)){ // if-else block for checking newpw
        newpw = reverseString(pw1);
    } else {
        newpw = pw1;
    }

    const user = {name:name, newpassword:newpw} // create object
    return user;
}

//var t = storePassword("John", "Pass123", "Pass12345")
//console.log(t)


//var p = validatePassword("hello1234", "hello1234")
//console.log(p)

//var x = reverseString("Hello1234")
//console.log(x)