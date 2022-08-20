function like(time) {
    setTimeout(() => {
        btn = document.querySelector('svg[aria-label="Beğen"][height="24"]');
        if(btn) {
            btn.parentElement.parentElement.click();
            like(50);
        } else like(250);
    }, time);
}
like(1000);