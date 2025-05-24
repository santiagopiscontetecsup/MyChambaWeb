"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // @ts-expect-error: External module doesn't have types
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
