import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export interface Product {
    productId: string;
    name: string;
    price: number;
    rating? :number;
    stockQuantity: number;    
}

export interface SalesSummary {
    salesSummaryId: string;
    totalValue: number;
    changePercentage: number;
    date: string;
}

interface PurchasesSummary {
    purchasesSummaryId: string;
    totalPurchased: number;
    changePercentage: number;
    date: string;
}

export interface  DashboardMetrics {
    popularProducts:Product[];
    salesSummary:SalesSummary[];
    purchasesSummary:PurchasesSummary[];
    expenseSummary:ExpenseSummary[];
    expenseByCategory:ExpenseByCategory[];
}
export const api =  createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
    tagTypes: ['DashboardMetrics'],
    endpoints: (build) => ({
        getDashboardMetrics:build.query<DashboardMetrics, void>({
            query: () => '/dashboard/',
            providesTags: ['DashboardMetrics'],
        })
    }), 
   });

export const {} = api;