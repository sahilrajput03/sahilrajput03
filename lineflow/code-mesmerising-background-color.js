// From chrome's developer's tool AI
// can you make the body element to have background to have color which is changing in in interesting manner to make it look mesmerising?
(() => {
    // Define the CSS for a smooth, multi-color animated gradient
    const css = `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .mesmerizing-background {
      margin: 0;
      height: 100vh;
      /* Using a 4-color gradient for a complex, fluid look */
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
      transition: all 0.5s ease;
    }
  `;

    // Inject the styles into the document head
    const styleSheet = document.createElement("style");
    styleSheet.textContent = css;
    document.head.appendChild(styleSheet);

    // Apply the mesmerizing class to the body
    document.body.classList.add('mesmerizing-background');

    // Optional: Continuous hue-rotate overlay for extra depth
    let hue = 0;
    const rotateHue = () => {
        hue = (hue + 0.5) % 360;
        document.body.style.filter = `hue-rotate(${hue}deg)`;
        requestAnimationFrame(rotateHue);
    };

    rotateHue();
})();