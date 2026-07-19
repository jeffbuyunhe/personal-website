export interface EmailFormInput {
    name: string;
    email: string;
    message: string;
}

export interface EmailResponse {
    success?: string;
    error?: string;
}
