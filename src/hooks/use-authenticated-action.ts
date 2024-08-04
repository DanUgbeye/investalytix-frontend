import { SubscriptionPlanName } from "@/modules/subscription/types";
import { useAppStore } from "@/store";

export default function useAuthenticatedAction() {
  const user = useAppStore((state) => state.user);
  const { toggleLoginModal, toggleUpgradePlanModal } = useAppStore();

  return function authenticatedAction(
    action: () => void,
    options?: {
      plan?: SubscriptionPlanName[];
    }
  ) {
    const { plan } = options || {};

    if (!user) {
      toggleLoginModal(true);
    } else if (plan !== undefined && !plan.includes(user.plan)) {
      toggleUpgradePlanModal();
    } else {
      action();
    }
  };
}
