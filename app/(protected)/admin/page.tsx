"use client";
import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import React from "react";
import { toast } from "sonner";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }
      if (data.success) {
        toast.success(data.success);
      }
    });
  };
  const onApiRouteClick = () => {
    fetch("/api/admin").then((res) => {
      if (res.ok) {
        toast.success("Allowed API route!");
      } else {
        toast.error("Forbidden API route!");
      }
    });
  };
  return (


<Card className="rounded-none border-none w-full shadow-none">
<CardHeader>
  <p className="text-2xl font-semibold text-center">🗝️ Admin</p>
</CardHeader>
<CardContent className="space-y-4">
  <RoleGate allowedRole={UserRole.ADMIN}>
    <FormSuccess message="You are allowed to see this content" />
  </RoleGate>
  <div className="flex flex-row justify-between rounded-lg border p-3 shadow-md">
    <p className="text-sm font-medium">Admin-Only API Route</p>
    <Button onClick={onApiRouteClick}>Click to test</Button>
  </div>
  <div className="flex flex-row justify-between rounded-lg border p-3 shadow-md">
    <p className="text-sm font-medium">Admin-Only Server Action</p>
    <Button onClick={onServerActionClick}>Click to test</Button>
  </div>
</CardContent>
</Card>
  );
};

export default AdminPage;
