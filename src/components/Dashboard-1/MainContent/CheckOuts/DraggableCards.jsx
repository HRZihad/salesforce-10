import React, { useState } from "react";
import Draggable from "react-draggable";
import Xarrow from "react-xarrows";

const DraggableElementsWithMultipleArrows = () => {
  const [positions, setPositions] = useState({
    element1: { x: 100, y: 100 },
    element2: { x: 300, y: 200 },
    element3: { x: 300, y: 350 },
    element4: { x: 300, y: 500 },
  });

  const handleDrag = (e, data, elementKey) => {
    setPositions((prevPositions) => ({
      ...prevPositions,
      [elementKey]: { x: data.x, y: data.y },
    }));
  };

  return (
    <div>
      {/* Draggable Source Element */}
      <Draggable
        defaultPosition={positions.element1}
        onDrag={(e, data) => handleDrag(e, data, "element1")}
      >
        <div id="element1" style={draggableStyle}>
          Source
        </div>
      </Draggable>

      {/* Draggable Target Elements */}
      <Draggable
        defaultPosition={positions.element2}
        onDrag={(e, data) => handleDrag(e, data, "element2")}
      >
        <div id="element2" style={draggableStyle}>
          Target 1
        </div>
      </Draggable>

      <Draggable
        defaultPosition={positions.element3}
        onDrag={(e, data) => handleDrag(e, data, "element3")}
      >
        <div id="element3" style={draggableStyle}>
          Target 2
        </div>
      </Draggable>

      <Draggable
        defaultPosition={positions.element4}
        onDrag={(e, data) => handleDrag(e, data, "element4")}
      >
        <div id="element4" style={draggableStyle}>
          Target 3
        </div>
      </Draggable>

      {/* Multiple Arrows connecting the source to different targets */}
      <Xarrow start="element1" end="element2" curveness={0.5} color="blue" />
      <Xarrow start="element1" end="element3" curveness={0.5} color="red" />
      <Xarrow start="element1" end="element4" curveness={0.5} color="green" />
    </div>
  );
};

const draggableStyle = {
  width: "100px",
  height: "50px",
  backgroundColor: "#f0f0f0",
  border: "1px solid black",
  textAlign: "center",
  padding: "10px",
  cursor: "move",
};

export default DraggableElementsWithMultipleArrows;
