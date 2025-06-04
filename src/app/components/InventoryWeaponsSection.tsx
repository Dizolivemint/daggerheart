import React from "react";
import { FormState } from "../types";

type Props = {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
};

export default function InventoryWeaponsSection({ form, setForm }: Props) {
  return (
    <fieldset className="border rounded p-2">
      <legend className="font-bold">Inventory Weapons</legend>
      {form.inventoryWeapons.map((w, idx) => (
        <div key={idx} className="mb-2 border-b pb-2 last:border-b-0 last:pb-0">
          <div className="flex gap-2 items-center">
            <label>Primary</label>
            <input type="checkbox" checked={w.primary} onChange={() => setForm(f => ({ ...f, inventoryWeapons: f.inventoryWeapons.map((iw, i) => i === idx ? { ...iw, primary: !iw.primary } : iw) }))} className="w-4 h-4" />
            <label>Secondary</label>
            <input type="checkbox" checked={w.secondary} onChange={() => setForm(f => ({ ...f, inventoryWeapons: f.inventoryWeapons.map((iw, i) => i === idx ? { ...iw, secondary: !iw.secondary } : iw) }))} className="w-4 h-4" />
          </div>
          <label>Name</label>
          <input value={w.name} onChange={e => setForm(f => ({ ...f, inventoryWeapons: f.inventoryWeapons.map((iw, i) => i === idx ? { ...iw, name: e.target.value } : iw) }))} className="border rounded px-2 py-1 w-full" />
          <label>Trait & Range</label>
          <input value={w.trait} onChange={e => setForm(f => ({ ...f, inventoryWeapons: f.inventoryWeapons.map((iw, i) => i === idx ? { ...iw, trait: e.target.value } : iw) }))} className="border rounded px-2 py-1 w-full" />
          <label>Damage Dice & Type</label>
          <input value={w.damage} onChange={e => setForm(f => ({ ...f, inventoryWeapons: f.inventoryWeapons.map((iw, i) => i === idx ? { ...iw, damage: e.target.value } : iw) }))} className="border rounded px-2 py-1 w-full" />
          <label>Feature</label>
          <input value={w.feature} onChange={e => setForm(f => ({ ...f, inventoryWeapons: f.inventoryWeapons.map((iw, i) => i === idx ? { ...iw, feature: e.target.value } : iw) }))} className="border rounded px-2 py-1 w-full" />
        </div>
      ))}
    </fieldset>
  );
} 