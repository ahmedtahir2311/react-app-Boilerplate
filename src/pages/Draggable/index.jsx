import { countries } from "constants/Countries";
import React from "react";

import DraggableComponent from "components/Draggable/Draggable";

//dragable will not work in restrick mood

const Index = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DraggableComponent
        listElements={countries}
        droppableClassName={"jackson"} // required for the container in which drag is necessary
        droppableStyles={{ backgroundColor: "purple" }}
        draggableDraggingStyle={{ backgroundColor: "red" }}
        separateDraggingElement={false}
        draggableClassName={"jackson"}
        draggableStyles={{
          margin: "10px",
          backgroundColor: "aqua",
          display: "flex",
          justifyContent: "center",
        }}
        isDragDisabled={false}
        // onDragEnd={onOrderUpdate}
        renderContent={(ele, index, all, provided) => {
          return <div>{ele.name}</div>;
        }}
      />
      {/* //See Component for more props  */}
    </div>
  );
};

export default Index;
