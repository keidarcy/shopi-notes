import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-nav-container">
      <div className="marketing-nav-wrapper">
        <nav
          className="marketing-nav--skin-dark marketing-nav marketing-nav--primary"
          id="ShopifyMainNav"
        >
          <div className="marketing-nav__logo color-white">
            <Link href="/">
              <a className="marketing-nav__logo__shopify">DARCY' SHOPIFY</a>
            </Link>
          </div>
          <span className="marketing-nav__items display--expanded-nav"></span>
        </nav>
      </div>
    </header>
  )
}
