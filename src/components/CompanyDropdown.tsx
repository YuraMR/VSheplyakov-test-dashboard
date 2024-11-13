import React from "react";

import { Company } from "../utils/types/types";

type CompanyDropdownProps = {
  companies: Company[];
  handleSelectCompany: (companyName: string) => void;
  selectedCompanyName: string | null;
};

const CompanyDropdown: React.FC<CompanyDropdownProps> = ({
  companies,
  handleSelectCompany,
  selectedCompanyName
}) => {
  return (
    <select
      value={selectedCompanyName ?? ""}
      onChange={e => handleSelectCompany(e.target.value)}
      className="p-1 border rounded-md w-60 focus:outline-none"
    >
      <option value="">Select a company</option>
      {companies.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default CompanyDropdown;
