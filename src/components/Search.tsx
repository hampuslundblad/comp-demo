import { FC, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface SearchProps {
  id: string;
  label: string;
  onSearch: (value: string) => void;
}

const Search: FC<SearchProps> = ({ id, label, onSearch }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showError, setShowError] = useState(false);

  const handleClick = () => {
    if (!inputRef.current?.value) {
      setShowError(true);
    } else {
      onSearch(inputRef.current?.value);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 w-96">
        <Label htmlFor={id}> {label} </Label>
        <div className="flex gap-2">
          <Input ref={inputRef} id={id} />
          <Button onClick={handleClick}>Search</Button>
        </div>
        {showError && <Label> This field cannot be empty</Label>}
      </div>
    </>
  );
};

export default Search;
