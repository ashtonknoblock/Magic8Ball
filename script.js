const answers = [
 "It is certain",
 "It is decidedly so",
 "Without a doubt",
 "Yes definitely",
 "You may rely on it",
 "As I see it, yes",
 "Most likely",
 "Outlook good",
 "Yes",
 "Signs point to yes",
 "Reply hazy try again",
 "Ask again later",
 "Better not tell you now",
 "Cannot predict now",
 "Concentrate and ask again",
 "Dont count on it",
 "My reply is no",
 "My sources say no",
 "Outlook not so good",
 "Very doubtful"
]

var RandomAnswers = answers[Math.floor(Math.random()*answers.length)];

function random() {
  let div = document.getElementById("div");
  let p =document.createElement("p");
  let result = document.createTextNode(RandomAnswers);
  div.appendChild(p);
  p.appendChild(result);
}

 

