export const routeConfig = {
  home: {
    route: 'pages/index/index',
    params: { id: '' },
  },
  'example/atIcon': {
    route: 'pages/example/atIcon/index',
    params: {},
  },
  'example/customIcon': {
    route: 'pages/example/customIcon/index',
    params: {},
  },
  'example/api': {
    route: 'pages/example/api/index',
    params: {},
  },
}
export const routes = Object.values(routeConfig).map(({ route }) => route)

export type Routes = typeof routeConfig
export type RouteKeys = keyof typeof routeConfig
