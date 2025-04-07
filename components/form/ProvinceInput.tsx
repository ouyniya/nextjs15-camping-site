import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-dropdown-menu";
import { provinces } from "@/utils/province";

const ProvinceInput = () => {
  const name = "province";

  return (
    <div className="w-full">
      <Label htmlFor={name}>
        {name}
        <Select name={name}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose Province" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Province</SelectLabel>
              {provinces.map((el, index) => (
                <SelectItem key={index} value={el.PROVINCE_NAME}>
                  <span className="flex gap-2">
                    {el.PROVINCE_NAME}
                  </span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Label>
    </div>
  );
};
export default ProvinceInput;
