import ArrowsExpandIcon from "@heroicons/react/outline/ArrowsExpandIcon";
import React from "react";

type ExpandButtonProps = {
  handleExpand: () => void;
};

const ExpandButton: React.FC<ExpandButtonProps> = ({ handleExpand }) => (
  <button onClick={handleExpand} title="Expand" className="rounded border">
    <ArrowsExpandIcon className="h-5 w-5" />
  </button>
);

export default ExpandButton;
