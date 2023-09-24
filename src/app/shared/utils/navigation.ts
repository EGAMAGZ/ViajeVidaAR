import { ModuleContext } from "@/app/shared/models/routing/module-context";
import { RouteContext } from "@/app/shared/models/routing/route-context";

export class NavigationUtils {
  static getRoute(module: ModuleContext, route: RouteContext | null, suffix: string = ''): string {
    return `/${module.id}${route?.uri || ''}${suffix}`
  }
}
