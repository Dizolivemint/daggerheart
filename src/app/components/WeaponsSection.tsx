import React from "react";
import { FormState } from "../types";

type Props = {
  form: FormState;
  handleProficiency: (idx: number) => void;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
};

export default function WeaponsSection({ form, handleProficiency, setForm }: Props) {
  return (
    <fieldset className="border rounded p-2">
      <legend className="font-bold">Active Weapons (Proficiency)</legend>
      <div className="flex gap-2 items-center mb-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <button
            type="button"
            key={i}
            className={`w-6 h-6 border rounded-full ${form.proficiency > i ? "bg-black text-white" : ""}`}
            onClick={() => handleProficiency(i)}
            aria-label={`Proficiency ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Primary Weapon Name</label>
          <input name="primaryWeapon.name" value={form.primaryWeapon.name} onChange={e => setForm((f: FormState) => ({ ...f, primaryWeapon: { ...f.primaryWeapon, name: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
          <label>Trait & Range</label>
          <input name="primaryWeapon.trait" value={form.primaryWeapon.trait} onChange={e => setForm((f: FormState) => ({ ...f, primaryWeapon: { ...f.primaryWeapon, trait: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
          <label>Damage Dice & Type</label>
          <input name="primaryWeapon.damage" value={form.primaryWeapon.damage} onChange={e => setForm((f: FormState) => ({ ...f, primaryWeapon: { ...f.primaryWeapon, damage: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
          <label>Feature</label>
          <input name="primaryWeapon.feature" value={form.primaryWeapon.feature} onChange={e => setForm((f: FormState) => ({ ...f, primaryWeapon: { ...f.primaryWeapon, feature: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
          <label>Secondary Weapon Name</label>
          <input name="secondaryWeapon.name" value={form.secondaryWeapon.name} onChange={e => setForm((f: FormState) => ({ ...f, secondaryWeapon: { ...f.secondaryWeapon, name: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
          <label>Trait & Range</label>
          <input name="secondaryWeapon.trait" value={form.secondaryWeapon.trait} onChange={e => setForm((f: FormState) => ({ ...f, secondaryWeapon: { ...f.secondaryWeapon, trait: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
          <label>Damage Dice & Type</label>
          <input name="secondaryWeapon.damage" value={form.secondaryWeapon.damage} onChange={e => setForm((f: FormState) => ({ ...f, secondaryWeapon: { ...f.secondaryWeapon, damage: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
          <label>Feature</label>
          <input name="secondaryWeapon.feature" value={form.secondaryWeapon.feature} onChange={e => setForm((f: FormState) => ({ ...f, secondaryWeapon: { ...f.secondaryWeapon, feature: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
        </div>
      </div>
    </fieldset>
  );
} 