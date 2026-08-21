declare module "#auth-utils" {
  interface User {
    id: number;
    name: string;
    email: string;
    role: "OWNER" | "MANAGER" | "GERANT" | "CASHIER";
    companyId: number;
  }
}

export {};
