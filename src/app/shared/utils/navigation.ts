import { ModuleContext } from "@/app/shared/models/routing/module-context";
import { RouteContext } from "@/app/shared/models/routing/route-context";

export class NavigationUtils {
  static getRoute(module: ModuleContext, route: RouteContext | null, param: any | string = ''): string {
    let paramSegment = ""
    if (param instanceof String) {
      paramSegment = param ? `/${param}` : ""
    } else {
      paramSegment = param ? `/${String(param)}` : ""
    }
    return `/${module.id}${route?.uri || ''}${paramSegment}`
  }
}
