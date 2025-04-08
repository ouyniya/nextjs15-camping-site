import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
    <div className="flex flex-col gap-2 w-full">
      <Label htmlFor={name}>{labelText || name}</Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        required
        placeholder="Type your message here."
      />
    </div>
  );
};
export default TextareaInput;
