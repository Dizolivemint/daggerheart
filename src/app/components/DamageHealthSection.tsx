import React from "react";
import { FormState } from "../types";

type Props = {
  form: FormState;
  renderChecks: (field: keyof FormState, count: number) => React.ReactNode;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
};

export default function DamageHealthSection({ form, renderChecks, setForm }: Props) {
  return (
    <fieldset className="border rounded p-2">
      <legend className="font-bold">Damage & Health</legend>
      <div className="flex gap-4 items-center">
        <div>
          <label>Minor Damage</label>
          <input
            type="number"
            name="minorDamage"
            value={form.minorDamage}
            onChange={e => setForm((f: FormState) => ({ ...f, minorDamage: Number(e.target.value) }))}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label>Major Damage</label>
          <input
            type="number"
            name="majorDamage"
            value={form.majorDamage}
            onChange={e => setForm((f: FormState) => ({ ...f, majorDamage: Number(e.target.value) }))}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label>Severe Damage</label>
          <input
            type="number"
            name="severeDamage"
            value={form.severeDamage}
            onChange={e => setForm((f: FormState) => ({ ...f, severeDamage: Number(e.target.value) }))}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label>HP</label>
          {renderChecks("hp", 8)}
        </div>
        <div>
          <label>Stress</label>
          {renderChecks("stress", 8)}
        </div>
      </div>
    </fieldset>
  );
} 