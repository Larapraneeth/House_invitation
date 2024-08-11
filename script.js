document.addEventListener('DOMContentLoaded', () => {
    // Initial delay for card flip
    setTimeout(() => {
      const card = document.getElementById("flip-card-inner");
      card.style.transition = "transform 1s";
      card.style.transform = "rotateY(180deg)";
      
      // After the card flip, initiate the envelope opening
      setTimeout(openEnvelope, 1500);
    }, 1000);
    
    function openEnvelope() {
      const one = document.getElementById("one");
      const companyName = document.getElementById("companyName");
      
      // Open the envelope
      one.style.transition = "transform 2s";
      one.style.transform = "rotate(180deg)";
      companyName.style.display = "none";
      
      // Move the letter up after the envelope opens
      setTimeout(letterUp, 2000);
    }
    
    function letterUp() {
      const letter = document.getElementById("letter");
      const one = document.getElementById("one");
  
      one.style.zIndex = 1;
      letter.style.zIndex = 2;
      letter.style.transition = "top 1s";
  
      // Animate the letter moving up
      let topPosition = 0;
      const intervalId = setInterval(() => {
        if (topPosition >= 500) {
          clearInterval(intervalId);
          setTimeout(letterDown, 3000);
        } else {
          letter.style.top = -topPosition + "px";
          topPosition++;
        }
      }, 5);
    }
    
    function letterDown() {
      const letter = document.getElementById("letter");
      const card = document.getElementById("flip-card");
      
      letter.style.transition = "top 1s, transform 1s";
      letter.style.top = "-500px";
      letter.style.zIndex = 4;
  
      let angle = 0;
      let topPosition = -500;
      const intervalId = setInterval(() => {
        if (angle >= 100) {
          clearInterval(intervalId);
          setTimeout(() => {
            const popUp = document.getElementById("popUp");
            popUp.style.display = "block";
            popUp.style.zIndex = 5;
          }, 2000);
        } else {
          letter.style.top = topPosition + "px";
          letter.style.transform = "rotate(" + -angle / 18 + "deg)";
          card.style.transform = "rotate(" + angle / 18 + "deg)";
          
          topPosition += 5;
          angle++;
        }
      }, 10);
    }
  });
  