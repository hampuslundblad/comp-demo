import { FC, useRef, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";

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
        <Label htmlFor={id}>{label}</Label>
        <div className="flex gap-2">
          <Input ref={inputRef} id={id} />
          <Button onClick={handleClick}>Search</Button>
        </div>
        {showError && <Label>This field cannot be empty</Label>}
      </div>
    </>
  );
};

export default Search;
