"use client";

import { useActionState, useId } from "react";
import { useSearchParams } from "next/navigation";
import { sendEnquiry, type EnquiryState } from "@/app/contact/actions";

export type Option = { value: string; label: string; group?: string };

function Field({
  label,
  required,
  error,
  children,
}: {
  name?: string;
  label: string;
  required?: boolean;
  error?: string;
  children: (props: { id: string; "aria-invalid"?: boolean; "aria-describedby"?: string }) => React.ReactNode;
}) {
  const id = useId();
  const eid = `${id}-err`;
  return (
    <div>
      <label htmlFor={id} className="label flex justify-between text-muted">
        <span>
          {label}
          {required && <span className="text-accent"> *</span>}
        </span>
      </label>
      <div className="mt-1">{children({ id, ...(error ? { "aria-invalid": true, "aria-describedby": eid } : {}) })}</div>
      {error && (
        <p id={eid} className="mt-0.5 text-small text-accent">
          {error}
        </p>
      )}
    </div>
  );
}

const input =
  "w-full border border-line bg-panel px-1.5 py-1.5 text-body text-fg placeholder:text-muted/70 transition-colors duration-(--duration-fast) focus:border-accent focus:outline-none aria-[invalid=true]:border-accent";

export function EnquiryForm({ machines, families, coils }: { machines: Option[]; families: Option[]; coils: Option[] }) {
  const params = useSearchParams();
  const [state, action, pending] = useActionState<EnquiryState, FormData>(sendEnquiry, { status: "idle" });

  const pre = (() => {
    const m = machines.find((o) => o.value === params.get("machine"));
    if (m) return m.label;
    const f = families.find((o) => o.value === params.get("family"));
    return f?.label ?? "";
  })();
  const preCoil = coils.find((o) => o.value === params.get("coil"))?.label ?? "";
  const v = state.status === "invalid" ? state.values : undefined;
  const e = state.status === "invalid" ? state.errors : {};

  if (state.status === "sent") {
    return (
      <div role="status" className="border border-accent bg-panel p-3">
        <p className="label text-accent">Enquiry sent</p>
        <p className="display mt-2 text-display-m">Thank you.</p>
        <p className="mt-2 text-muted">Our team will reply to the email address you gave us.</p>
      </div>
    );
  }

  const interestOptions = [...families.map((f) => ({ ...f, group: "Machine family" })), ...machines];
  const groups = [...new Set(interestOptions.map((o) => o.group ?? ""))];

  return (
    <form action={action} noValidate className="grid gap-3 sm:grid-cols-2">
      {(state.status === "not-configured" || state.status === "error") && (
        <div role="alert" className="border border-accent bg-panel p-2 sm:col-span-2">
          <p className="font-medium">
            {state.status === "error" ? "We couldn’t send your enquiry just now." : "Online sending isn’t switched on yet."}
          </p>
          <p className="mt-1 text-small text-muted">Your details are ready in an email — one click to send it to our team.</p>
          <a href={state.mailto} className="label mt-2 inline-block bg-accent px-2 py-1 text-accent-fg">
            Open email with my enquiry →
          </a>
        </div>
      )}

      {/* honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field name="name" label="Name" required error={e.name}>
        {(p) => <input {...p} name="name" autoComplete="name" defaultValue={v?.name} className={input} />}
      </Field>
      <Field name="company" label="Company" required error={e.company}>
        {(p) => <input {...p} name="company" autoComplete="organization" defaultValue={v?.company} className={input} />}
      </Field>
      <Field name="email" label="Email" required error={e.email}>
        {(p) => <input {...p} name="email" type="email" autoComplete="email" defaultValue={v?.email} className={input} />}
      </Field>
      <Field name="phone" label="Phone">
        {(p) => <input {...p} name="phone" type="tel" autoComplete="tel" defaultValue={v?.phone} className={input} />}
      </Field>
      <Field name="country" label="Country" required error={e.country}>
        {(p) => <input {...p} name="country" autoComplete="country-name" defaultValue={v?.country} className={input} />}
      </Field>
      <Field name="interest" label="Machine of interest">
        {(p) => (
          <select {...p} name="interest" defaultValue={v?.interest ?? pre} className={input}>
            <option value="">Not sure yet — please advise</option>
            {groups.map((g) => (
              <optgroup key={g} label={g}>
                {interestOptions
                  .filter((o) => (o.group ?? "") === g)
                  .map((o) => (
                    <option key={`${g}-${o.value}`} value={o.label}>
                      {o.label}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        )}
      </Field>
      <Field name="coil" label="Coil to wind">
        {(p) => (
          <select {...p} name="coil" defaultValue={v?.coil ?? preCoil} className={input}>
            <option value="">—</option>
            {coils.map((o) => (
              <option key={o.value} value={o.label}>
                {o.label}
              </option>
            ))}
            <option value="Other / custom coil">Other / custom coil</option>
          </select>
        )}
      </Field>
      <Field name="output" label="Target output (e.g. coils per shift)">
        {(p) => <input {...p} name="output" defaultValue={v?.output} className={input} />}
      </Field>
      <div className="sm:col-span-2">
        <Field name="message" label="Your requirement" required error={e.message}>
          {(p) => (
            <textarea
              {...p}
              name="message"
              rows={6}
              defaultValue={v?.message}
              placeholder="Wire size, coil dimensions, number of turns, any drawing references…"
              className={input}
            />
          )}
        </Field>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 sm:col-span-2">
        <p className="text-small text-muted">Drawings can be sent by reply once we respond.</p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-2 bg-accent px-3 py-2 text-small font-medium text-accent-fg disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send enquiry"}
          <span aria-hidden="true" className="transition-transform duration-(--duration-fast) group-hover:translate-x-0.5">
            →
          </span>
        </button>
      </div>
    </form>
  );
}
