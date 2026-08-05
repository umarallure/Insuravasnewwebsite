"use client";

import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs } from "@/components/ui/tabs";
import { EmptyState } from "@/components/shared/empty-state";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";

const colorTokens = [
  { label: "background", className: "bg-background" },
  { label: "surface", className: "bg-surface" },
  { label: "surface-muted", className: "bg-surface-muted" },
  { label: "surface-elevated", className: "bg-surface-elevated" },
  { label: "primary", className: "bg-primary" },
  { label: "secondary", className: "bg-secondary" },
  { label: "success", className: "bg-success" },
  { label: "warning", className: "bg-warning" },
  { label: "danger", className: "bg-danger" },
  { label: "info", className: "bg-info" }
];

export function DesignSystemShowcase() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Internal"
        title="Design System"
        description="The shared tokens and components used by the INSURVAS pages."
      />
      <div className="space-y-10">
        <Card>
          <CardHeader>
            <CardTitle>Color Tokens</CardTitle>
            <CardDescription>Theme values are centralized in `src/styles/tokens.css`.</CardDescription>
          </CardHeader>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {colorTokens.map((token) => (
              <div key={token.label} className="rounded-md border border-border bg-surface-muted p-3">
                <div className={`h-14 rounded-sm ${token.className}`} />
                <p className="mt-3 text-caption font-semibold text-muted-foreground">{token.label}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Buttons, Inputs, Badges</CardTitle>
            <CardDescription>Shared controls consume semantic tokens and focus states.</CardDescription>
          </CardHeader>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="inverse">Inverse</Button>
              <Button variant="destructive">Delete</Button>
            </div>
            <div className="space-y-3">
              <Input placeholder="you@example.com" />
              <Checkbox id="design-system-checkbox" label="Remember this setting" />
              <div className="flex flex-wrap gap-2">
                <Badge>Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="neutral">Neutral</Badge>
              </div>
            </div>
          </div>
        </Card>

        <Tabs
          items={[
            {
              label: "Table",
              value: "table",
              content: (
                <Card padding="none" className="overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Lead</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Owner</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Linda P.</TableCell>
                        <TableCell>Booked</TableCell>
                        <TableCell>Ashley AI</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Robert M.</TableCell>
                        <TableCell>Deferred</TableCell>
                        <TableCell>Compliance gate</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              )
            },
            {
              label: "States",
              value: "states",
              content: (
                <div className="grid gap-4 md:grid-cols-2">
                  <Alert variant="success">Form submitted successfully.</Alert>
                  <Alert variant="danger">Unable to submit the form.</Alert>
                  <Skeleton className="h-20" />
                  <EmptyState title="No records yet" description="Records will appear here once they exist." />
                </div>
              )
            }
          ]}
        />
      </div>
    </PageContainer>
  );
}
