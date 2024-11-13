import React from "react";
import { Company } from "../utils/types/types";

type CompanyWidgetProps = {
  selectedCompany: Company | null;
};

const formatKey = (key: string) => {
  return key
    .split("_")
    .map((word, index) =>
      index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join(" ");
};

const CompanyWidget: React.FC<CompanyWidgetProps> = ({ selectedCompany }) => {
  if (!selectedCompany) {
    return <div>Sorry, but Company not found</div>;
  }

  return (
    <div className="p-1 text-md bg-white h-full overflow-auto">
      <table className="table-auto w-full">
        <tbody>
          {Object.entries(selectedCompany).map(([key, value]) =>
            typeof value === "boolean" || !value ? null : (
              <tr key={key}>
                <td className="p-2 whitespace-nowrap align-text-top font-semibold">
                  {formatKey(key)}
                </td>
                <td className="p-2">{value}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyWidget;
