const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;


    function drawCoordinateSystem(ctx: CanvasRenderingContext2D) {
        let notchLength = 10;
        let axisLength = 200;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(axisLength, 0);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, axisLength);

        for (let i = 0; i <= axisLength; i += notchLength) {
            ctx.moveTo(i, -5);
            ctx.lineTo(i, 5);

            ctx.moveTo(-5, i);
            ctx.lineTo(5, i);
        }
        ctx.stroke();
    }

    drawCoordinateSystem(ctx);

    function drawSquare(ctx: CanvasRenderingContext2D, color: string) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 50, 50);
        console.log(`Current transformation matrix (${color}):`, ctx.getTransform());
    }

    // Base
    ctx.save();
    ctx.fillStyle = 'black';
    drawSquare(ctx, 'black');
    ctx.restore();

    // Rotate
    ctx.save();
    ctx.rotate(Math.PI / 4 * -1);
    drawSquare(ctx, "orange");
    ctx.restore();

    // Scale
    ctx.save();
    ctx.scale(0.5, 0.5);
    drawSquare(ctx, "blue");
    ctx.restore();

    // Translate
    ctx.save();
    ctx.translate(100, 50);
    drawSquare(ctx, "green");
    ctx.restore();

    // Translate ==> Rotate
    ctx.save();
    ctx.translate(50, 100);
    ctx.rotate(Math.PI / 6);
    drawSquare(ctx, "red");
    ctx.restore();

    // Rotate ==> Translate
    ctx.save();
    ctx.rotate(Math.PI / 6);
    ctx.translate(50, 100);
    drawSquare(ctx, "purple");
    ctx.restore();

    // Rotate ==> Scale ==> Translate
    ctx.save();
    ctx.rotate(Math.PI / 6 * -1);
    ctx.scale(0.75, 0.75);
    ctx.translate(150, 150);
    drawSquare(ctx, "cyan");
    ctx.restore();

    // Transform
    ctx.save();
    ctx.transform(1.5, 0, 0, 1.5, 100, 120);
    drawSquare(ctx, "yellow");
    ctx.restore();