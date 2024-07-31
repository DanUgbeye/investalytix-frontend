import { SubscriptionPlanName } from "@/modules/subscription/types";
import { useAppStore } from "@/store";

export default function useAuthenticatedAction() {
  const user = useAppStore((state) => state.user);
  const { toggleLoginModal } = useAppStore();

  return function authenticatedAction(
    action: () => void,
    options?: {
      plan?: SubscriptionPlanName;
    }
  ) {
    const { plan } = options || {};

    if (!user || (plan !== undefined && user.plan !== plan)) {
      toggleLoginModal(true);
    } else {
      action();
    }
  };
}
