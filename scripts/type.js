// code from https://code-boxx.com/simple-pure-javascript-typewriter-effect/
var tw = {
    /* [THE SETTINGS] */
    container: "typeWrap", // ID of typewriter container
    text: [ // Blocks of text to show
      "Visual design.",
      "Lighting and video systems.",
      "Custom visual development.",
      "Tailored code and electronics solutions.",
    ], 
    delay: 70, // Delay in between each character
    blockDelay: 800, // Delay in between each block of text
  
    /* [THE MECHANICS] */
    timer: null, // Used to hold the timer
    pointer: 0, // Current text position
    block: 0, // Current block of text
    draw : function () {
    // tw.draw() : typewriter effect
  
      // Draw next character
      tw.pointer++;
      tw.container.innerHTML = tw.text[tw.block].substring(0, tw.pointer);
      if (tw.pointer < tw.text[tw.block].length) {
        tw.timer = setTimeout(tw.draw, tw.delay);
      }
  
      // End of block - Draw next block or cycle back to first?
      else {
        tw.block++;
        if (tw.text[tw.block] == undefined) { tw.block = 0; }
        tw.timer = setTimeout(tw.reset, tw.blockDelay);
      }
    },
  
    reset : function () {
    // tw.reset : Onto the next block of text
  
      tw.pointer = 0;
      tw.container.innerHTML = "";
      tw.timer = setTimeout(tw.draw, tw.delay);
    }
  };
  
  window.addEventListener("load", function(){
    tw.container = document.getElementById(tw.container);
    tw.draw();
  });
