import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Loader2 } from "lucide-react";
import { useOnboarding } from "../../_context/onboarding-context";
import { useFetch } from "../../_hooks/user";
import { updateUser } from "@/actions/user";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function CompletionStep() {
  const router = useRouter();
  const { data } = useOnboarding();
  const {
    loading: updateLoading,
    fn: updateFetchData,
    data: updateData,
  } = useFetch(updateUser);

  async function handleComplete() {
    try {
      await updateFetchData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (updateData && !updateLoading) {
      router.push("/dashboard");
    }
  }, [updateData, router, updateLoading]);

  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
          <CheckCircle className="h-16 w-16 text-white" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        Profile Complete!
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-400 mb-8 max-w-2xl"
      >
        Thank you for completing your profile. Your AI Career Coach is now ready
        to provide personalized guidance based on your background and goals.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <HoverBorderGradient
          onClick={handleComplete}
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 py-4 px-8"
        >
          {updateLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Start Your AI Carrer Journey
              <ChevronRight className="ml-2 h-5 w-5" />
            </>
          )}
        </HoverBorderGradient>
      </motion.div>
    </div>
  );
}
