
            const title = "Bem vindo!";
            const text = `Este site conecta você ao abrigo, facilitando adoções e doações . 
            Conheça os animais, contribua e faça parte dessa causa!`;
        
            const titleElement = document.getElementById("typewriter-title");
            const textElement = document.getElementById("typewriter-text");
        
            let i = 0;
            let j = 0;
        
            function typeTitle() {
              if (i < title.length) {
                titleElement.innerHTML += title.charAt(i);
                i++;
                setTimeout(typeTitle, 100);
              } else {
                setTimeout(typeText, 500);
              }
            }
        
            function typeText() {
              if (j < text.length) {
                const char = text.charAt(j);
                if (char === '\n') {
                  textElement.innerHTML += "<br>";
                } else {
                  textElement.innerHTML += char;
                }
                j++;
                setTimeout(typeText, 20);
              }
            }
        
            function toggleMenu() {
              const navLinks = document.getElementById('navLinks');
              navLinks.classList.toggle('active');
            }
        
            window.onload = typeTitle;
          

