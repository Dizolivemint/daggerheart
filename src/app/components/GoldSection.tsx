import React from "react";
import { FormState } from "../types";

type Props = {
  form: FormState;
  renderChecks: (field: keyof FormState, count: number) => React.ReactNode;
};

export default function GoldSection({ form, renderChecks }: Props) {
  return (
    <div className="flex gap-4 items-center">
      <label>Gold</label>
      <span>Handfuls</span>
      {renderChecks("gold", 10)}
      <span>Bags</span>
      {renderChecks("goldBags", 10)}
      <span>Chest</span>
      {renderChecks("goldChest", 5)}
    </div>
  );
} 