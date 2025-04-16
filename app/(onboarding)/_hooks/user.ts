import { useState } from "react";
import { OnboardingData } from "../_context/onboarding-context";
export function useFetch<T>(cb: (data: OnboardingData) => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fn = async (data: OnboardingData) => {
    setLoading(true);
    try {
      const res = await cb(data);
      setData(res);
    } catch (error) {
      setError(error as Error);
    }
    setLoading(false);
  };

  return { data, error, loading, fn };
}
