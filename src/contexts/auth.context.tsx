import React, { createContext, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { authService } from "../useCases/authService";
import { LoginData } from "../useCases/authService/IAuthService";
import { ACADEMUS_TOKEN } from "../utils/constants";
import { api } from "../services/api";
import { User } from "../entities/User.entity";

type AuthContextType = {
  onLogin: (data: { email: string; password: string }) => void;
  isAuthenticated: boolean;
  user?: User;
};

export const AuthContext = createContext<AuthContextType>({
  onLogin: () => {},
  isAuthenticated: false,
  user: {} as User,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const localToken = localStorage.getItem(ACADEMUS_TOKEN);

  useEffect(() => {
    if (localToken) {
      api.defaults.headers.common.Authorization = `Bearer ${localToken}`;
      setIsAuthenticated(true);
    }
  }, [localToken, api]);

  const { data: user } = useQuery({
    queryKey: ["me"],
    queryFn: async () => await authService.me(),
    enabled: !!localToken,
  });

  useEffect(() => {
    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const response = error.response;
        const request = error.config;
        const isLoginUrl = request.url === "/entrar";
        if (!isLoginUrl && response.status === 401) {
          window.location.href = "/entrar";
        }
      }
    );
  }, [api]);

  const { mutate: onLogin } = useMutation({
    mutationFn: async (data: LoginData) => await authService.login(data),
    onSuccess: ({ token }) => {
      setIsAuthenticated(true);
      localStorage.setItem(ACADEMUS_TOKEN, token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    onError: (error: unknown) => {
      console.error("Login failed", error);
    },
  });

  return (
    <AuthContext.Provider value={{ onLogin, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};
