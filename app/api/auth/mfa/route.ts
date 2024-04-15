import { handleMFADeleteEnrollment, handleMFAFactorEnrollment, handleMFAFactorsList } from "@/sdk/routes/mfa";

export const GET = handleMFAFactorsList();

export const POST = handleMFAFactorEnrollment();
