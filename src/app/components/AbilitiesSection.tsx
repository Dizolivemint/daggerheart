import React from "react";
import { FormState } from "../types";

type Props = {
  form: FormState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AbilitiesSection({ form, handleChange }: Props) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {[
        ["Agility", "agility"],
        ["Strength", "strength"],
        ["Finesse", "finesse"],
        ["Instinct", "instinct"],
        ["Presence", "presence"],
        ["Knowledge", "knowledge"],
      ].map(([label, name]) => (
        <div key={name as string}>
          <label>{label}</label>
          <input name={name as string} value={form[name as keyof FormState] as string} onChange={handleChange} className="border rounded px-2 py-1 w-16" />
        </div>
      ))}
    </div>
  );
} 