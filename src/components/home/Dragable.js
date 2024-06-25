import React from 'react';
import { Draggable } from 'react-draggable';

const EdgeDraggable = ({ children, containerRef }) => {

  const handleDrag = (event, data) => {
    alert('start')
    const container = containerRef.current;
    const { left, top, right, bottom } = container.getBoundingClientRect();

    // Restrict movement to container edges (if provided)
    const newLeft = Math.min(Math.max(data.x, left), right - data.node.clientWidth);
    const newTop = Math.min(Math.max(data.y, top), bottom - data.node.clientHeight);

    // Restrict movement to screen edges (if no container)
    if (!container) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      newLeft = Math.min(Math.max(data.x, 0), windowWidth - data.node.clientWidth);
      newTop = Math.min(Math.max(data.y, 0), windowHeight - data.node.clientHeight);
    }

    data.deltaX = newLeft - data.x;
    data.deltaY = newTop - data.y;
  };

  return (
    <Draggable onDrag={handleDrag} nodeRef={containerRef}>
      {children}
    </Draggable>
  );
};

export default EdgeDraggable;
