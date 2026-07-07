"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ArchitectureData } from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";
import { cn } from "@/components/ui/utils";

interface ArchitectureSectionProps {
  data: ArchitectureData;
}

type ArchitectureTabId =
  | "overview"
  | "c4"
  | "security"
  | "workflows"
  | "data"
  | "deployment";

function hasDiagramSrc(src?: string): boolean {
  return Boolean(src?.trim());
}

function getArchitectureTabs(data: ArchitectureData): { id: ArchitectureTabId; label: string }[] {
  const tabs: { id: ArchitectureTabId; label: string }[] = [
    { id: "overview", label: data.systemOverview.title },
  ];

  if (hasDiagramSrc(data.c4Model.src)) {
    tabs.push({ id: "c4", label: data.c4Model.title });
  }

  tabs.push(
    { id: "security", label: data.security.title },
    { id: "workflows", label: data.coreWorkflows.title }
  );

  if (hasDiagramSrc(data.dataModel.src)) {
    tabs.push({ id: "data", label: data.dataModel.title });
  }

  tabs.push({ id: "deployment", label: data.deployment.title });

  return tabs;
}

function getPanelTitle(data: ArchitectureData, tab: ArchitectureTabId): string {
  return getArchitectureTabs(data).find((item) => item.id === tab)?.label ?? "";
}

function DiagramImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0b1118]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="mx-auto h-auto w-full min-w-[640px]"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function SystemOverviewPanel({ data }: { data: ArchitectureData }) {
  const { systemOverview } = data;
  const { tableColumns } = systemOverview;

  return (
    <div className="space-y-6">
      <p className="max-w-2xl text-sm leading-relaxed text-white/55">{systemOverview.description}</p>

      <div className="flex flex-wrap items-center gap-2">
        {systemOverview.nodes.map((node, index) => (
          <div key={node.id} className="flex items-center gap-2">
            <span className="rounded-lg border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-white">
              {node.label}
            </span>
            {index < systemOverview.nodes.length - 1 && (
              <ArrowRight className="size-3.5 shrink-0 text-white/25" aria-hidden />
            )}
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03]">
              <th className="px-4 py-3 font-medium text-white/40">{tableColumns.layer}</th>
              <th className="px-4 py-3 font-medium text-white/40">{tableColumns.role}</th>
              <th className="hidden px-4 py-3 font-medium text-white/40 sm:table-cell">
                {tableColumns.stack}
              </th>
            </tr>
          </thead>
          <tbody>
            {systemOverview.nodes.map((node) => (
              <tr key={node.id} className="border-b border-white/[0.06] last:border-0">
                <td className="px-4 py-3 font-medium text-white">{node.label}</td>
                <td className="px-4 py-3 text-white/55">{node.description}</td>
                <td className="hidden px-4 py-3 text-white/40 sm:table-cell">
                  {(node.technologies ?? systemOverview.technologies).slice(0, 3).join(" · ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-2">
        {systemOverview.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/45"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function C4Panel({ data }: { data: ArchitectureData }) {
  const src = data.c4Model.src?.trim();
  if (!src) return null;

  return (
    <div className="space-y-4">
      <p className="max-w-2xl text-sm text-white/50">{data.c4Model.description}</p>
      <DiagramImage src={src} alt={data.c4Model.alt} />
    </div>
  );
}

function SecurityPanel({ data }: { data: ArchitectureData }) {
  return (
    <div className="space-y-5">
      <p className="max-w-2xl text-sm text-white/50">{data.security.description}</p>
      <div className="divide-y divide-white/[0.08] rounded-2xl border border-white/10">
        {data.security.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-1 px-4 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="shrink-0 text-sm font-medium text-white">{item.label}</span>
            <p className="text-sm text-white/50 sm:text-right">{item.description}</p>
            {item.technologies && item.technologies.length > 0 && (
              <span className="shrink-0 text-xs text-white/35 sm:max-w-[140px] sm:text-right">
                {item.technologies.join(" · ")}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowPanel({ data }: { data: ArchitectureData }) {
  const workflow = data.coreWorkflows.workflows[0];
  if (!workflow) return null;

  return (
    <div className="space-y-5">
      <p className="max-w-2xl text-sm text-white/50">{data.coreWorkflows.description}</p>
      <div className="space-y-0">
        {workflow.steps.map((step, index) => (
          <div
            key={step.id}
            className="relative border-l border-white/12 pb-6 pl-6 last:pb-0"
          >
            <span className="absolute -left-2 top-0 flex size-4 items-center justify-center rounded-full border border-white/20 bg-[#0a0a0a] text-[9px] font-semibold text-white/50">
              {index + 1}
            </span>
            <p className="text-sm font-medium text-white">{step.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/50">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DataModelPanel({ data }: { data: ArchitectureData }) {
  const src = data.dataModel.src?.trim();
  if (!src) return null;

  return (
    <div className="space-y-4">
      <p className="max-w-2xl text-sm text-white/50">{data.dataModel.description}</p>
      <DiagramImage src={src} alt={data.dataModel.alt} />
    </div>
  );
}

function DeploymentPipeline({ steps }: { steps: { label: string }[] }) {
  return (
    <ol className="mx-auto flex max-w-xs flex-col items-center">
      {steps.map((step, index) => (
        <li key={step.label} className="flex w-full flex-col items-center">
          <div className="w-full rounded-xl border border-blue-300/20 bg-blue-500/[0.08] px-4 py-2.5 text-center text-sm font-medium text-white">
            {step.label}
          </div>
          {index < steps.length - 1 && (
            <div className="flex flex-col items-center py-1.5 text-white/25" aria-hidden>
              <span className="h-3 w-px bg-white/20" />
              <ArrowRight className="size-3.5 rotate-90" />
              <span className="h-3 w-px bg-white/20" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

function DeploymentPanel({ data }: { data: ArchitectureData }) {
  const { deployment } = data;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg font-medium text-white">{deployment.hosting}</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/50">
          {deployment.description}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {deployment.environments.map((env) => (
          <div
            key={env.label}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/35">
              {env.heading ?? env.label}
            </p>
            <dl className="space-y-2.5">
              {env.services.map((service) => (
                <div key={service.name} className="flex items-baseline justify-between gap-3">
                  <dt className="text-sm text-white/70">{service.name}</dt>
                  <dd className="text-right text-sm font-medium text-white">{service.tech}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {deployment.pipeline && deployment.pipeline.length > 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-white/35">
            {deployment.pipelineTitle ?? "Deployment pipeline"}
          </p>
          <DeploymentPipeline steps={deployment.pipeline} />
        </div>
      )}
    </div>
  );
}

export function ArchitectureSection({ data }: ArchitectureSectionProps) {
  const tabs = useMemo(() => getArchitectureTabs(data), [data]);
  const [activeTab, setActiveTab] = useState<ArchitectureTabId>(data.defaultTab ?? "overview");

  useEffect(() => {
    const fallbackTab = tabs[0]?.id ?? "overview";
    const preferredTab = data.defaultTab ?? "overview";
    const nextTab = tabs.some((tab) => tab.id === preferredTab) ? preferredTab : fallbackTab;

    if (!tabs.some((tab) => tab.id === activeTab)) {
      setActiveTab(nextTab);
    }
  }, [tabs, activeTab, data.defaultTab]);

  const panelTitle = getPanelTitle(data, activeTab);

  return (
    <ProductSection
      id="architecture"
      variant="spotlight"
      eyebrow={data.eyebrow}
      headline={data.headline}
      subheadline={data.subheadline}
      align="center"
      containerClassName="max-w-[1080px]"
    >
      <div className="grid gap-5 text-left lg:grid-cols-[200px_1fr] lg:gap-8">
        <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onMouseEnter={() => setActiveTab(tab.id)}
                onFocus={() => setActiveTab(tab.id)}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "shrink-0 rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50",
                  active
                    ? "bg-white font-medium text-black"
                    : "text-white/45 hover:bg-white/[0.06] hover:text-white/80"
                )}
                aria-pressed={active}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
        >
          <h3 className="mb-5 text-lg font-semibold text-white">{panelTitle}</h3>

          {activeTab === "overview" && <SystemOverviewPanel data={data} />}
          {activeTab === "c4" && <C4Panel data={data} />}
          {activeTab === "security" && <SecurityPanel data={data} />}
          {activeTab === "workflows" && <WorkflowPanel data={data} />}
          {activeTab === "data" && <DataModelPanel data={data} />}
          {activeTab === "deployment" && <DeploymentPanel data={data} />}
        </motion.section>
      </div>
    </ProductSection>
  );
}
