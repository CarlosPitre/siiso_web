import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputCheckBox from "../../../components/input/InputCheckBox";
import InputDate from "../../../components/input/InputDate";
import { InputText } from "../../../components/input/InputText";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";

import { DemographicinformationForm } from "../../../types/employeeTypes";
import { EmployeeContext } from "../Employee";



const departmentofbirth: SelectOptions[] = [
  {
    value: "Administrativos",
    label: "Administrativos",
  },
  {
    value: "Aseo y servicios básicos",
    label: "Aseo y servicios básicos",
  },
  {
    value: "Bacteriología",
    label: "Bacteriología",
  },
  {
    value: "Camilleros",
    label: "Camilleros",
  },
];

const municipalityofborn: SelectOptions[] = [
  {
    value: "Ninguno",
    label: "Ninguno",
  },
  {
    value: "Contacto con positivo",
    label: "Contacto con positivos",
  },
  {
    value: "Sospechoso con positivo",
    label: "Sospechoso con positivo",
  },
];


const homedepartment: SelectOptions[] = [
  {
    value: "Administrativos",
    label: "Administrativos",
  },
  {
    value: "Aseo y servicios básicos",
    label: "Aseo y servicios básicos",
  },
  {
    value: "Bacteriología",
    label: "Bacteriología",
  },
  {
    value: "Camilleros",
    label: "Camilleros",
  },
];

const residencemunicipality: SelectOptions[] = [
  {
    value: "Ninguno",
    label: "Ninguno",
  },
  {
    value: "Contacto con positivo",
    label: "Contacto con positivos",
  },
  {
    value: "Sospechoso con positivo",
    label: "Sospechoso con positivo",
  },
];

const Demographicinformation = () => {
  const employeeContext = useContext(EmployeeContext);
  const { onBack, updateDemographicinformationForm } = employeeContext;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DemographicinformationForm>();

  const handleData = (data: DemographicinformationForm) => {
    console.log(data);
    updateDemographicinformationForm(data);
  };

  return (
    <div className="flex flex-col bg-white shadow px-10 py-1 rounded">
    <span className="text-gray-500 font-semibold px-3 py-2 font-montserrat text-lg text-center">
        Información Demografica
      </span>
      <div className="h-5"></div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
          <InputSelect
            control={control}
            name="DptoNacido"
            label="Departamento de nacimiento"
            defaultValue=""
            options={departmentofbirth}
            errorMessage={errors?.DptoNacido?.message}
          />
          <InputSelect
            control={control}
            name="MunicipioNacido"
            label="Municipio de nacimiento"
            defaultValue=""
            options={municipalityofborn}
            errorMessage={errors?.MunicipioNacido?.message}
          />
   

          <InputSelect
            control={control}
            name="DptoResidencia"
            label="Departamento de residencia"
            defaultValue=""
            options={homedepartment}
            errorMessage={errors?.DptoResidencia?.message}
          />
          <InputSelect
            control={control}
            name="MunicipioResidencia"
            label="Municipio de residencia"
            defaultValue=""
            options={residencemunicipality}
            errorMessage={errors?.MunicipioResidencia?.message}
          />
  
       
          <InputText
            control={control}
            name="DireccionResidencia"
            label="Dirección de residencia"
            defaultValue=""
            errorMessage={errors?.DireccionResidencia?.message}
          />
     
      </div>
      <div className="h-5"></div>
      <div className="grid grid-cols-2">
        <ButtonOutline onPress={onBack} text="Atrás" />
        <ButtonPrimary onPress={handleSubmit(handleData)} text="Siguiente" />
      </div>
    </div>
  );
};

export default Demographicinformation;
