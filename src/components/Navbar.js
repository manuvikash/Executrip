export default function Navbar() {
  return (
    <nav class="bg-grey-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-grey-400 hover:bg-grey-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />

              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto lg:hidden"
                src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png?20160308165539"
                alt="Your Company"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png?20160308165539"
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="bg-grey-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  href="#"
                  class="text-grey-300 hover:bg-grey-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Discover
                </a>

                <a
                  href="#"
                  class="text-grey-300 hover:bg-grey-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              class="rounded-full bg-grey-800 p-1 text-grey-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-grey-800"
            >
              <span class="sr-only">View notifications</span>

              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="flex rounded-full bg-grey-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-grey-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <a href="/">
                    <img
                      class="h-10 w-10"
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzIuMDAwMDJ2LTE3Mi4wMDAwMmgxNzIuMDAwMDJ2MTcyLjAwMDAyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik02Mi4xMTExMSwyNi4yNzc3OGMtMTAuNTU0MTEsMCAtMTkuMTExMTEsOC41NTcgLTE5LjExMTExLDE5LjExMTExdjgxLjIyMjIyYzAsMTAuNTU0MTEgOC41NTcsMTkuMTExMTEgMTkuMTExMTEsMTkuMTExMTFoNDcuNzc3NzhjMTAuNTU0MTEsMCAxOS4xMTExMSwtOC41NTcgMTkuMTExMTEsLTE5LjExMTExdi0xNy40ODc0MWMtNC45MTYzMyw0Ljg5MjQ0IC05Ljg2MTMzLDExLjAwOTQ5IC0xOS4xMTExMSw4LjY5NzA1djcuNTk1OTJjMCwwLjY1OTMzIC0wLjUzNTExLDEuMTk0NDQgLTEuMTk0NDQsMS4xOTQ0NGgtNDUuMzg4ODljLTAuNjU5MzMsMCAtMS4xOTQ0NCwtMC41MzUxMSAtMS4xOTQ0NCwtMS4xOTQ0NHYtNzguODMzMzNjMCwtMC42NTkzMyAwLjUzNTExLC0xLjE5NDQ0IDEuMTk0NDQsLTEuMTk0NDRoNDUuMzg4ODljMC42NTkzMywwIDEuMTk0NDQsMC41MzUxMSAxLjE5NDQ0LDEuMTk0NDR2Ny41OTU5MmM5LjMwOTUsLTIuMzI2NzggMTQuNTUwNzIsNC4xODQ0NCAxOS4xMTExMSw4LjY5NzA1di0xNy40ODc0MWMwLC0xMC41NTQxMSAtOC41NTcsLTE5LjExMTExIC0xOS4xMTExMSwtMTkuMTExMTF6TTExMy4zOTI5LDYzLjMwNTU2Yy0xLjUyNzk5LDAuMDA1MzggLTMuMDU3OTYsMC41OTQzMSAtNC4yMjI1NSwxLjc2MzY3Yy0yLjMyMiwyLjM0MTExIC0yLjMwNjA2LDYuMTIwNzEgMC4wMzI2Niw4LjQ0NTFsNS4zNTYzNCw1LjMxOTAxaC0zMS4wNjk1NWMtMy45NTgzOSwwIC03LjE2NjY3LDMuMjA4MjggLTcuMTY2NjcsNy4xNjY2N2MwLDMuOTU4MzkgMy4yMDgyOCw3LjE2NjY3IDcuMTY2NjcsNy4xNjY2N2gzMS4wNzQyMmwtNS4zNTYzNCw1LjMxOTAxYy0yLjM0MTExLDIuMzI0MzkgLTIuMzU3MDUsNi4xMDM5OSAtMC4wMzI2Niw4LjQ0NTFjMS4xNjgxNywxLjE3NTMzIDIuNzAwNDksMS43NjM2NyA0LjIzNjU0LDEuNzYzNjdjMS41MTkzMywwIDMuMDQyNzcsLTAuNTc3MDYgNC4yMDg1NSwtMS43MzU2OGwxNi44NDM1MywtMTYuNzIyMjJjMS4xMjc1NiwtMS4xMjAzOSAxLjc2MzY3LC0yLjY1MDIxIDEuNzYzNjcsLTQuMjQxMjFjMCwtMS41OTEgLTAuNjMzNzMsLTMuMTEzNzcgLTEuNzYzNjcsLTQuMjM2NTVsLTE2Ljg0MzUzLC0xNi43MjIyMmMtMS4xNzA1NiwtMS4xNTk4MSAtMi42OTkyMiwtMS43MzYzOSAtNC4yMjcyMSwtMS43MzEwMXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                      alt=""
                    />
                  </a>
                </button>
              </div>

              {/* <div
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-grey-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-grey-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-grey-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <a
            href="#"
            class="bg-grey-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>

          <a
            href="#"
            class="text-grey-300 hover:bg-grey-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>

          <a
            href="#"
            class="text-grey-300 hover:bg-grey-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>

          <a
            href="#"
            class="text-grey-300 hover:bg-grey-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}
