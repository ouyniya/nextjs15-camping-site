'use client';

import { useSearchParams } from 'next/navigation';
import { categories } from '@/utils/category';
import Link from 'next/link';

const CategoryList = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const searchTerm = search ? `&search=${search}` : '';

  return (
    <div className="z-50 rounded-2xl px-3">
      <div className="flex flex-row md:flex-col gap-4 justify-evenly">
        {categories.map((item) => {
          const isActive = item.label === category;

          return (
            <Link
              key={item.label}
              href={`/search?category=${item.label}${searchTerm}`}
            >
              <article
                className={`z-50 flex flex-col p-3 gap-2 items-center
                  hover:text-green-600 hover:-translate-y-0.5 transition-all duration-300 
                  ${isActive ? 'text-green-600' : ''}
                `}
              >
                <item.icon className="z-50" />
                <p className="z-50">{item.label}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
