import gsap from "gsap";
import { TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { RefObject } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target: string,  animationProps: {}, scrollProps?: {}) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger:{
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      end: 'bottom 0',
      ...scrollProps
    }
  })
}

export const animateWithGsapTimeline = (
  timeline: TimelineLite,
  rotationRef: RefObject<THREE.Group>,
  rotationState: number,
  firstTarget: string,
  secondTarget: string,
  animationProps: {
    transform: string;
    duration: number;
  }
) => {
  timeline.to(rotationRef.current!.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
