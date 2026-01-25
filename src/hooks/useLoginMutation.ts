
import { useState, useCallback } from 'react';
import type { LoginResponse, LoginValues } from '../@types';


interface MutationOptions {
  onSuccess?: (data: LoginResponse) => void;
  onError?: (error: string) => void;
}

export const useLoginMutation = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResponse | null>(null);

  const mutate = useCallback(async (values: LoginValues, options?: MutationOptions) => {
    setIsPending(true);
    setError(null);

    // API kechikishini simulyatsiya qilish
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      // Mock ma'lumotlar
      const correctEmail = "admin@example.com";
      const correctPassword = "admin123";

      const inputEmail = values.email.trim();
      const inputPassword = values.password;

      if (inputEmail === correctEmail && inputPassword === correctPassword) {
        const response: LoginResponse = {
          success: true,
          message: "Muvaffaqiyatli kirdingiz!",
          user: {
            id: "1",
            email: inputEmail,
            name: "Admin Foydalanuvchi"
          }
        };
        setData(response);
        options?.onSuccess?.(response);
        return response;
      } else {
        // Siz so'ragan aniq xatolik xabari
        throw new Error("Kirishda xatolik aniqlandi!");
      }
    } catch (err: any) {
      const errMsg = err.message || "Kutilmagan xatolik yuz berdi.";
      setError(errMsg);
      options?.onError?.(errMsg);
      throw err;
    } finally {
      setIsPending(false);
    }
  }, []);

  return { mutate, isPending, error, data };
};
