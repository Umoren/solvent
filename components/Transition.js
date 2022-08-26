import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = ({ children }) => {
    const { asPath } = useRouter();
    const variants = {
        inactive: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            },
        },
        out: {
            opacity: 0,
            y: -100,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        },
        in: {
            y: 100,
            opacity: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <div className="effect-1">
            <AnimatePresence
                initial={false}
                exitBeforeEnter
            >
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate="inactive"
                    initial="in"
                    exit="out">
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Transition;