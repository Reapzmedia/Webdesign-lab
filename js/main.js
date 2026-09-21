/**
 * Main Application Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLiveServerStatus();
  initCounterWidget();
  initPaletteCopy();
});

/**
 * Theme Toggle Functionality (Dark / Light)
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const moonIcon = document.getElementById('moonIcon');
  const sunIcon = document.getElementById('sunIcon');
  if (!moonIcon || !sunIcon) return;

  if (theme === 'light') {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  } else {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  }
}

/**
 * Live Server Detection & Status Indicator
 */
function initLiveServerStatus() {
  const statusPill = document.getElementById('liveServerStatus');
  const statusText = document.getElementById('statusText');
  if (!statusPill || !statusText) return;

  // Live Server injects its WebSocket script or runs on port 5500 / 127.0.0.1
  const isLiveServer = window.location.port === '5500' || 
                       window.location.hostname === '127.0.0.1' || 
                       window.location.hostname === 'localhost';

  if (isLiveServer) {
    statusText.textContent = 'Live Server Active';
    statusPill.style.background = 'rgba(16, 185, 129, 0.15)';
    statusPill.style.borderColor = 'rgba(16, 185, 129, 0.4)';
    statusPill.style.color = '#10b981';
  } else {
    statusText.textContent = 'Ready for Live Server';
    statusPill.style.background = 'rgba(99, 102, 241, 0.15)';
    statusPill.style.borderColor = 'rgba(99, 102, 241, 0.4)';
    statusPill.style.color = '#818cf8';
  }
}

/**
 * Interactive Counter Demo Widget
 */
function initCounterWidget() {
  const counterVal = document.getElementById('counterValue');
  const btnDecrement = document.getElementById('btnDecrement');
  const btnIncrement = document.getElementById('btnIncrement');
  const btnReset = document.getElementById('btnReset');

  if (!counterVal) return;
  let count = 0;

  const updateDisplay = () => {
    counterVal.textContent = count;
    counterVal.style.transform = 'scale(1.2)';
    setTimeout(() => {
      counterVal.style.transform = 'scale(1)';
    }, 150);
  };

  btnIncrement?.addEventListener('click', () => {
    count++;
    updateDisplay();
  });

  btnDecrement?.addEventListener('click', () => {
    count--;
    updateDisplay();
  });

  btnReset?.addEventListener('click', () => {
    count = 0;
    updateDisplay();
  });
}

/**
 * Color Swatch Copy to Clipboard
 */
function initPaletteCopy() {
  const swatches = document.querySelectorAll('.swatch');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      const color = swatch.getAttribute('data-color');
      if (!color) return;

      navigator.clipboard.writeText(color).then(() => {
        showToast(`Copied ${color} to clipboard!`);
      }).catch(() => {
        showToast(`Color: ${color}`);
      });
    });
  });

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }
}
