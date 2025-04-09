import { categories } from "@/utils/category";
import Link from "next/link";

const CategoryList = ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <div className="mt-4">
      <div className="flex gap-2 justify-evenly">
        {categories.map((item) => {
          const isActive = item.label === category;
          console.log(category)
          return (
            <Link
              key={item.label}
              href={`/?category=${item.label}${searchTerm}`}
            >
              <article
                className={`flex flex-col p-3 gap-2 items-center
                    hover:text-green-600 hover:-translate-y-0.5 transition-all duration-300 
                ${isActive ? "text-green-600" : ""}
                `}
              >
                <item.icon />
                <p>{item.label}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryList;
