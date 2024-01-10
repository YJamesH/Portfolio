function moveToFront(card) {
    // Remove 'active' class from all cards
    document.querySelectorAll('.card').forEach(function (card) {
      card.classList.remove('active');
    });
  
    // Add 'active' class to the clicked card
    card.classList.add('active');
  }