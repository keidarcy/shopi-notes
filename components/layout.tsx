import SideBar from './SideBar'
import Footer from './Footer'
import Header from './Header'

const TopHero = () => (
  <section className="section section--tight section-padding section--padding-top-only ui-hero">
    <div className="grid">
      <div className="grid__item">
        <h1 className="section-heading__heading heading--2 ui-hero__header gutter-bottom--reset--mobile">
          Darcy's Shopify Notes
        </h1>
        <p className="section-heading__kicker heading--5 hide--mobile">
          not shopify offical
        </p>
        <p className="text-major hide--mobile ui-hero__header">
          won't be held responsible for any inaccuracies
        </p>
      </div>
    </div>
  </section>
)

export default function Layout({
  children,
  posts
}: {
  children: React.ReactNode
  posts: { id: string; title: string; date: string }[]
}) {
  return (
    <>
      <Header />
      <div id="PageContainer">
        <TopHero />
        <section id="Content">
          <div className="grid">
            <SideBar posts={posts} />
            <div className="grid__item grid__item--tablet-up-three-quarters sticky-menu-content">
              <main role="main" id="Main">
                {children}
              </main>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
