// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

document.addEventListener("DOMContentLoaded", () => {
    newThing()
});

function newThing () {
    document.getElementById('text')
    .innerHTML = "This is really cool!"
}

//   document.addEventListener('DOMContentLoaded', (e) => { p.textcontent = "This is really cool!"
// })


// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#text').addEventListener('something', (e) => { p.textcontent = "This is really cool!"
// })
// })

// const something = document.querySelector('#text'); 
// something.addEventListener('DOMContentLoaded', () => )
// document.addEventListener("DOMContentLoaded",() => someNode.id = "text" 
// ("This is really cool!"))
  //Code your solution in index.js. First, set up a DOMContentLoaded event listener to detect when the HTML page has loaded and the document is ready to be manipulated. Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"

// Note: Using the innerText (Links to an external site.) property to modify DOM element content will not work for this lab. Use textContent (Links to an external site.) or innerHTML (Links to an external site.) instead.

//tk.textcontent = 'the thing'