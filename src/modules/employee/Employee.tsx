import { Step, StepLabel, Stepper } from "@material-ui/core";
import React, { createContext } from "react";
import StepperOptions from "../../types/StepperOptions";
import ContractualInformation from "./components/ContractualInformation";
import Demographicinformation from "./components/Demographicinformation";
import Socialsecurity from "./components/Socialsecurity";
import PersonalInformation from "./components/PersonalInformation";
import Success from "./components/Success";
import icono from "../../assets/img/icono.png";
import { Cancel } from "@mui/icons-material";
import colors from "../../styles/colors";
import {
  PersonalInformationForm,
  SocialsecurityForm,
  DemographicinformationForm,
  ContractualInformationForm,
  EmployeeForm,
  SiteForm,
} from "../../types/employeeTypes";
import { useHistory } from "react-router";

const steppers: StepperOptions[] = [
  {
    item: 0,
    label: "Datos Personales",
    completed: false,
    component: <PersonalInformation/>,
  },
  {
    item: 1,
    label: "Seguridad social",
    completed: false,
    component: <Socialsecurity />,
  },
  {
    item: 2,
    label: "Información demográfica",
    completed: false,
    component: <Demographicinformation/>,
  },
  {
    item: 3,
    label: "Información contractual",
    completed: false,
    component: <ContractualInformation />,
  },
];

interface EmployeeContextInterface {
  updatePersonalInformationForm: (data: PersonalInformationForm) => void;
  updateSocialsecurityForm: (data: SocialsecurityForm) => void;
  updateDemographicinformationForm: (data: DemographicinformationForm) => void;
  updateContractualInformationForm: (data: ContractualInformationForm) => void;
  updateSiteForm: (data: SiteForm) => void;
  onBack: () => void;
}

export const EmployeeContext =
  createContext<EmployeeContextInterface>({
    updatePersonalInformationForm: () => {},
    updateSocialsecurityForm: () => {},
    updateDemographicinformationForm: () => {},
    updateContractualInformationForm: () => {},
    updateSiteForm: () => {},
    onBack: () => {},
  });

const Employee = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [employeeForm, setemployeeForm] =
    React.useState<EmployeeForm>({} as EmployeeForm);
  const history = useHistory();

  const ShowCompoent = () => {
    switch (activeStep) {
      case 0:
        return steppers[0].component;
      case 1:
        return steppers[1].component;
      case 2:
        return steppers[2].component;
      case 3:
        return steppers[3].component;

      default:
        return <Success />;
    }
  };

  const onNext = () => setActiveStep((prevState) => prevState + 1);

  const onBack = () => setActiveStep((prevState) => prevState - 1);

  const updatePersonalInformationForm = (data: PersonalInformationForm) => {
    setemployeeForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

  const updateSocialsecurityForm = (data: SocialsecurityForm) => {
    setemployeeForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

 
  const updateDemographicinformationForm = (data: DemographicinformationForm) => {
    setemployeeForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

  const updateContractualInformationForm = (data: ContractualInformationForm) => {
    setemployeeForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };
 

  const updateSiteForm = (data: SiteForm) => {
    setemployeeForm((prevState) => ({ ...prevState, ...data }));
    onNext();
  };

  return (
    <EmployeeContext.Provider
      value={{
        updatePersonalInformationForm,
        updateSocialsecurityForm, 
        updateDemographicinformationForm,
        updateContractualInformationForm,
        updateSiteForm,
        onBack,
      }}
    >
      <div className="flex flex-col">
        <div className="bg-white py-5 px-20 flex flex-row justify-around items-center w-full">
          <img src={icono} alt="" className="h-12 w-12" />
          <Stepper activeStep={activeStep} alternativeLabel className="flex-1">
            {steppers.map((step, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step key={step.item} {...stepProps}>
                  <StepLabel {...labelProps}>
                    <span className="font-montserrat text-xs">
                      {step.label}
                    </span>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <button onClick={() => history.push('/home')}>
            <Cancel
              sx={{ color: colors.primary, fontWeight: "bold", fontSize: 40 }}
            />
          </button>
        </div>

        <div className="p-1 flex xl:grid items-center w-full flex-col text-xs">
          {ShowCompoent()}
        </div>
      </div>
    </EmployeeContext.Provider>
  );
};

export default Employee;
