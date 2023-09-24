import { ModuleContext } from "../shared/models/routing/module-context";

export class AppModules{
  static readonly credits: ModuleContext = {
    id: 'credits',
    description: "Página con los creditos de los desarrolladores"
  }
  static readonly home: ModuleContext = {
    id: "home",
    description: "Página de inicio de la aplicaicon"
  }
}
