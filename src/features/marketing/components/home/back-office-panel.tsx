import { PanelFrame, PanelFieldLabel, PanelPill } from "@/features/marketing/components/home/panel-frame";
import { cn } from "@/lib/utils";

type NodeRole = "owner" | "manager" | "agent";

interface TreeNode {
  name: string;
  role: NodeRole;
  personal: string;
  hierarchy: string;
  volume: string;
  flagged?: boolean;
}

const owner: TreeNode = {
  name: "Marcus Reed",
  role: "owner",
  personal: "$12,400",
  hierarchy: "$122,530",
  volume: "100%"
};

const managers: TreeNode[] = [
  { name: "S. Whitfield", role: "manager", personal: "$8,210", hierarchy: "$61,940", volume: "50.5%" },
  { name: "D. Alvarez", role: "manager", personal: "$9,760", hierarchy: "$48,210", volume: "39.3%" }
];

const agents: TreeNode[] = [
  { name: "J. Kim", role: "agent", personal: "$17,890", hierarchy: "$17,890", volume: "14.6%" },
  { name: "R. Boyd", role: "agent", personal: "$9,340", hierarchy: "$9,340", volume: "7.6%" },
  { name: "T. Nguyen", role: "agent", personal: "$12,480", hierarchy: "$12,480", volume: "10.2%", flagged: true }
];

const rollupDebt = [
  { name: "S. Whitfield", amount: "$3,120", tone: "warning" as const },
  { name: "T. Nguyen", amount: "$9,645", tone: "danger" as const },
  { name: "D. Alvarez", amount: "$0", tone: "muted" as const }
];

const persistency = [
  { carrier: "Carrier A", value: "91.2%", percent: 91.2, tone: "success" as const },
  { carrier: "Carrier B", value: "88.7%", percent: 88.7, tone: "success" as const },
  { carrier: "Carrier C", value: "76.4%", percent: 76.4, tone: "warning" as const }
];

const policies = [
  { name: "Linda P.", carrier: "Carrier A", status: "In force", tone: "success" as const },
  { name: "R. Boyd", carrier: "Carrier C", status: "Pending", tone: "warning" as const },
  { name: "M. Ortiz", carrier: "Carrier B", status: "Lapsed", tone: "danger" as const }
];

const roleStyles: Record<NodeRole, { card: string; pill: "warning" | "primary" | "neutral" }> = {
  owner: { card: "border-warning/60 bg-warning/[0.06]", pill: "warning" },
  manager: { card: "border-primary/55 bg-primary-subtle/50", pill: "primary" },
  agent: { card: "border-border bg-background/70", pill: "neutral" }
};

const debtTone = {
  warning: "text-warning",
  danger: "text-danger",
  muted: "text-muted-foreground"
};

export function BackOfficePanel() {
  return (
    <PanelFrame
      title="Back Office · Team tree · production rollup"
      badge={<PanelPill tone="primary">MTD</PanelPill>}
      bodyClassName="p-0"
    >
      <div className="overflow-x-auto">
        <div className="min-w-[640px] p-5">
          <div className="flex flex-col items-center">
            <NodeCard node={owner} className="w-[210px]" />

            <TreeBranch>
              {managers.map((manager) => (
                <NodeCard key={manager.name} node={manager} className="w-[180px]" />
              ))}
            </TreeBranch>

            <TreeBranch>
              {agents.map((agent) => (
                <NodeCard key={agent.name} node={agent} className="w-[180px]" />
              ))}
            </TreeBranch>
          </div>
        </div>
      </div>

      <div className="grid divide-border border-t border-border sm:grid-cols-3 sm:divide-x">
        <div className="p-4">
          <PanelFieldLabel className="block">Rollup debt</PanelFieldLabel>
          <ul className="mt-3 space-y-2">
            {rollupDebt.map((item) => (
              <li key={item.name} className="flex items-baseline justify-between gap-3">
                <span className="text-[0.72rem] text-muted-foreground">{item.name}</span>
                <span className={cn("text-[0.72rem] font-bold", debtTone[item.tone])}>{item.amount}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3.5 text-[0.62rem] leading-4 text-muted-foreground">
            Chargebacks netted against rollup, per statement
          </p>
        </div>

        <div className="border-t border-border p-4 sm:border-t-0">
          <PanelFieldLabel className="block">Persistency · 13-month</PanelFieldLabel>
          <ul className="mt-3 space-y-2.5">
            {persistency.map((item) => (
              <li key={item.carrier}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[0.72rem] text-muted-foreground">{item.carrier}</span>
                  <span className="text-[0.72rem] font-bold text-foreground">{item.value}</span>
                </div>
                <span className="mt-1.5 block h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                  <span
                    className={cn("block h-full rounded-full", item.tone === "success" ? "bg-success" : "bg-warning")}
                    style={{ width: `${item.percent}%` }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border p-4 sm:border-t-0">
          <PanelFieldLabel className="block">Policy tracker</PanelFieldLabel>
          <ul className="mt-3 space-y-2">
            {policies.map((policy) => (
              <li key={policy.name} className="flex items-center justify-between gap-3">
                <span className="min-w-0 truncate text-[0.72rem] text-muted-foreground">
                  <strong className="font-semibold text-foreground">{policy.name}</strong> · {policy.carrier}
                </span>
                <PanelPill tone={policy.tone} className="shrink-0">
                  {policy.status}
                </PanelPill>
              </li>
            ))}
          </ul>
          <p className="mt-3.5 text-[0.62rem] leading-4 text-muted-foreground">
            Book of business: <strong className="font-bold text-foreground">$1.24M</strong> in force · 842 policies
          </p>
        </div>
      </div>
    </PanelFrame>
  );
}

function TreeBranch({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="h-4 w-px shrink-0 bg-border" aria-hidden="true" />
      <div className="relative flex w-full justify-center gap-5 pt-4">
        <span className="absolute left-[16%] right-[16%] top-0 h-px bg-border" aria-hidden="true" />
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div key={index} className="relative flex justify-center">
                <span className="absolute -top-4 left-1/2 h-4 w-px bg-border" aria-hidden="true" />
                {child}
              </div>
            ))
          : children}
      </div>
    </>
  );
}

function NodeCard({ node, className }: { node: TreeNode; className?: string }) {
  const styles = roleStyles[node.role];

  return (
    <div className={cn("relative rounded-md border p-2.5", styles.card, className)}>
      {node.flagged ? (
        <span
          className="absolute -right-1.5 -top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border border-danger bg-background"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-danger" />
        </span>
      ) : null}
      <div className="flex items-center justify-between gap-2">
        <p className="truncate text-[0.72rem] font-bold text-foreground">{node.name}</p>
        <PanelPill tone={styles.pill} dot className="shrink-0">
          {node.role}
        </PanelPill>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5 border-t border-white/5 pt-2">
        <Metric label="Personal" value={node.personal} />
        <Metric label="Hierarchy" value={node.hierarchy} />
        <Metric label="Volume" value={node.volume} />
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <PanelFieldLabel className="block truncate">{label}</PanelFieldLabel>
      <p className="mt-0.5 truncate text-[0.68rem] font-bold text-foreground">{value}</p>
    </div>
  );
}
