import React, { createContext, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { authService } from "../useCases/authService";
import { LoginData, RegisterData } from "../useCases/authService/IAuthService";
import { ACADEMUS_TOKEN } from "../utils/constants";
import { api } from "../services/api";
import { User } from "../entities/User.entity";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type AuthContextType = {
  onLogin: (data: { email: string; password: string }) => void;
  isAuthenticated: boolean;
  user?: User;
  isLoadingUser: boolean;
  onRegister: (data: RegisterData) => void;
};

export const AuthContext = createContext<AuthContextType>({
  onLogin: () => {},
  isAuthenticated: false,
  user: {} as User,
  isLoadingUser: true,
  onRegister: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const localToken = localStorage.getItem(ACADEMUS_TOKEN);
  const navigate = useNavigate();

  useEffect(() => {
    if (localToken) {
      api.defaults.headers.common.Authorization = `Bearer ${localToken}`; //tem em todo lugar
    }
  }, [localToken, api]);

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ["me", localToken],
    queryFn: async () => await authService.me(),
    enabled: !!localToken,
  });

  useEffect(() => {
    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const response = error.response;
        const request = error.config;
        const isLoginUrl = request.url !== "/entrar";
        if (!isLoginUrl && response.status === 401) {
          window.location.href = "/entrar";
        }
        return Promise.reject(error);
      }
    );
  }, [api]);

  const { mutate: onLogin } = useMutation({
    mutationFn: async (data: LoginData) => await authService.login(data),
    onSuccess: ({ token }) => {
      localStorage.setItem(ACADEMUS_TOKEN, token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    onError: (error: unknown) => {
      console.error("Login failed", error);
    },
  });

  const { mutate: onRegister } = useMutation({
    mutationFn: async (data: RegisterData) => await authService.register(data),
    onSuccess: () => {
      toast.success("Usuário cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
      });
      navigate("/entrar");
    },
    onError: (error: unknown) => {
      toast.error("Falha ao cadastrar usuário. Tente novamente.", {
        position: "top-right",
        autoClose: 5000,
      });
      console.error("Register failed", error);
    },
  });

  return (
    <AuthContext.Provider
      value={{
        onLogin,
        isAuthenticated: !!user,
        user,
        isLoadingUser,
        onRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
