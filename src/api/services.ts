import { apiClient } from "./api-client";
import type { LoginType } from "../types/type";

export class ApiServices {


    static async login(data: LoginType) {
        const response = await apiClient.post("/api/auth/login", data);
        if (response.data.token) {
            localStorage.setItem("auth_token", response.data.token);
            if (response.data.user?.name) {
                localStorage.setItem("user_name", response.data.user.name);
            }
        }
        return response.data;
    }

    static async logout() {
        const response = await apiClient.post("/api/v1/logout");
        localStorage.removeItem("auth_token");
        return response.data;
    }

    static async getDashboard() {
        const response = await apiClient.get("/api/v1/dashboard");
        return response.data;
    }

    static async getAllEmployee(page: number = 1, params: any = {}) {
        const response = await apiClient.get("/api/v1/employee", {
            params: { page, ...params }
        });
        return response.data;
    }

    static async getEmployee(id: string | number) {
        const response = await apiClient.get(`/api/v1/employee/${id}`);
        return response.data;
    }

    static async searchEmployee(params: any) {
        const response = await apiClient.get("/api/v1/employee", { params });
        return response.data;
    }
}