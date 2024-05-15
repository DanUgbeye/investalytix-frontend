import { UserData } from "../user.types";

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
}

const userUtils = new UserUtils();
export default userUtils;
