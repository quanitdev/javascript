document.addEventListener("DOMContentLoaded", function() {
    const validateButton = document.getElementById('validateButton');
    const spinButton = document.getElementById('spinButton');
    const codeInput = document.getElementById('codeInput');
    const canvas = document.getElementById('spinWheelCanvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const segments = ["Giảm 20%", "Giảm 30%", "Tặng 1 áo", "May mắn lần sau", "Tặng mũ hiểm", "Tặng 1 quần"];
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#FFD133"];
    const validCode = "SPIN2024";
    let currentAngle = 0;

    function drawWheel() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const arcSize = (2 * Math.PI) / segments.length;
        segments.forEach((segment, index) => {
            const angle = currentAngle + index * arcSize;
            ctx.beginPath();
            ctx.arc(centerX, centerY, centerX, angle, angle + arcSize);
            ctx.lineTo(centerX, centerY);
            ctx.fillStyle = colors[index];
            ctx.fill();
            ctx.stroke();
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(angle + arcSize / 2);
            ctx.textAlign = "right";
            ctx.fillStyle = "white";
            ctx.font = "16px Arial";
            ctx.fillText(segment, centerX - 10, 10);
            ctx.restore();
        });
        drawPointer();
    }

    function drawPointer() {
        const pointerSize = 20;
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(centerX, 10);
        ctx.lineTo(centerX - pointerSize, 40);
        ctx.lineTo(centerX + pointerSize, 40);
        ctx.closePath();
        ctx.fill();
    }

    function spin() {
        const spinAngle = Math.random() * 10 + 20;
        let spinTime = 0;
        const spinTimeTotal = Math.random() * 3000 + 4000;

        function rotate() {
            spinTime += 30;
            if (spinTime >= spinTimeTotal) {
                const winnerIndex = Math.floor(((currentAngle % (2 * Math.PI)) / (2 * Math.PI)) * segments.length);
                alert("You won " + segments[winnerIndex]);
                return;
            }
            const spinProgress = spinTime / spinTimeTotal;
            const spinAngleIncrement = spinAngle * Math.sin(spinProgress * Math.PI / 2);
            currentAngle += (spinAngleIncrement * Math.PI / 180);
            drawWheel();
            requestAnimationFrame(rotate);
        }
        rotate();
    }

    validateButton.addEventListener('click', function() {
        const enteredCode = codeInput.value;
        if (enteredCode === validCode) {
            spinButton.disabled = false;
            alert("Code validated! You can now spin the wheel.");
        } else {
            alert("Invalid code. Please try again.");
        }
    });

    spinButton.addEventListener('click', spin);
    drawWheel();
});
