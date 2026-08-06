import { X } from "lucide-react";
import { PanelFrame, PanelPill } from "@/features/marketing/components/home/panel-frame";

type NodeRole = "owner" | "manager" | "agent";

interface TreeNode {
  name: string;
  role: NodeRole;
  personal: string;
  hierarchy: string;
  volume: string;
  flagged?: boolean;
}

const tone = {
  line: "#2a3348",
  label: "#8a93a5",
  volume: "#a78bfa",
  dim: "#6b7280",

  ownerBorder: "#e2a33c",
  ownerBg: "#141210",
  ownerPillBg: "#3a2f0c",
  ownerPillBorder: "#6d5714",
  ownerPillText: "#fbbf24",

  managerBorder: "#7c5cf0",
  managerBg: "#171334",
  managerPillBg: "#2a2150",
  managerPillBorder: "#453a7a",
  managerPillText: "#c4b5fd",

  agentBorder: "#2a3348",
  /** Matches the panel background so the lowest level reads as flush with it. */
  agentBg: "#0a0d14",
  agentPillBg: "#1e2536",
  agentPillBorder: "#2f3849",
  agentPillText: "#9aa4b8",

  flagBorder: "#e05070",

  green: "#4ade80",
  greenBar: "#22c55e",
  amber: "#fbbf24",
  amberBar: "#eab308",
  red: "#f87171",
  track: "#1e2536"
};

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
  { name: "S. Whitfield", amount: "$3,120", color: tone.amber },
  { name: "T. Nguyen", amount: "$9,645", color: tone.red },
  { name: "D. Alvarez", amount: "$0", color: tone.green }
];

const persistency = [
  { carrier: "Carrier A", value: "91.2%", percent: 91.2, text: tone.green, bar: tone.greenBar },
  { carrier: "Carrier B", value: "88.7%", percent: 88.7, text: tone.green, bar: tone.greenBar },
  { carrier: "Carrier C", value: "76.4%", percent: 76.4, text: tone.amber, bar: tone.amberBar }
];

const policies = [
  { name: "Linda P.", carrier: "Carrier A", status: "In force", bg: "#123727", border: "#1d6340", text: tone.green },
  { name: "R. Boyd", carrier: "Carrier C", status: "Pending", bg: "#3a2f0c", border: "#6d5714", text: tone.amber },
  { name: "M. Ortiz", carrier: "Carrier B", status: "Lapsed", bg: "#3b1622", border: "#6b2634", text: tone.red }
];

const roleStyles: Record<NodeRole, { bg: string; border: string; pillBg: string; pillBorder: string; pillText: string }> = {
  owner: {
    bg: tone.ownerBg,
    border: tone.ownerBorder,
    pillBg: tone.ownerPillBg,
    pillBorder: tone.ownerPillBorder,
    pillText: tone.ownerPillText
  },
  manager: {
    bg: tone.managerBg,
    border: tone.managerBorder,
    pillBg: tone.managerPillBg,
    pillBorder: tone.managerPillBorder,
    pillText: tone.managerPillText
  },
  agent: {
    bg: tone.agentBg,
    border: tone.agentBorder,
    pillBg: tone.agentPillBg,
    pillBorder: tone.agentPillBorder,
    pillText: tone.agentPillText
  }
};

const microLabel = {
  fontSize: "9.5px",
  fontWeight: 600,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  color: tone.label
} as const;

const columnLabel = {
  fontSize: "10.5px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: tone.label
} as const;

export function BackOfficePanel({ hideStats = false }: { hideStats?: boolean } = {}) {
  return (
    <PanelFrame
      title="Back Office · Team tree · production rollup"
      badge={<PanelPill tone="primary">MTD</PanelPill>}
      bodyClassName="p-0"
    >
      <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: hideStats ? "320px" : undefined }}>
        {/* The third level is intentionally cropped by the panel edge to imply more depth. */}
        <div className={hideStats ? "" : "overflow-hidden"}>
          <div
            className={`min-w-[900px] px-5 pt-6 ${hideStats ? "pb-5" : "-mb-1.5"}`}
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)",
              backgroundSize: "16px 16px"
            }}
          >
            <div className="flex justify-center">
              <NodeCard node={owner} />
            </div>

            {/* Owner to managers, centred at 26% / 74%. */}
            <Connector>
              <Line left="50%" top={0} height={17} />
              <Line left="26%" right="26%" top={17} />
              <Line left="26%" top={17} height={17} />
              <Line left="74%" top={17} height={17} />
            </Connector>

            {/* Column widths put each card's centre on the connector above it. */}
            <div className="grid" style={{ gridTemplateColumns: "52% 44% 4%" }}>
              {managers.map((manager) => (
                <div key={manager.name} className="flex justify-center">
                  <NodeCard node={manager} />
                </div>
              ))}
            </div>

            {/* Left manager branches to two agents, right manager to one. */}
            <Connector>
              <Line left="26%" top={0} height={17} />
              <Line left="12.5%" right="54.1%" top={17} />
              <Line left="12.5%" top={17} height={17} />
              <Line left="45.9%" top={17} height={17} />

              <Line left="74%" top={0} height={17} />
              <Line left="74%" right="16.6%" top={17} />
              <Line left="83.4%" top={17} height={17} />
            </Connector>

            <div className="grid" style={{ gridTemplateColumns: "25% 41.8% 33.2%" }}>
              {agents.map((agent) => (
                <div key={agent.name} className="flex justify-center">
                  <NodeCard node={agent} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {!hideStats ? (
      <div className="grid border-t sm:grid-cols-3" style={{ borderColor: "#1f2531" }}>
        <div className="p-4">
          <span style={columnLabel}>Rollup debt</span>
          <ul className="mt-3.5 space-y-2.5">
            {rollupDebt.map((item) => (
              <li key={item.name} className="flex items-baseline justify-between gap-3">
                <span style={{ fontSize: "12.5px", color: "#c3cad6" }}>{item.name}</span>
                <span style={{ fontSize: "12.5px", fontWeight: 700, color: item.color }}>{item.amount}</span>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "14px", fontSize: "10.5px", lineHeight: 1.5, color: tone.dim }}>
            Chargebacks netted against rollup, per statement
          </p>
        </div>

        <div className="border-t p-4 sm:border-l sm:border-t-0" style={{ borderColor: "#1f2531" }}>
          <span style={columnLabel}>Persistency · 13-month</span>
          <ul className="mt-3.5 space-y-3">
            {persistency.map((item) => (
              <li key={item.carrier}>
                <div className="flex items-baseline justify-between gap-3">
                  <span style={{ fontSize: "12.5px", fontWeight: 600, color: "#c3cad6" }}>{item.carrier}</span>
                  <span style={{ fontSize: "12.5px", fontWeight: 700, color: item.text }}>{item.value}</span>
                </div>
                <span
                  className="mt-2 block h-[3px] overflow-hidden rounded-full"
                  style={{ background: tone.track }}
                  aria-hidden="true"
                >
                  <span
                    className="block h-full rounded-full"
                    style={{ width: `${item.percent}%`, background: item.bar }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t p-4 sm:border-l sm:border-t-0" style={{ borderColor: "#1f2531" }}>
          <span style={columnLabel}>Policy tracker</span>
          <ul className="mt-3.5 space-y-2.5">
            {policies.map((policy) => (
              <li key={policy.name} className="flex items-center justify-between gap-3">
                <span className="min-w-0 truncate" style={{ fontSize: "12.5px", color: tone.label }}>
                  <strong style={{ fontWeight: 700, color: "#e6eaf2" }}>{policy.name}</strong> · {policy.carrier}
                </span>
                <span
                  className="shrink-0"
                  style={{
                    borderRadius: "5px",
                    padding: "3px 8px",
                    fontSize: "9.5px",
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    background: policy.bg,
                    border: `1px solid ${policy.border}`,
                    color: policy.text
                  }}
                >
                  {policy.status}
                </span>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "14px", fontSize: "10.5px", lineHeight: 1.5, color: tone.dim }}>
            Book of business: <strong style={{ fontWeight: 700, color: "#e6eaf2" }}>$1.24M</strong> in force · 842
            policies
          </p>
        </div>
      </div>
      ) : null}
    </PanelFrame>
  );
}

function Connector({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative" style={{ height: "34px" }} aria-hidden="true">
      {children}
    </div>
  );
}

function Line({
  left,
  right,
  top,
  height
}: {
  left?: string;
  right?: string;
  top: number;
  height?: number;
}) {
  return (
    <span
      className="absolute"
      style={{
        left,
        right,
        top: `${top}px`,
        height: height ? `${height}px` : "1px",
        width: height ? "1px" : undefined,
        background: tone.line
      }}
    />
  );
}

function NodeCard({ node }: { node: TreeNode }) {
  const styles = roleStyles[node.role];

  return (
    <div
      className="relative w-[212px]"
      style={{
        background: styles.bg,
        border: `1px solid ${node.flagged ? tone.flagBorder : styles.border}`,
        borderRadius: "8px",
        padding: "10px 12px 11px"
      }}
    >
      {node.flagged ? (
        <span
          className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full"
          style={{ background: "#0a0d14", border: `1px solid ${tone.flagBorder}` }}
          aria-hidden="true"
        >
          <X style={{ width: "8px", height: "8px", color: tone.flagBorder }} />
        </span>
      ) : null}

      <div className="flex items-center justify-between gap-2">
        <p style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>{node.name}</p>
        <span
          className="inline-flex shrink-0 items-center gap-1.5"
          style={{
            borderRadius: "999px",
            padding: "2px 7px",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            background: styles.pillBg,
            border: `1px solid ${styles.pillBorder}`,
            color: styles.pillText
          }}
        >
          <span className="h-[4px] w-[4px] rounded-full" style={{ background: "currentColor" }} aria-hidden="true" />
          {node.role}
        </span>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-2">
        <Metric label="Personal" value={node.personal} />
        <Metric label="Hierarchy" value={node.hierarchy} />
        <Metric label="Volume" value={node.volume} highlight />
      </div>
    </div>
  );
}

function Metric({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <span style={microLabel}>{label}</span>
      <p
        style={{
          marginTop: "3px",
          fontSize: "12.5px",
          fontWeight: 700,
          color: highlight ? tone.volume : "#ffffff"
        }}
      >
        {value}
      </p>
    </div>
  );
}
