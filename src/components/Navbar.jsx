import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants'

function Navbar() {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        })

        navTween.fromTo(
            'nav',
            {
                y: 0,
                backgroundColor: 'transparent'
            },
            {
                y: -80,
                duration: 1,
                ease: 'power1.out'
            }
        );

    })

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