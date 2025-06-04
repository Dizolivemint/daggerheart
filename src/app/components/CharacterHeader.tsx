import React from "react";
import { FormState } from "../types";

type Props = {
  form: FormState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  renderChecks: (field: keyof FormState, count: number) => React.ReactNode;
};

export default function CharacterHeader({ form, handleChange, renderChecks }: Props) {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 items-end">
        <div>
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
          <label>Pronouns</label>
          <input name="pronouns" value={form.pronouns} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
          <label>Heritage</label>
          <input name="heritage" value={form.heritage} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
          <label>Subclass</label>
          <input name="subclass" value={form.subclass} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <label>Level</label>
          <input name="level" value={form.level} onChange={handleChange} className="border rounded px-2 py-1 w-16" />
        </div>
        <div className="flex gap-2 items-center">
          <label>Evasion</label>
          <input type="checkbox" name="evasion" checked={form.evasion} onChange={handleChange} className="w-4 h-4" />
        </div>
        <div className="flex gap-2 items-center">
          <label>Armor</label>
          {renderChecks("armor", 8)}
        </div>
      </div>
    </>
  );
} 