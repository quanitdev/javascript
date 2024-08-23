<script>
    document.addEventListener('DOMContentLoaded', function() {
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        const imageContainer = document.querySelector('.image-container');
        const images = document.querySelectorAll('.image-container span');
        let currentIndex = 0;

        function showSlide(index) {
            const totalImages = images.length;
            if (index >= totalImages) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalImages - 1;
            } else {
                currentIndex = index;
            }
            imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prevButton.addEventListener('click', function() {
            showSlide(currentIndex - 1);
        });

        nextButton.addEventListener('click', function() {
            showSlide(currentIndex + 1);
        });

        showSlide(currentIndex); // Initialize the slider
    });
</script>
