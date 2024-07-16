import { ServerUserData, UserData } from "../types";

export function transformUserToServer(data: UserData): ServerUserData;
export function transformUserToServer(
  data: Partial<UserData>
): Partial<ServerUserData>;
export function transformUserToServer(
  data: UserData | Partial<UserData>
): ServerUserData | Partial<ServerUserData> {
  let convertedData;
  convertedData = { ...data };

  const { id, ...rest } = convertedData;

  const conflicts = {
    _id: id,
    // profileImage: profileImage
    //   ? transformUploadedFileToServer(profileImage)
    //   : undefined,
  };

  convertedData = { ...rest, ...conflicts };

  return convertedData as ServerUserData | Partial<ServerUserData>;
}

export function transformUserToClient(data: ServerUserData): UserData;
export function transformUserToClient(
  data: Partial<ServerUserData>
): Partial<UserData>;
export function transformUserToClient(
  data: ServerUserData | Partial<ServerUserData>
): UserData | Partial<UserData> {
  let convertedData;
  convertedData = { ...data };

  const { _id, ...rest } = convertedData || {};

  const conflicts = {
    id: _id,
    // profileImage: profileImage
    //   ? transformUploadedFileToClient(profileImage)
    //   : undefined,
  };

  convertedData = { ...rest, ...conflicts };

  return convertedData as UserData | Partial<UserData>;
}
