import { ModuleContext } from "@/app/shared/models/routing/module-context";
import { RouteContext } from "@/app/shared/models/routing/route-context";

export class NavigationUtils {
  static getRoute(module: ModuleContext, route: RouteContext | null, params?: Record<string, any>): string {
    let url = `/${module.id}${route?.uri || ''}`;

    for (const key in params) {
      const value = params[key];
      if (value instanceof String) {
        url = url.replace(`:${key}`, String(value))
      } else {
        url = url.replace(`:${key}`, JSON.stringify(value))
      }
    }
    return url
  }
}
