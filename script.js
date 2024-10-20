document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll('.bar');
    
    bars.forEach(bar => {
        const width = bar.style.width; // Get width from inline style
        bar.style.width = '0'; // Start at width of 0 for animation

        setTimeout(() => {
            bar.style.width = width; // Animate to actual width
        }, 100); // Delay to allow for animation effect
    });
});