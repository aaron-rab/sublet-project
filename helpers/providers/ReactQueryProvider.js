"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const ReactQueryProvider = (props) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
     <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;