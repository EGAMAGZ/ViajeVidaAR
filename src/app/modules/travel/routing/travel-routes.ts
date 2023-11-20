import { RouteContext } from "@/app/shared/models/routing/route-context";

export class TravelRoutes {
  static readonly menu: RouteContext = {
    uri: '/menu',
    name: 'Menu de obras de arte'
  }
  static readonly artwork: RouteContext = {
    uri: '/artwork/:id',
    name: 'Obra de Arte'
  }
}
