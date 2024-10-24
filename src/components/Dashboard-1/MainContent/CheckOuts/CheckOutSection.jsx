import React from "react";
import CurveLine from "../Cases/Canvas/CurveLine";
import BezierCanvas from "../Cases/Canvas/BezierCanvas";
import Layout1 from "components/Dashboard-1/Layout1";
// import DraggableCards from "./DraggableCards";
import MultiArrowFromTwoPoints from "./MultiArrowFromTwoPoints";
import DndNewTaskCard from "./DndNewTaskCard";


const CheckOutSection = () => {
  return (
    <Layout1>
      <div>
        <MultiArrowFromTwoPoints></MultiArrowFromTwoPoints>
        <h1>Draggable</h1>
        {/* <div>
          <DraggableCards></DraggableCards>
        </div> */}
        
        <h1>Multiple Bézier Curves</h1>
        <DndNewTaskCard></DndNewTaskCard>

        {/* Multiple curves starting from the same point */}
        <CurveLine
          startPoint={[20, 150]} // All curves start from this point // Start point (50 pixels right, 50 pixels down)
          curves={[
            {
              controlPoint1: [100, 50], // First control point (100 pixels right, 150 pixels down)
              controlPoint2: [200, 20], // Second control point (200 pixels right, 100 pixels down)
              endPoint: [300, 50], // End point (250 pixels right, 150 pixels down)
            },
            {
              controlPoint1: [100, 140],
              controlPoint2: [180, 120],
              endPoint: [350, 130],
            },
            {
              controlPoint1: [150, 200],
              controlPoint2: [220, 250],
              endPoint: [300, 200],
            },
          ]}
          strokeStyle="orange"
          strokeWidth={2}
          startPointColor="green"
          endPointColor="red"
          pointRadius={6}
          style={{ border: "none" }}
        />

        <h1>Bézier Curves with Multiple Starting Points</h1>

        <BezierCanvas
          startingPoints={[
            [50, 150], // First starting point
            [50, 300], // First starting point
          ]}
          curves={[
            {
              startIndex: 0,
              controlPoint1: [100, 80], // First control point (100 pixels right, 150 pixels down)
              controlPoint2: [200, 50], // Second control point (200 pixels right, 100 pixels down)
              endPoint: [300, 100], // End point (250 pixels right, 150 pixels down)
              strokeColor: "orange",
            },
            {
              startIndex: 0,
              controlPoint1: [100, 150],
              controlPoint2: [200, 150],
              endPoint: [350, 150],
              strokeColor: "orange",
            },
            {
              startIndex: 0,
              controlPoint1: [100, 200],
              controlPoint2: [200, 250],
              endPoint: [300, 200],
              strokeColor: "orange",
            },
            {
              startIndex: 1, // Connect to second starting point
              controlPoint1: [180, 180],
              controlPoint2: [250, 250],
              endPoint: [300, 200],
              strokeColor: "blue",
            },
          ]}
          strokeWidth={2}
          startPointColor="green"
          endPointColor="red"
          pointRadius={6}
          style={{ border: "2px solid black" }}
        />
      </div>

    </Layout1>
  );
};

export default CheckOutSection;
