import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/all'

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' })
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            }, ease: 'power1.out'
        })

        timeline.from(titleSplit.words, {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
        .from('#contact h3, #contact p', {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
        .to('#f-right-leaf', { y: '-50', duration: 1, ease: 'power1.out' })
        .to('#f-left-leaf', { y: '50', duration: 1, ease: 'power1.out' }, '<')
    })
    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

            <div className="content">
                <h2>Where to Find Us</h2>

                <div>
                    <h3>Visit Our Bar</h3>
                    <p>630 King Street Hereford HR94 6VS</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>(+44) 07020053559</p>
                    <p>hello@thepourhouse.co.uk</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>{time.day}: {time.time}</p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                                <img src={social.icon} alt={social.id} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact