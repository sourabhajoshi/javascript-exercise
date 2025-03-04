/*
Examine the following code:

const birthday = '18.04.1982';

const age = someCode(birthday);
Here we have a constant birthday for the date, and also the age constant.

The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?
*/

let BIRTHDAY; //This is correct way, because Bday not change

let AGE; //This not correct way, it will keep on change every year. So Use const only to those variable which do not change