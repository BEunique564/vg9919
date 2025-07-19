document.addEventListener('DOMContentLoaded', function() {
      const collageImages = document.querySelectorAll('.collage-images img');
      collageImages.forEach(img => {
          img.addEventListener('click', () => {
              img.style.boxShadow = '0 0 20px rgba(255, 255, 255, 1)';
          });
      });
  
      // Function to play background audio
      const audio = new Audio('background-music.mp3');
      audio.play();
  });
  