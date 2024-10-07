function resizeContainer() {
    const image = document.getElementById('scaledImage');
    const container = image.parentElement;

    // Get the computed transform scale value
    const transformMatrix = window.getComputedStyle(image).transform;
    const scale = transformMatrix === 'none' ? 1 : parseFloat(transformMatrix.split(',')[3]);

    // Calculate the scaled dimensions
    const width = image.offsetWidth * scale;
    const height = image.offsetHeight * scale;

    // Apply the calculated dimensions to the container
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;
}

// Resize on page load and on window resize
window.onload = resizeContainer;
window.onresize = resizeContainer;
