"use client";

import { NextUIProvider } from "@nextui-org/react";
import { UserContext } from "./contexts/UserContext";
import { getUserById } from "./api/users";
import { ThemeProvider as NextThemesProvider } from "next-themes";
export async function Providers({ children }) {
  const user = await getUserById("653eefb2e27ae8459e3a65e1");
  return (
    <NextUIProvider>
      <UserContext.Provider value={user}>
        <NextThemesProvider attribute="class" forcedTheme="dark">
          {children}
        </NextThemesProvider>
      </UserContext.Provider>
    </NextUIProvider>
  );
}
