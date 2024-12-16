import { FormEvent, useState } from "react";
import css from "./SearchBar.module.css";

import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  takeQuery: (query: string) => void;
}

const SearchBar = ({ takeQuery }: SearchBarProps) => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim().length < 3) {
      toast.error("Please enter at least 3 characters to search!");
      return;
    }
    takeQuery(search);
    setSearch("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
