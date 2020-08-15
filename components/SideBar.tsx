import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SideBar({ posts }) {
  const router = useRouter()

  return (
    <>
      <div className="grid__item grid__item--tablet-up-quarter" id="SidebarNav">
        <ul className="in-page-menu in-page-menu--vertical">
          {posts.map((i) => (
            <li key={i.id}>
              <Link href="/posts/[id]" as={`/posts/${i.id}`}>
                <a className={router.query.id === i.id ? 'is-active' : ''}>{i.title}</a>
              </Link>
            </li>
          ))}
        </ul>

        <p>
          <a href="https://github.com/keidarcy/shopi-notes" className="link--external">
            GitHub repository
          </a>
        </p>
      </div>
    </>
  )
}

{
  /* <ul class="in-page-menu in-page-menu--vertical">
  {% for item in site.data.nav.sidebar %}
    <li>
      <a class="{% if item.url == page.url %}is-active{% endif %}" href="{{ item.url | relative_url }}">{{ item.title }}</a>
      {% if item.section == page.section %}
        <ul>
          {% for subitem in item.subnav %}
            <li><a class="{% if subitem.url == page.url %}is-active{% endif %}" href="{{ subitem.url | relative_url  }}">{{ subitem.title }}</a></li>
          {% endfor %}
        </ul>
      {% endif %}
    </li>
  {% endfor %}
</ul> */
}
