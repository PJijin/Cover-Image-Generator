import React from "react";
import { Move, Trash } from "react-feather";
import DraggableComponent from "../draggable/draggable.component";

const FrameImage = ({ image, deleteImage }) => {
  return (
    <DraggableComponent>
      <div className="movable">
        <p className="handle">
          <Move size="18" />
          <Trash onClick={() => deleteImage(image)} size="18" />
        </p>
        <img className="frame-image" src={image} dragabble="false" alt="" />
      </div>
    </DraggableComponent>
  );
};

export default FrameImage;
