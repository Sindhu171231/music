document.addEventListener('DOMContentLoaded', function() {
    const teluguImages = document.querySelectorAll('.telugu img');
    const hindiImages = document.querySelectorAll('.hindi img');
    const tamilImages = document.querySelectorAll('.tamil img');

    let teluguIndex = 0;
    let hindiIndex = 0;
    let tamilIndex = 0;

    function cycleImages(images, index) {
        images.forEach((img, i) => {
            img.classList.remove('active', 'previous', 'next');
            if (i === index) {
                img.classList.add('active');
            } else if (i === (index + 1) % images.length) {
                img.classList.add('next');
            } else if (i === (index - 1 + images.length) % images.length) {
                img.classList.add('previous');
            }
        });
    }

    function startCycle(images, index, interval) {
        cycleImages(images, index);
        setInterval(() => {
            index = (index + 1) % images.length;
            cycleImages(images, index);
        }, interval);
    }

    startCycle(teluguImages, teluguIndex, 3000);
    startCycle(hindiImages, hindiIndex, 3000);
    startCycle(tamilImages, tamilIndex, 3000);
});
