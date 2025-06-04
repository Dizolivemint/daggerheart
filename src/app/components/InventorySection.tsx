import React from "react";
import { FormState } from "../types";

type Props = {
  form: FormState;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function InventorySection({ form, handleChange }: Props) {
  return (
    <fieldset className="border rounded p-2">
      <legend className="font-bold">Inventory</legend>
      <textarea name="inventory" value={form.inventory} onChange={handleChange} className="border rounded px-2 py-1 w-full min-h-[60px]" />
    </fieldset>
  );
} 