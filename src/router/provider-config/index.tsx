import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../../redux";
import Modals from "../../components/modals";
import { Toaster } from "react-hot-toast";
import ProductPreview from "../../components/dashboard/products/product-preview";

const ProviderConfig = ({ children }: { children: React.ReactNode }) => {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ProductPreview />
        <Modals />
        <Toaster />
      </QueryClientProvider>
    </Provider>
  );
};

export default ProviderConfig;
