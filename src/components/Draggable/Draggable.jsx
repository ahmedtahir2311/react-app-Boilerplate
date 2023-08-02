import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// import style from "./style.module.scss";

export const DraggableComponent = ({
  listElements = [],
  isDragDisabled = false,
  droppableStyles = {},
  draggableStyles = {},
  droppableClassName = "",
  draggableClassName = "",
  droppableDraggingStyle = {},
  draggableDraggingStyle = {},
  separateDraggingElement = false,
  renderContent,
  onDragUpdate,
  onDragStart,
  onDragEnd: _onDragEnd = () => {},
  onBeforeCapture,
  onBeforeDragStart,
}) => {
  const [items, setItems] = useState(listElements || []);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    _onDragEnd && _onDragEnd(result);
    setItems(updatedItems);
  };

  const getListStyle = (isDraggingOver) => ({
    ...droppableStyles,

    ...(isDraggingOver && droppableDraggingStyle),
    // background:  ? 'lightblue' : 'lightgrey',
  });

  const getItemStyle = (isDragging, providerStyles) => ({
    ...draggableStyles,
    ...providerStyles,

    ...(isDragging && draggableDraggingStyle),
  });

  useEffect(() => {
    if (listElements?.length) {
      setItems(listElements);
    }
  }, [listElements]);

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
    >
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            className={droppableClassName}
          >
            {items.map((item, index, all) => (
              <Draggable
                key={index}
                draggableId={`${index}`}
                index={index}
                isDragDisabled={isDragDisabled} // Disable dragging if icon is being dragged
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...(!separateDraggingElement
                      ? provided.dragHandleProps
                      : {})}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                    className={`${draggableClassName}`}
                  >
                    {renderContent && renderContent(item, index, all, provided)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableComponent;
