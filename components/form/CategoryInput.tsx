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
import { categories } from "@/utils/category";

const CategoryInput = () => {
  const name = "category";

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label htmlFor={name}>{name}</Label>
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
    </div>
  );
};
export default CategoryInput;
