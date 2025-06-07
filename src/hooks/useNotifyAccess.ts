"use client";

import { useEffect } from "react";

export function useNotifyAccess() {
  useEffect(() => {
    const notifyAccess = async () => {
      try {
        await fetch("/api/notify", {
          method: "POST",
        });
      } catch (error) {
        console.error("Error notifying access:", error);
      }
    };

    notifyAccess();
  }, []);
} 