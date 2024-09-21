document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const imageInput = document.getElementById('imageInput');
    const imageFile = imageInput.files[0];
    const outputImage = document.getElementById('outputImage');

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            outputImage.src = e.target.result;
            outputImage.style.display = 'block';
        }
        reader.readAsDataURL(imageFile);
    } else {
        outputImage.style.display = 'none';
    }
});
