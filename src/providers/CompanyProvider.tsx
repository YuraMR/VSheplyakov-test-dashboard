import React, { createContext, useContext, useEffect, useState } from "react";
import companies from "../data/companies-lookup.json";
import { Company, ViewId } from "../utils/types/types";

interface CompanyProviderProps {
  children: React.ReactNode;
}

interface CompanyContextProps {
  selectedCompanies: Record<ViewId, string | null>;
  companies: Company[];
  setSelectedCompany: (id: ViewId, companyName: string) => void;
}

const CompanyContext = createContext<CompanyContextProps | null>(null);

export const CompanyProvider: React.FC<CompanyProviderProps> = ({
  children
}) => {
  const [selectedCompanies, setSelectedCompanies] = useState<
    Record<ViewId, string | null>
  >({
    a: null,
    b: null,
    c: null
  });

  const [companyData, setCompanyData] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      setCompanyData(companies);
    };
    fetchCompanies();
  }, []);

  const setSelectedCompany = (id: ViewId, companyName: string) => {
    setSelectedCompanies(prev => ({ ...prev, [id]: companyName }));
  };

  return (
    <CompanyContext.Provider
      value={{ selectedCompanies, companies: companyData, setSelectedCompany }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyContext = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompanyContext must be used within a CompanyProvider");
  }
  return context;
};
