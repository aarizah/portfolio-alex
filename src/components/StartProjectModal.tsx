"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Instrument_Serif } from "next/font/google";
import { brand, contactCopy } from "@/content/brand";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const fieldClass =
  "h-10 border-white/10 bg-white/[0.04] text-white placeholder:text-white/30";

type StartProjectContextValue = {
  open: () => void;
};

const StartProjectContext = createContext<StartProjectContextValue | null>(null);

export function useStartProject() {
  const context = useContext(StartProjectContext);
  if (!context) {
    throw new Error("useStartProject must be used within StartProjectProvider");
  }
  return context;
}

export function StartProjectProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const value = useMemo(() => ({ open }), [open]);

  useEffect(() => {
    const syncHash = () => {
      if (window.location.hash === "#start") setIsOpen(true);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("open-start-project", open);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("open-start-project", open);
    };
  }, [open]);

  return (
    <StartProjectContext.Provider value={value}>
      {children}
      <StartProjectDialog open={isOpen} onOpenChange={setIsOpen} />
    </StartProjectContext.Provider>
  );
}

export function StartProjectButton({
  className,
  children = contactCopy.ctaLabel,
  onClick,
}: {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}) {
  const { open } = useStartProject();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        open();
      }}
    >
      {children}
    </button>
  );
}

function StartProjectDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const building = String(data.get("building") || "");
    const budget = String(data.get("budget") || "");
    const timeline = String(data.get("timeline") || "");

    const subject = encodeURIComponent(`Project inquiry — ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nBudget: ${budget}\nTimeline: ${timeline}\n\nWhat they're building:\n${building}`,
    );

    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) setStatus("idle");
      }}
    >
      <DialogContent className="max-h-[min(90vh,44rem)] overflow-y-auto border-white/10 bg-black p-7 text-white shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:max-w-[34rem] sm:p-8">
        <DialogHeader className="gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
            Inquiry
          </p>
          <DialogTitle
            className={`${instrumentSerif.className} text-[1.85rem] font-normal leading-tight tracking-[-0.02em] text-white`}
          >
            {contactCopy.formTitle}
          </DialogTitle>
          <DialogDescription className="text-[15px] leading-6 text-[#9a9a9a]">
            {contactCopy.formLede}
          </DialogDescription>
        </DialogHeader>

        <form className="mt-2 flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="project-name" label="Name" required>
              <Input
                id="project-name"
                name="name"
                required
                autoComplete="name"
                className={fieldClass}
              />
            </Field>
            <Field id="project-company" label="Company">
              <Input
                id="project-company"
                name="company"
                autoComplete="organization"
                className={fieldClass}
              />
            </Field>
          </div>

          <Field id="project-email" label="Email" required>
            <Input
              id="project-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
            />
          </Field>

          <Field id="project-building" label="What are you building?" required>
            <Textarea
              id="project-building"
              name="building"
              required
              rows={4}
              placeholder="The product, workflow, or system — and what done looks like."
              className="min-h-[6.5rem] border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="project-budget" label="Estimated budget">
              <select
                id="project-budget"
                name="budget"
                className={cn(fieldClass, "w-full rounded-md px-3 text-sm")}
                defaultValue={contactCopy.budgets[contactCopy.budgets.length - 1]}
              >
                {contactCopy.budgets.map((option) => (
                  <option key={option} value={option} className="bg-black">
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="project-timeline" label="Desired timeline">
              <select
                id="project-timeline"
                name="timeline"
                className={cn(fieldClass, "w-full rounded-md px-3 text-sm")}
                defaultValue={contactCopy.timelines[contactCopy.timelines.length - 1]}
              >
                {contactCopy.timelines.map((option) => (
                  <option key={option} value={option} className="bg-black">
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Button
            type="submit"
            className="mt-2 h-11 rounded-full bg-white text-[13px] font-medium text-black hover:bg-white/90"
          >
            {contactCopy.submitLabel}
          </Button>

          {status === "sent" ? (
            <p className="text-sm text-[#9a9a9a]" role="status">
              Your email client should open with the brief. If it does not, write to{" "}
              {brand.email}.
            </p>
          ) : (
            <p className="text-xs leading-5 text-white/35">
              Opens your email client. Nothing is stored on this site.
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-[13px] text-white/80">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </Label>
      {children}
    </div>
  );
}
