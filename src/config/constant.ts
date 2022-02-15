export const ROUTES = {
  HOME: '/',
  EXPLORE_PLAN: '/explore/plan',
  EXPLORE_ECOLOGICAL: '/explore/ecological',
  DEVELOPERS_LABORATORY: '/developers/laboratory',
  BYTE: '/byte',
  COMMUNITY_PROFILE: '/community/profile',
  COMMUNITY_ACTIVITIES: '/community/activities',
  COMMUNITY_ACTIVITIES_DETAIL: '/community/activities/:id',
  COMMUNITY_PLAN: '/community/plan',
  CONTACT_US: '/contact',
  BROWSER: 'https://www.dcfsscan.io/',
  DCFS_LICENSE: '/docs/DCFS_Foundation_License.pdf',
  DCFS_DOCS: 'https://docs.dcfsscan.io/',
  DCFS_WHITE_PAPER: '/docs/DCFS_White_Paper_V1.0.pdf',
  GET_COMMUNITY_ACTIVITIES_DETAIL_ROUTE: (id: any) => ROUTES.COMMUNITY_ACTIVITIES_DETAIL.replace(':id', id)
}
