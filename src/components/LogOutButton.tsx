"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { logOutAction } from "@/actions/users";

const LogOutButton = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    const { errorMessage } = await logOutAction();

    if (!errorMessage) {
      toast({
        title: "Logged out successfully",
        description: "You have been successfully logged out.",
        variant: "success",
      });

      router.push("/");
    } else {
      toast({
        title: "Error logging out",
        description: errorMessage,
        variant: "destructive",
      });
    }

    console.log("Logging out...");
    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      className="w-24"
      disabled={loading}
      onClick={handleLogout}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
};

export default LogOutButton;
