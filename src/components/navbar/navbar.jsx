import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import "./navbar.css";
const navigation = [
  { name: 'New Post', href: '#', current: true },
  { name: 'Suggestions', href: '#', current: false },
  { name: 'Organizations', href: '#', current: false },
  { name: 'Games', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="#14B8A6"
                />
              </svg>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-red-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
