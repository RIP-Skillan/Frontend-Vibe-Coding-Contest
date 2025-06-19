import BrandKitSelector from "../Components/CardBuild";
import FluidObject from "../Components/FluidObject";
import AnimatedBarGraph from "../Components/Graph";
import Parallax from "../Components/Parallax";
import BSSSection from "../Components/Services";
import { motion, useScroll, useSpring } from "framer-motion";


    

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
  })

  return (
    <>
      <div className="py-10">
        <motion.div
          id="scroll-indicator" className="z-20"
          style={{
              scaleX: scrollYProgress,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: 10,
              originX: 0,
              backgroundColor: "#ff0088",
          }}
        />
        <Parallax />
        <FluidObject />
        <BrandKitSelector />
        <BSSSection />
        <AnimatedBarGraph />
      </div>
    </>
  )
}
