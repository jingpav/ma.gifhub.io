
        

const boxes = document.querySelectorAll('.box');
let startX = 0;
let startY = 0;
let currentBox = null;
let zIndex = 1;

boxes.forEach(box => {
    box.addEventListener('mouseover', (e) => {
        currentBox = e.target;
        const rect = currentBox.getBoundingClientRect();
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;
        currentBox.style.zIndex = zIndex++;
        currentBox.style.cursor = 'grabbing';

        function onMouseMove(e) {
            if (currentBox) {
                const x = e.clientX - startX;
                const y = e.clientY - startY;
                currentBox.style.left = `${x}px`;
                currentBox.style.top = `${y}px`;
            }
        }

        function onMouseUp() {
            if (currentBox) {
                currentBox.style.cursor = 'grab';
                currentBox = null;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});




