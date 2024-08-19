declare module "@remix-run/router" {
  import type {
    AgnosticIndexRouteObject as AgnosticIndexRouteObjectOriginal,
    AgnosticNonIndexRouteObject as AgnosticNonIndexRouteObjectOriginal,
  } from "@remix-run/router/dist";

  // https://github.com/remix-run/react-router/discussions/10180

  export type Handle = {
    crumb: string;
    permissionCode: string | null | undefined;
  };

  export interface AgnosticIndexRouteObject
    extends AgnosticIndexRouteObjectOriginal {
    handle: Handle;
  }

  export interface AgnosticNonIndexRouteObject
    extends AgnosticNonIndexRouteObjectOriginal {
    handle: Handle;
  }

  export * from "@remix-run/router/dist";
}
