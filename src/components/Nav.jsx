import Link from 'next/link';
import { Navbar } from 'flowbite-react';

const Nav = () => {
    return (
        <div className="xl:py-[14px] xl:px-[149px] px-2 font-medium bg-white">
            <Navbar fluid rounded className=''>
                <Navbar.Brand as={Link} href="https://www.ishangry.com/">
                    <img src="/images/Logo.svg" className="h-6 xl:h-12" alt="Hangry Logo" />
                </Navbar.Brand>
                <Navbar.Toggle className='focus:border-none'/>
                <Navbar.Collapse className=''>
                    <Navbar.Link href="#" className='nav-hover'>
                        Tentang Kami
                    </Navbar.Link>
                    <Navbar.Link as={Link} href="#" className='nav-hover'>
                        Semua Outlet
                    </Navbar.Link>
                    <Navbar.Link href="#" className='nav-hover '>Promo</Navbar.Link>
                    <Navbar.Link href="#" className='nav-hover'>Karier</Navbar.Link>
                    <Navbar.Link href="#" className='text-primary hover:text-primary font-bold nav-hover'>Download App</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
 
export default Nav;