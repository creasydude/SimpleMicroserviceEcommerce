import { AuthService } from "../../../services";
import { ResolverContext } from "../../../interfaces/express.interface";

const refreshToken = async (
  parent: any,
  args: any,
  context: ResolverContext
) => {
  const Authorization = `Authorization=${context.req.cookies?.Authorization}`;
  const { data, status } = await AuthService.refreshToken({
    Authorization,
  });
  return {
    status,
    accessToken: data.accessToken,
  };
};

export { refreshToken };
