import { Fragment } from "react";
import { Check, Minus, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/shared/status-badge";
import type { ComparisonCell, ComparisonGroup } from "@/features/marketing/types/marketing.types";
import { cn } from "@/lib/utils";

interface ComparisonMatrixProps {
  columns: string[];
  groups: ComparisonGroup[];
}

export function ComparisonMatrix({ columns, groups }: ComparisonMatrixProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 text-caption text-muted-foreground">
        <StatusBadge label="Included" tone="success" icon="check" />
        <StatusBadge label="Partial" tone="warning" icon="minus" />
        <StatusBadge label="Not offered" tone="neutral" icon="x" />
      </div>
      <div className="overflow-x-auto rounded-md border border-border bg-background">
        <Table className="min-w-[1040px]">
          <TableHeader>
            <TableRow>
              <TableHead className="sticky left-0 z-10 w-64 bg-surface-muted">Feature</TableHead>
              {columns.map((column) => (
                <TableHead
                  key={column}
                  className={cn("text-center", column === "INSURVAS AI" && "bg-primary-subtle text-foreground")}
                >
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.map((group) => (
              <Fragment key={group.label}>
                <TableRow key={`${group.label}-header`} className="bg-surface-muted hover:bg-surface-muted">
                  <TableCell colSpan={columns.length + 1} className="text-caption font-bold uppercase text-muted-foreground">
                    {group.label}
                  </TableCell>
                </TableRow>
                {group.rows.map((row) => (
                  <TableRow key={`${group.label}-${row.feature}`}>
                    <TableCell className="sticky left-0 z-10 bg-background font-semibold text-foreground">
                      {row.feature}
                    </TableCell>
                    {row.cells.map((cell, index) => (
                      <TableCell
                        key={`${row.feature}-${columns[index]}`}
                        className={cn("text-center", columns[index] === "INSURVAS AI" && "bg-primary-subtle/45")}
                      >
                        <ComparisonCellView cell={cell} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function ComparisonCellView({ cell }: { cell: ComparisonCell }) {
  if (cell.value === "text") {
    return <span className="text-caption font-semibold text-muted-foreground">{cell.label}</span>;
  }

  if (cell.value === "included") {
    return <Check className="mx-auto h-4 w-4 text-success" aria-label="Included" />;
  }

  if (cell.value === "partial" || cell.value === "limited") {
    return <span className="text-caption font-bold uppercase text-warning">{cell.label ?? "Partial"}</span>;
  }

  if (cell.value === "none") {
    return <X className="mx-auto h-4 w-4 text-muted-foreground" aria-label="Not offered" />;
  }

  return <Minus className="mx-auto h-4 w-4 text-muted-foreground" aria-label="Not applicable" />;
}
