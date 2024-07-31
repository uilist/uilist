import { InjectionKey } from 'vue';
import { useUserStore } from '/@/store/modules/user';

/**
 * 使用权限码判断的hook
 * const isAuth = useAuth(String)
 * params: String | Number = "1101" || "1101,1103" || 1105
 * 注：当权限码为数字0开头，请用字符串代替
 */
export const useAuth = () => {
  const checkAuth = (authCodes: string | number | unknown): boolean => {
    if (!authCodes) return true;
    const userStore = useUserStore();
    const codes = authCodes.toString().split(',');
    const rules = userStore.getRules;
    return rules.some((role) => codes.includes(role));
  };
  return {
    checkAuth,
  };
};
export const checkAuth: InjectionKey<() => boolean> = Symbol();
