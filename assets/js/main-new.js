  const rows = document.querySelectorAll('.divide-y-2 > .relative');
  const images = [
    document.getElementById('img-owolabi'),
    document.getElementById('img-adejuwon'),
    document.getElementById('img-adun'),
    document.getElementById('img-kurunmi'),
    document.getElementById('img-olaniyan'),
    document.getElementById('img-odoma')
  ];

  let activeIndex = 0;
  let intervalId = null;
  let isHovered = false;

  function setActive(index) {
    rows.forEach((row, i) => {
      const title = row.querySelector('.speaker-title');
      const heading = title?.children[0];
      const subtitle = title?.children[1];
      const role = row.querySelector('.speaker-role, .speker-role');

      if (i === index) {
        title.style.height = '110px';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(-2px)';
        subtitle.style.opacity = '1';
        if (role) role.style.opacity = '1';
        if (images[i]) images[i].style.opacity = '1';
      } else {
        title.style.height = '90px';
        heading.style.opacity = '0.2';
        heading.style.transform = 'translateY(13px)';
        subtitle.style.opacity = '0';
        if (role) role.style.opacity = '0';
        if (images[i]) images[i].style.opacity = '0';
      }
    });

    activeIndex = index;
  }

  function rotate() {
    if (!isHovered) {
      activeIndex = (activeIndex + 1) % rows.length;
      setActive(activeIndex);
    }
  }

  // Start auto-rotation
  intervalId = setInterval(rotate, 4000);
  setActive(activeIndex);

  // Add hover listeners
  rows.forEach((row, index) => {
    row.addEventListener('mouseenter', () => {
      isHovered = true;
      setActive(index);
    });

    row.addEventListener('mouseleave', () => {
      isHovered = false;
    });
  });

  
