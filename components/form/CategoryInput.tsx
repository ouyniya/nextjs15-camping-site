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
import { categories } from "@/utils/category";

const CategoryInput = () => {
  const name = "category";

  return (
    <div className="w-full">
      <Label htmlFor={name}>
        {name}
        <Select name={name}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              {categories.map((el, index) => (
                <SelectItem key={index} value={el.label}>
                  <span className="flex gap-2">
                    <el.icon /> {el.label}
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
export default CategoryInput;
