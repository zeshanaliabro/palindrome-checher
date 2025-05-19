function check(){
    let palindromewords= ["madam","mam","lebel","noon","level","refer","civic"];
    // let palindrome1 = [].split("").reverse("").join("");
   const palindromeList = document.getElementById("palindromeList").value;
  const palindrome =  document.getElementById("li")
  const reverseWord = palindromeList.split("").reverse("").join("");
  if(reverseWord === palindromeList){
    palindrome.innerHTML = "this is palindrome words ";
  }else{
    palindrome.innerHTML = "this is not palindrome words ";
  }
  
 

}
