import { Mosaic } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";

import { ViewId } from "./utils/types/types";
import MosaicTile from "./components/MosaicTile";

const App = () => {
  return (
    <div className="h-screen">
      <Mosaic<ViewId>
        renderTile={(id, path) => <MosaicTile id={id} path={path} />}
        initialValue={{
          direction: "row",
          first: "a",
          second: {
            direction: "column",
            first: "b",
            second: "c",
            splitPercentage: 50
          }
        }}
      />
    </div>
  );
};

export default App;
