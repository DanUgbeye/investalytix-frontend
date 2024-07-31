import { SUBSCRIPTION_PLAN_NAMES } from "@/modules/subscription/types";
import { UserData } from "../types";

export class UserUtils {
  getUserInitials(user?: UserData): string {
    if (!user) return "";
    const { firstname, lastname } = user;
    let initials: string = "";

    if (lastname && firstname) {
      initials = `${firstname[0]}${lastname[0] || ""}`;
    }

    if (!lastname && firstname) {
      initials = `${firstname[0]}${firstname[1] || ""}`;
    }

    if (lastname && !firstname) {
      initials = `${lastname[0]}${lastname[1] || ""}`;
    }

    return initials.toUpperCase();
  }

  isPremiumPlanUser(user: UserData) {
    return user.plan === SUBSCRIPTION_PLAN_NAMES.PREMIUM;
  }

  isFreePlanUser(user: UserData) {
    return user.plan === SUBSCRIPTION_PLAN_NAMES.FREE;
  }
}

const userUtils = new UserUtils();
export default userUtils;
