import { ROUTES } from '@/config/constant'
import useScrollToTop from '@/hooks/useScrollToTop'
import Loading from '@c/Loading'
import { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('@v/Home'))
const ExplorePlan = lazy(() => import('@v/Explore/Plan'))
const ExploreEcological = lazy(() => import('@v/Explore/Ecological'))
const DevelopersLaboratory = lazy(() => import('@/views/Developers/Laboratory'))
const Byte = lazy(() => import('@v/Byte'))
const CommunityProfile = lazy(() => import('@v/Community/Profile'))
const CommunityActivities = lazy(() => import('@v/Community/Activities'))
const CommunityActivitiesDetail = lazy(() => import('@v/Community/Activities/Detail'))
const CommunityPlan = lazy(() => import('@v/Community/Plan'))
const AboutUs = lazy(() => import('@/views/AboutUs'))

const Layout: React.FC = () => {
  useScrollToTop()

  return (
    <section>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.EXPLORE_PLAN} component={ExplorePlan} />
          <Route exact path={ROUTES.EXPLORE_ECOLOGICAL} component={ExploreEcological} />
          <Route exact path={ROUTES.DEVELOPERS_LABORATORY} component={DevelopersLaboratory} />
          <Route exact path={ROUTES.BYTE} component={Byte} />
          <Route exact path={ROUTES.COMMUNITY_PROFILE} component={CommunityProfile} />
          <Route exact path={ROUTES.COMMUNITY_ACTIVITIES} component={CommunityActivities} />
          <Route exact path={ROUTES.COMMUNITY_ACTIVITIES_DETAIL} component={CommunityActivitiesDetail} />
          <Route exact path={ROUTES.COMMUNITY_PLAN} component={CommunityPlan} />
          <Route exact path={ROUTES.CONTACT_US} component={AboutUs} />
          <Redirect from="*" to={ROUTES.HOME} />
        </Switch>
      </Suspense>
    </section>
  )
}

export default Layout
