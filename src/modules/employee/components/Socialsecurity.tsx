import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputCheckBox from "../../../components/input/InputCheckBox";
import InputDate from "../../../components/input/InputDate";
import { InputText } from "../../../components/input/InputText";
import { SocialsecurityForm } from "../../../types/employeeTypes";
import { EmployeeContext } from "../Employee";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";


const Afp: SelectOptions[] = [
  {
    value: "14045",
    label: "Drummond CO",
  },
  {
    value: "1401",
    label: "Drummond LTD",
  },
];

const Eps: SelectOptions[] = [
  {
    value: "14045",
    label: "Drummond CO",
  },
  {
    value: "1401",
    label: "Drummond LTD",
  },
];

const Arp: SelectOptions[] = [
  {
    value: "14045",
    label: "Drummond CO",
  },
  {
    value: "1401",
    label: "Drummond LTD",
  },
];

const Cesantias: SelectOptions[] = [
  {
    value: "14045",
    label: "Drummond CO",
  },
  {
    value: "1401",
    label: "Drummond LTD",
  },
];

const Socialsecurity = () => {
  const employeeContext = useContext(EmployeeContext);
  const { onBack, updateSocialsecurityForm } = employeeContext;
 
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SocialsecurityForm>();

  const handleData = (data: SocialsecurityForm) => {
    updateSocialsecurityForm(data);
  }; 

  return (
    <div className="flex flex-col bg-white shadow px-10 py-1 rounded">  

    <span className="text-gray-500 font-semibold px-3 py-2 font-montserrat text-lg text-center">
      Seguridad social
    </span>
    <div className="h-5"></div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
  
    <InputSelect
        control={control}
        name="Eps"
        label="EPS"
        defaultValue=""
        options={Eps}
        errorMessage={errors.Eps?.message}
      />
          <InputSelect
        control={control}
        name="Afp"
        label="AFP"
        defaultValue=""
        options={Afp}
        errorMessage={errors.Afp?.message}
      />
          <InputSelect
        control={control}
        name="Arp"
        label="ARL"
        defaultValue=""
        options={Arp}
        errorMessage={errors.Arp?.message}
      />
          <InputSelect
        control={control}
        name="Cesantias"
        label="Cesantias"
        defaultValue=""
        options={Cesantias}
        errorMessage={errors.Cesantias?.message}
      />
  

      </div>
  
      <div className="h-5"></div>
      <div className="grid grid-cols-2">
      <ButtonOutline onPress={onBack} text="Atrás" />
      <ButtonPrimary onPress={handleSubmit(handleData)} text="Siguiente" />
    </div>
  </div>
  )
}

export default Socialsecurity
