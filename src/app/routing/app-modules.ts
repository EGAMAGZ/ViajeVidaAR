import { ModuleContext } from "../shared/models/routing/module-context";

export class AppModules {
  static readonly credits: ModuleContext = {
    id: 'credits',
    description: "Página con los creditos de los desarrolladores"
  }
  static readonly home: ModuleContext = {
    id: "home",
    description: "Página de inicio de la aplicaicon"
  }
  static readonly travel: ModuleContext = {
    id: "travel",
    description: "Página de obras de arte"
  }
  static readonly instructions: ModuleContext = {
    id: "instructions",
    description: "Pagina con las instrucciones de uso"
  }
}
