import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import logo from "/public/logo1.png"
import logo1 from "/public/logo11.png"

import Image from 'next/image';
import ReactCountryFlag from "react-country-flag"


export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative mx-auto duration-200 bg-white">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-16 text-small-regular">
          
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase flex items-center"
              data-testid="nav-store-link"
            >
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full">
            <LocalizedClientLink
              className="hover:text-ui-fg-base font-bold text-lg"
              href="/account"
              data-testid="nav-account-link"
            >
              Account
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base font-bold text-lg"
              href="/cart"
              data-testid="nav-cart-link"
            >
              Cart
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base font-bold text-lg"
              href="/help"
              data-testid="nav-help-link"
            >
              Help
            </LocalizedClientLink>
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{
                width: '20px',
                height: '15px',
              }}
              title="US"
            />
          </div>

        </nav>
        <hr className="border-t border-ui-border-base" />

        <div className="flex justify-center items-center py-4">
          <Image
            src={logo}
            alt="Logo"
            style={{
              width:"100px",
              height:"100px"
            }}
          />
          <Image
            src={logo1}
            alt="Logo"
            style={{
              width:"150px",
              height:"50px"
            }}
          />

          <input
            type="text"
            placeholder="Search"
            className="border rounded p-2 w-1/2 ml-4"
          />
          <button className="ml-2 px-4 py-2 text-white rounded" style={{background:"#A15149"}}> 
            Search
          </button>
        </div>
        <hr className="border-t border-ui-border-base" />
        <nav className="content-container flex justify-center py-2 text-ui-fg-subtle">
          <LocalizedClientLink
            href="/armours"
            className="px-4 hover:text-ui-fg-base font-bold italic" 
          >
            Armours
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/clothing"
            className="px-4 hover:text-ui-fg-base font-bold italic"
          >
            Clothing
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/weaponry"
            className="px-4 hover:text-ui-fg-base font-bold italic"
          >
            Weaponry
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/armours"
            className="px-4 hover:text-ui-fg-base font-bold italic"
          >
            Armours
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/clothing"
            className="px-4 hover:text-ui-fg-base font-bold italic"
          >
            Clothing
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/weaponry"
            className="px-4 hover:text-ui-fg-base font-bold italic"
          >
            Weaponry
          </LocalizedClientLink>
        </nav>
        <hr className="border-t border-ui-border-base" />

      </header>
    </div>
  )
}
