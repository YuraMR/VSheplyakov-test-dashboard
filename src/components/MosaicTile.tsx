import React from "react";
import {
  MosaicContext,
  MosaicPath,
  MosaicWindow
} from "react-mosaic-component";

import { ViewId } from "../utils/types/types";

import { useCompanyController } from "../controllers/CompanyController";

import CloseButton from "./CloseButton";
import CompanyDropdown from "./CompanyDropdown";
import CompanyWidget from "./CompanyWidget";
import ExpandButton from "./ExpandButton";

type MosaicTileProps = {
  id: ViewId;
  path: MosaicPath;
};

const MosaicTile: React.FC<MosaicTileProps> = ({ id, path }) => {
  const {
    companies,
    selectedCompanies,
    setSelectedCompany,
    getSelectedCompany
  } = useCompanyController();

  const selectedCompany = getSelectedCompany(id);
  const selectedCompanyName = selectedCompanies[id];

  return (
    <MosaicContext.Consumer>
      {mosaicContext => {
        const { expand, remove } = mosaicContext?.mosaicActions;

        return (
          <MosaicWindow<ViewId>
            path={path}
            title="Company Info"
            renderToolbar={() => (
              <div className="flex items-center justify-between gap-4 px-2 w-full">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">
                    Company Info
                  </span>
                  <CompanyDropdown
                    selectedCompanyName={selectedCompanyName}
                    companies={companies}
                    handleSelectCompany={value => setSelectedCompany(id, value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <ExpandButton handleExpand={() => expand(path, 80)} />
                  <CloseButton handleClick={() => remove(path)} />
                </div>
              </div>
            )}
          >
            {selectedCompany ? (
              <CompanyWidget selectedCompany={selectedCompany} />
            ) : (
              <div className="p-4 text-center items-center flex h-full">
                Please select a company from the dropdown
              </div>
            )}
          </MosaicWindow>
        );
      }}
    </MosaicContext.Consumer>
  );
};

export default MosaicTile;
