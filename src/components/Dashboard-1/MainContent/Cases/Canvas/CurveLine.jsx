import React, { useRef, useEffect } from "react";

const CurveLine = ({
  width = 400,
  height = 270,
  style = { border: "1px solid #000000" },
  startPoint = [20, 20], // Start point for all curves
  curves = [], // Array of curve objects: { controlPoint1, controlPoint2, endPoint }
  strokeStyle = "#000", // Stroke color for the curves
  strokeWidth = 2, // Line width for the curves
  startPointColor = "blue", // Color for the circle at the start point
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

    // Draw multiple Bézier curves starting from the same start point
    curves.forEach(({ controlPoint1, controlPoint2, endPoint }) => {
      ctx.beginPath();
      ctx.moveTo(...startPoint);
      ctx.bezierCurveTo(...controlPoint1, ...controlPoint2, ...endPoint);
      ctx.strokeStyle = strokeStyle;
      ctx.stroke();

      // Draw a circle at the end point
      ctx.beginPath();
      ctx.arc(endPoint[0], endPoint[1], pointRadius, 0, Math.PI * 2);
      ctx.fillStyle = endPointColor;
      ctx.fill();
    });

    // Draw a circle at the start point (common for all curves)
    ctx.beginPath();
    ctx.arc(startPoint[0], startPoint[1], pointRadius, 0, Math.PI * 2);
    ctx.fillStyle = startPointColor;
    ctx.fill();
  }, [startPoint, curves, strokeStyle, strokeWidth, startPointColor, endPointColor, pointRadius]);

  return <canvas ref={canvasRef} width={width} height={height} style={style} />;
};

export default CurveLine;
