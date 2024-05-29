/*
Start
    "I can read you mind" start container
    go button
change state without refreshing the page
    "Pick a number" container
        next button 
        reset button
        "when you have a number click next"
    "Add digits to get a new number"
        next button
        reset button
        Example below next button
    "Subtract new number from original number"
        next button
        reset button
        Example below next button
    "Find your new number and corresponding symbols"
        symbols page
        reveal button
        reset button
    "This is your symbol" 
        reset button
END
*/

/* 
Do I want to use vanilla js or do I want to use React to finish this project?
This is where I started with psuedocode during mind reader 1.0:
     Functions I might want to use
    - window.onload function
        - 
    - addEventListener for the next and reset buttons
        - oncuechange?? fires a TextTrack has changed the currently displaying cues 
        - "click event"
    - a function to switch between "pages" without refreshing the webpage and using a button 
        -toggle (hide/show) an element
    - onclick listener

*/
//! This is Vanilla JS
window.onload = () => {
  console.log("page is loaded"); // log to the console that the page is loaded
  loadPage(1); // load the first "page"
};

// function to load the specific page based on the page number
function loadPage(pageNumber) {
  const mainDiv = document.getElementById("main"); // get the main div where the content will be added
  mainDiv.innerHTML = ""; // clear the main div

  // use switch statement to load the content based on the page number to load the correct content
  switch (pageNumber) {
    case 1:
      // load the initial page with the "go" button
      mainDiv.innerHTML = `
        <div>I can read your mind</div>
        <button type="button" id="go" class="btn btn-outline-primary position-absolute bottom-0 end-0" style="border-radius: 50%; width: 50px; height: 50px;">Go</button>
    `;
      // add event listener to the "go" button to load page 2
      document
        .getElementById("go")
        .addEventListener("click", () => loadPage(2));
      break;
    case 2:
      // Load the second page with instructions and "Next" button
      mainDiv.innerHTML = `
                <div style="padding-bottom: 100%;">Pick a number from 01 - 99</div>
                <button type="button" id="next1" class="btn btn-primary">Next</button>
                <div>when you have your number click next</div>
                <button type="button" id="reset1" class="btn reset btn-outline-primary position-absolute bottom-0 end-0" style="border-radius: 50%; width: 50px; height: 50px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                    </svg>
                </button>
            `;
      // add event listeners for "next" and "reset" buttons
      document
        .getElementById("next1")
        .addEventListener("click", () => loadPage(3));
      document
        .getElementById("reset1")
        .addEventListener("click", () => loadPage(1));
      break;
    case 3:
      // Load the third page with instructions and "Next" button
      mainDiv.innerHTML = `
                <div style="padding-bottom: 100%;">Add both digits together to get a new number</div>
                <button type="button" id="next2" class="btn btn-primary">Next</button>
                <div>Ex: 14 is 1 + 4 = 5</div>
                <div>click next to proceed</div>
                <button type="button" id="reset2" class="btn reset btn-outline-primary position-absolute bottom-0 end-0" style="border-radius: 50%; width: 50px; height: 50px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                    </svg>
                </button>
            `;
      // Add event listeners for "Next" and "Reset" buttons
      document
        .getElementById("next2")
        .addEventListener("click", () => loadPage(4));
      document
        .getElementById("reset2")
        .addEventListener("click", () => loadPage(1));
      break;
    case 4:
      // Load the fourth page with instructions and "Next" button
      mainDiv.innerHTML = `
                <div style="padding-bottom: 90%;">Subtract your new number from the original number</div>
                <button type="button" id="next3" class="btn btn-primary">Next</button>
                <div>Ex: 14 - 5 = 9</div>
                <div>click next to proceed</div>
                <button type="button" id="reset3" class="btn reset btn-outline-primary position-absolute bottom-0 end-0" style="border-radius: 50%; width: 50px; height: 50px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                    </svg>
                </button>
            `;
      // Add event listeners for "Next" and "Reset" buttons
      document
        .getElementById("next3")
        .addEventListener("click", () => loadPage(5));
      document
        .getElementById("reset3")
        .addEventListener("click", () => loadPage(1));
      break;
    case 5:
      // Load the fifth page with symbol array and "Reveal" button
      mainDiv.innerHTML = `
                <div id="arrayContainer" class="overflow-auto" style="height: 350px;"></div>
                <button type="button" id="reveal" class="btn btn-primary">Reveal</button>
                <div>Find your new number</div>
                <div>Note the symbol beside the number</div>
                <button type="button" id="reset4" class="btn reset btn-outline-primary bottom-0 end-0" style="border-radius: 50%; width: 50px; height: 50px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                    </svg>
                </button>
            `;
      // populate the array container ith numbers and corresponding symbols
      populateArrayContainer();
      // Add event listeners for "Reveal" and "Reset" buttons
      document
        .getElementById("reveal")
        .addEventListener("click", () => loadPage(6));
      document
        .getElementById("reset4")
        .addEventListener("click", () => loadPage(1));
      break;
    case 6:
      // Load the final page with the symbol reveal
      const finalSymbol = getFinalSymbol(); // Get the final symbol
      mainDiv.innerHTML = `
                <div style="padding-bottom: 90%;">Your symbol is:</div>
                <div style="font-size: 50px;">${finalSymbol}</div>
                <button type="button" id="reset5" class="btn reset btn-outline-primary bottom-0 end-0" style="border-radius: 50%; width: 50px; height: 50px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                    </svg>
                </button>
            `;
      // Add event listener for "Reset" button to go back to page 1
      document
        .getElementById("reset5")
        .addEventListener("click", () => loadPage(1));
      break;
  }
}

// function to populate the array container with numbers and corresponding symbols
function populateArrayContainer() {
    const arrayContainer = document.getElementById("arrayContainer");
    let arrayContent = "";

    // generate the symbols for numbers 0-99
    const symbols = shuffleSymbols(); // get shuffled symbols

    for (let i = 0; i < 100; i++) {
        let symbol;
        if (i % 9 === 0) {
            symbol = symbols[0]; // multiples of 9 get the first symbol
        } else {
            symbol = symbols[Math.floor(Math.random() * symbols.length)]
        }
        arrayContent += `<div>${i}: ${symbol}</div>` // append the symbol and the number to the array content
    }
    arrayContainer.innerHTML = arrayContent // set the array content to the array container
}

// function to shuffle the symbols 
function shuffleSymbols() {
    const symbols = ['🎼', '🎵', '🎶', '🎻', '🎷', '🎸', '🎹', '🎺', '🎤', '🎧'];
    for (let i = symbols.length - 1; i > 0; i--){
        const j = Math.floor(Math.random()  * (i + 1));
        [symbols[i], symbols[j] = symbols[j], symbols[i]];
    }
    return symbols;
}

// function to get the final symbol (always a multiple of 9)
function getFinalSymbol() {
    const symbols = shuffleSymbols();
    return symbols[0];
}
