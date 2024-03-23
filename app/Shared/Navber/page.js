"use client";
import Image from "next/image";
import { Navbar, Button } from "keep-react";
import { usePathname } from "next/navigation";
import Link from 'next/link'
import logo from './../../../public/Brand.png'
const Navber = () => {
  const pathname = usePathname();

  return (
    <div>
      <Navbar className="bg-slate-800 drop-shadow-xl shadow-md shadow-slate-300" fluid={true}>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
              <Image
                src={logo}
                width={80}
                height={50}
                alt="Picture of the author"
              />
            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden text-white items-center justify-between gap-8"
            >

              <li>
                <Link className={`link ${pathname === '/' ? 'text-red-600' : 'text-red-400'}`} href="/">
                  Home
                </Link>
              </li>
              <li>home</li>
              {/* <Navbar.Link className="text-white" linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="About" /> */}



            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar bg-white">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                <Navbar.Link linkName="Home" />
                <Navbar.Link linkName="Projects" />
                <Navbar.Link linkName="Blogs" />
                <Navbar.Link linkName="News" />
                <Navbar.Link linkName="Resources" />
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2">

            <Navbar.Toggle className="text-white rounded bg-white">tttt</Navbar.Toggle>
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default Navber;