import React, { useRef, useEffect } from "react";

const BezierCanvas = ({
  width = 500,
  height = 350,
  style = { border: "1px solid #000000" },
  startingPoints = [], // Array of starting points for curves
  curves = [], // Array of curve objects: { startIndex, controlPoint1, controlPoint2, endPoint }
  strokeWidth = 2, // Line width for the curves
  startPointColor = "blue", // Color for the circle at the start points
  endPointColor = "red", // Color for the circles at the end points
  pointRadius = 5, // Radius of the circles at the start and end points
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set stroke width for all curves
    ctx.lineWidth = strokeWidth;

    // Draw all starting points
    startingPoints.forEach((startPoint) => {
      ctx.beginPath();
      ctx.arc(startPoint[0], startPoint[1], pointRadius, 0, Math.PI * 2);
      ctx.fillStyle = startPointColor;
      ctx.fill();
    });

    // Draw multiple Bézier curves for each starting point
    curves.forEach(({ startIndex, strokeColor, controlPoint1, controlPoint2, endPoint }) => {
      const startPoint = startingPoints[startIndex]; // Get the starting point by index

      ctx.beginPath();
      ctx.moveTo(...startPoint);
      ctx.bezierCurveTo(...controlPoint1, ...controlPoint2, ...endPoint); 
      ctx.strokeStyle = strokeColor; 
      ctx.stroke();

      // Draw a circle at the end point
      ctx.beginPath();
      ctx.arc(endPoint[0], endPoint[1], pointRadius, 0, Math.PI * 2);
      ctx.fillStyle = endPointColor;
      ctx.fill();
    });
  }, [startingPoints, curves,  strokeWidth, startPointColor, endPointColor, pointRadius]);

  return <canvas ref={canvasRef} width={width} height={height} style={style} />;
};

export default BezierCanvas;
