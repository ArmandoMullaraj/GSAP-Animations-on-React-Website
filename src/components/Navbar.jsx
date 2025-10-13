import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants'
import { ScrollTrigger } from 'gsap/all'

function Navbar() {
    useGSAP(() => {
        let lastDirection = null;

        ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
                if (self.direction !== lastDirection) {
                    if (self.direction === 1) {
                        gsap.to('nav', { y: -80, duration: 0.5, ease: 'power1.out' });
                    } else if (self.direction === -1) {
                        gsap.to('nav', { y: 0, duration: 0.5, ease: 'power1.out' });
                    }
                    lastDirection = self.direction;
                }
            }
        });
    });


    return (
        <nav>
            <div>
                <a href='#home' className='flex items-center gap-2'>
                    <img src='/images/logo.png' alt='logo' width="38" height="38" />
                    <p>The Pour House</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar