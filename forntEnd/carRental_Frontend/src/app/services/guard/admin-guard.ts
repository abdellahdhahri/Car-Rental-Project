import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('key');
  const role = sessionStorage.getItem('role');
  const router = inject(Router);

  if (token=='admin@official.com') {
    return true;
  } else {
    router.navigate(['denied']);
    return false;
  }
};
