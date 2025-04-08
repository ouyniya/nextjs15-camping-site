"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const SearchMenu = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const hdlSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    // url change
    replace(`/?${params.toString()}`);
  }, 500);

  useEffect(() => {
    //
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search")]);

  // console.log(searchParams.get("search"));

  return (
    <Input
      type="text"
      placeholder="Search"
      className="max-w-md"
      onChange={(e) => {
        setSearch(e.target.value);
        hdlSearch(e.target.value);
      }}
      value={search}
    />
  );
};
export default SearchMenu;
