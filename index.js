function checkPalindrome(ltr) {
  let rtl = "";
  for (let i = ltr.length; i >= 0; i--) {
    rtl = rtl.concat(ltr.charAt(i));
  }
  if (ltr == rtl) {
    console.log('String is a palindrome');
    return true;
  } else {
    console.log('String is not a palindrome');
    return false;
  }
}

console.log(checkPalindrome("abba"));
