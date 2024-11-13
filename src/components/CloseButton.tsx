import React from "react";
import { XIcon } from "@heroicons/react/outline";

type CloseButtonProps = {
  handleClick: () => void;
};

const CloseButton: React.FC<CloseButtonProps> = ({ handleClick }) => (
  <button onClick={handleClick} title="Close" className="rounded border">
    <XIcon className="h-5 w-5" />
  </button>
);

export default CloseButton;
