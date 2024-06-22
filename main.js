document.addEventListener('mousemove', function(e) {
  const afterglow = document.querySelector('.afterglow');
  afterglow.style.left = `${e.pageX - 10}px`;  // Adjust for center alignment
  afterglow.style.top = `${e.pageY - 10}px`;   // Adjust for center alignment
  afterglow.style.opacity = 1;
  afterglow.style.transform = `translate(-50%, -50%) scale(1)`;
});

document.addEventListener('mouseout', function() {
  const afterglow = document.querySelector('.afterglow');
  afterglow.style.opacity = 0;
});
