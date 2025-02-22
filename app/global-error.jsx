"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    // You can log errors to console or use another error tracking service if needed
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={500} /> {/* Or another error code as needed */}
      </body>
    </html>
  );
}
