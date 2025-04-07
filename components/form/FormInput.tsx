import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeHolder?: string;
};

const FormInput = (props: FormInputProps) => {
  const { name, type, label, defaultValue, placeHolder } = props;
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="firstName">{label}</Label>
        <Input
          name={name}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeHolder}
          className="placeholder:text-slate-400 placeholder:text-sm"
        />
      </div>
    </>
  );
};
export default FormInput;
