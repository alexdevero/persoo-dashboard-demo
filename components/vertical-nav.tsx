import Link from 'next/link'

export function VerticalNav() {
  return (
    <header className="">
      <nav className="nav flex-column">
        <ul>
          <li>
            <Link href="/accounts">
              <a>Accounts</a>
            </Link>
          </li>
          <li>
            <Link href="/statuses">
              <a>Statuses</a>
            </Link>
          </li>
          <li>
            <Link href="/statistics">
              <a>Statistics</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a>Users</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
