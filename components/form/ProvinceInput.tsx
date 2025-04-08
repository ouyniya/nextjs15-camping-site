import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { provinces } from "@/utils/province";

const ProvinceInput = () => {
  const name = "province";

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label htmlFor={name}>{name}</Label>
      <Select name={name}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose Province" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Province</SelectLabel>
            {provinces.map((el, index) => (
              <SelectItem key={index} value={el.PROVINCE_NAME}>
                <span className="flex gap-2">{el.PROVINCE_NAME}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProvinceInput;
