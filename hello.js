setInterval(() => {
    btn = document.querySelector('svg[aria-label="Beğen"][height="24"]');
    if (btn) btn.parentElement.parentElement.click();
}, 100);