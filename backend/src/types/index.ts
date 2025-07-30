import { Request, Response } from 'express';

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Error types
export interface ApiError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

// Custom Request/Response types
export interface CustomRequest extends Request {
  user?: any; // Add user type when authentication is implemented
}

export interface CustomResponse extends Response {
  sendSuccess: (data?: any, message?: string) => void;
  sendError: (error: string, statusCode?: number) => void;
}

// Common entity types
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Pagination types
export interface PaginationQuery {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}