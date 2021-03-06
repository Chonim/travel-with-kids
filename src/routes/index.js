/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  {
    path: '/',
    name: 'MainPage',
    component: () =>
      import('@/components/MainPage')
  },
  {
    path: '/map',
    name: 'Map',
    component: () =>
      import('@/components/Map.vue')
  }
]
