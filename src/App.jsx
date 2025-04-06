import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import { WelcomeScreen } from './components/WelcomeScreen'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showCurtain, setShowCurtain] = useState(false);
  
  useEffect(() => {
    // Show welcome screen for 4 seconds
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setShowCurtain(true);
    }, 3000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    // If curtain is showing, set a timer to hide it
    if (showCurtain) {
      const curtainTimer = setTimeout(() => {
        setShowCurtain(false);
      }, 100);

      return () => clearTimeout(curtainTimer);
    }
  }, [showCurtain]);

  return (
    <>
    <AnimatedBackground/>
    <div className=' relative'>
      {/* Welcome screen with exit animation */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            key="welcome"
            className="fixed inset-0 z-30"
            exit={{
              y: "100%",
              transition: { duration: 1, ease: "easeInOut" }
            }}
          >
            <WelcomeScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Curtain animation */}
      <AnimatePresence>
        {showCurtain && (
          <motion.div
            key="curtain"
            className="fixed inset-0 bg-transparent z-20"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
     </>
  );
}

export default App;