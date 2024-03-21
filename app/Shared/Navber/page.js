"use client";
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import { usePathname } from "next/navigation";
import Link from 'next/link'
const Navber = () => {
    const pathname =usePathname()
    
    return (
        <div>
          <Navbar className="bg-slate-800" fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <Image
              src="/images/keep.svg"
              alt="keep"
              width="100"
              height="40"
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
          <Navbar.Collapse collapseType="sidebar">
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
          <Button size="sm" variant="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-metal-50">Search</span>
          </Button>
          <Button size="sm">
            Contact
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
        </div>
    );
};

export default Navber;