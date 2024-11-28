function firstNonRepeatedChar(str) {

	 const charCount = {};
    
    // Count the occurrences of each character
    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    }
    
    // Find and return the first non-repeated character
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }
    
    // If no non-repeated character is found, return an empty string or any other value you prefer
    return ''; 

	
 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
