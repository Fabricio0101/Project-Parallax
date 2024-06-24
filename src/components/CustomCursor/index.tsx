import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const followerRef = useRef<HTMLDivElement>(null)

    const moveCursor = (e: MouseEvent): void => {
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.4,
        })
        gsap.to(followerRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.9,
        })
    }

    useEffect(() => {
        gsap.set(cursorRef, {
            xPercent: 100,
            yPercent: 100
        })
        gsap.set(followerRef, {
            xPercent: -20,
            yPercent: -20
        })
        window.addEventListener("mousemove", moveCursor)
    }, [])

    return (
        <div>
            <div ref={cursorRef} className="cursor"></div>
            <div ref={followerRef} className="follower-cursor"></div>
        </div>
    )
}