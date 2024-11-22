document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => {
        // Remove 'active' class from all cards first
        document.querySelectorAll('.clickable-card').forEach(c => c.classList.remove('active'));
        
        // Add the 'active' class to the clicked card
        card.classList.add('active');

        // Remove the 'active' class after 1 second (1000 milliseconds)
        setTimeout(() => {
            card.classList.remove('active');
        }, 600);
    });
});

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
      // Remove 'active' class from all sidebar items
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      
      // Add 'active' class to the clicked item
      this.classList.add('active');
    });
  });
