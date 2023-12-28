import Link from 'next/link';
import { Navbar } from 'flowbite-react';

const Nav = () => {
    return (
        <div className="md:py-[14px] xl:px-[149px] px-2 font-medium bg-white">
            <Navbar fluid rounded className=''>
                <Navbar.Brand as={Link} href="https://www.ishangry.com/">
                    <img src="/images/Logo.svg" className="h-6 xl:h-12" alt="Hangry Logo" />
                </Navbar.Brand>
                <Navbar.Toggle className='text-black'/>
                <Navbar.Collapse className=''>
                    <Navbar.Link href="#" className='nav-hover nav-underline-animation'>
                        Tentang Kami
                    </Navbar.Link>
                    <Navbar.Link as={Link} href="#" className='nav-hover nav-underline-animation'>
                        Semua Outlet
                    </Navbar.Link>
                    <Navbar.Link href="#" className='nav-hover nav-underline-animation'>Promo</Navbar.Link>
                    <Navbar.Link href="#" className='nav-hover nav-underline-animation'>Karier</Navbar.Link>
                    <Navbar.Link href="#" className='text-primary font-bold nav-hover-primary nav-underline-animation'>Download App</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
 
export default Nav;