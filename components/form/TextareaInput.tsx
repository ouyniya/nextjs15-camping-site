import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";

const TextareaInput = ({
  name,
  labelText,
  defaultValue,
}: {
  name: string;
  labelText: string;
  defaultValue: string;
}) => {
  return (
    <div className="w-full">
      <Label htmlFor={name}>
        {labelText || name}
        <Textarea 
        id={name}
        name={name}
        defaultValue={defaultValue}
        required
        placeholder="Type your message here." />
      </Label>
    </div>
  );
};
export default TextareaInput;
