"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonSkiing,
  faPersonSnowboarding,
  faShieldAlt,
  faTree,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { label: "Tous", value: "ALL" },
  {
    label: "Skis",
    value: "SKI",
    icon: <FontAwesomeIcon icon={faPersonSkiing} />,
  },
  {
    label: "Snowboards",
    value: "SNOWBOARD",
    icon: <FontAwesomeIcon icon={faPersonSnowboarding} />,
  },
  {
    label: "Chaussures",
    value: "SHOES",
    icon: <FontAwesomeIcon icon={faShoePrints} />,
  },
  {
    label: "Casques",
    value: "HELMET",
    icon: <FontAwesomeIcon icon={faShieldAlt} />,
  },
  { label: "Bâtons", value: "POLES", icon: <FontAwesomeIcon icon={faTree} /> },
];

export function CategoryFilter({
  onChange,
  selectedCategory,
}: {
  onChange: (value?: string) => void;
  selectedCategory?: string;
}) {
  const [value, setValue] = useState("ALL");

  const handleChange = (val: string) => {
    setValue(val);
    onChange(val === "ALL" ? undefined : val);
  };

  return (
    <ToggleGroup
      type="single"
      size="sm"
      defaultValue="top"
      variant="outline"
      value={value}
      onValueChange={handleChange}
      className="flex flex-wrap gap-2"
    >
      {categories.map((cat) => (
        <ToggleGroupItem
          key={cat.value}
          value={cat.value}
          className="rounded-full px-4 py-2 data-[state=on]:bg-blue-500 data-[state=on]:text-white hover:bg-blue-400 hover:cursor-pointer"
        >
          {cat.icon && cat.icon} {cat.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
