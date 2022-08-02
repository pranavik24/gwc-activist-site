var quoteList = ["Women make up more than two-thirds of the world's 796 million illiterate people.","Every additional year of primary school increases girls' eventual wages by 10-20 percent. It also encourages them to marry later and have fewer children, and leaves them less vulnerable to violence.", "While progress has been made in reducing the gender gap in urban primary school enrolment, data from 42 countries shows that rural girls are twice as likely as urban girls to be out of school.", "Rural women's deficits in education have long-term implications for family well-being and poverty reduction. Vast improvements have been seen in the mortality rates of children less than 5 years old since 1990, but rural rates are usually much higher than urban ones." ];

var myBtn = document.getElementById("myBtn");
var fact = document.getElementById("fact");
var count = 0; 

myBtn.addEventListener("click", displayQuote);

function displayQuote(){
  fact.innerHTML = quoteList[count];
  count++; 
  if(count == quoteList.length){
    count = 0; 
  }
  
}

// Connect the input button to the JS and define it as a variable
var btn = document.getElementById("btn");

/* Add an event listener to this variable that
"activates" a function called sendMessage when it "hears" a click */
btn.addEventListener("click",sendMessage);

// Connect the message text area (p tag) to the JS and define it as a variable
var message = document.getElementById("message");

// Define a function called sendMessage that does not have parameters
function sendMessage(){
  // Connect the input to the JS and define it as a variable using the .value attribute
var inputText = document.getElementById("inputText").values;

  // Use the .innerHTML property to change what the p tag will say 
var inputText = document.getElementById("inputText").value;
  message.innerHTML = `Hello there, ${inputText}! There's a lot you can do to help. Check out this link to find out more!`; 

}

  
