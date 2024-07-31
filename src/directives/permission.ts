/**
 * Global authority directive
 * Used for fine-grained control of component permissions
 * @Example v-auth="RoleEnum.TEST"
 */
import type { App, Directive, DirectiveBinding } from 'vue';

import { RoleEnum } from '@/enums/roleEnum';
import { useAuth } from '/@/hooks/web/useAuth';

const { checkAuth } = useAuth();

function isAuth(el: Element, binding: any) {
  const value = binding.value;
  if (!value) return;
  if (!checkAuth(value)) {
    el.parentNode?.removeChild(el);
  }
}

const mounted = (el: Element, binding: DirectiveBinding<string | string[] | RoleEnum[]>) => {
  isAuth(el, binding);
};

const authDirective: Directive = {
  mounted,
};

export function setupPermissionDirective(app: App) {
  app.directive('auth', authDirective);
}

export default authDirective;
