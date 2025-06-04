import React from "react";
import { FormState } from "../types";

type Props = {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
};

export default function ArmorSection({ form, setForm }: Props) {
  return (
    <fieldset className="border rounded p-2">
      <legend className="font-bold">Active Armor</legend>
      <label>Name</label>
      <input name="activeArmor.name" value={form.activeArmor.name} onChange={e => setForm(f => ({ ...f, activeArmor: { ...f.activeArmor, name: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
      <label>Base Thresholds</label>
      <input name="activeArmor.baseThresholds" value={form.activeArmor.baseThresholds} onChange={e => setForm(f => ({ ...f, activeArmor: { ...f.activeArmor, baseThresholds: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
      <label>Base Score</label>
      <input name="activeArmor.baseScore" value={form.activeArmor.baseScore} onChange={e => setForm(f => ({ ...f, activeArmor: { ...f.activeArmor, baseScore: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
      <label>Feature</label>
      <input name="activeArmor.feature" value={form.activeArmor.feature} onChange={e => setForm(f => ({ ...f, activeArmor: { ...f.activeArmor, feature: e.target.value } }))} className="border rounded px-2 py-1 w-full" />
    </fieldset>
  );
} 