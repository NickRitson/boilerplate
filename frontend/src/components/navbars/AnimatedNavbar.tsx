import { motion, AnimatePresence } from 'framer-motion';

import useScrollPosition from '../../hooks/useScrollPosition';

interface AnimatedNavbarProps {
    color: string;
    position: number;
}

const AnimatedNavbar = ({ color = '#6d28d9', position = 90 }: AnimatedNavbarProps) => {
    const [scrollY] = useScrollPosition();

    return (
        <AnimatePresence>
            {scrollY > position &&
                <motion.nav
                    initial={{ y: '-100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        width: '100%',
                    }}
                >
                    <div className={`w-full h-16 game-nav bg-[${color}]`}>
                        <div className="flex flex-row gap-4">
                            <div><a href="/">Home</a></div>
                            <div><a href="/about">About</a></div>
                            <div><a href="/games">Games</a></div>
                            <div><a href="/contact">Contact</a></div>
                        </div>
                    </div>
                </motion.nav>
            }
        </AnimatePresence>
    );
}

export default AnimatedNavbar;