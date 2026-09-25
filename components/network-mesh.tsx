"use client"

import { useEffect, useRef } from "react"

type NetworkMeshProps = { className?: string; desktopNodes?: number; mobileNodes?: number }
type Node = { x: number; y: number; anchorX: number; anchorY: number; phase: number; radius: number }

// Composed to follow the reference's asymmetric, lower-hero network silhouette.
const meshShape = [
  [0.045, 0.2], [0.065, 0.3], [0.065, 0.42], [0.095, 0.53], [0.115, 0.67],
  [0.17, 0.4], [0.19, 0.71], [0.245, 0.86], [0.285, 0.63], [0.315, 0.76],
  [0.36, 0.55], [0.405, 0.72], [0.445, 0.9], [0.47, 0.49], [0.5, 0.79],
  [0.555, 0.93], [0.59, 0.7], [0.64, 0.61], [0.68, 0.75], [0.71, 0.47],
  [0.755, 0.33], [0.77, 0.64], [0.82, 0.55], [0.845, 0.7], [0.875, 0.28],
  [0.9, 0.61], [0.94, 0.46], [0.95, 0.73], [0.975, 0.25], [0.975, 0.42],
  [0.13, 0.36], [0.15, 0.58], [0.245, 0.54], [0.34, 0.61], [0.39, 0.82],
  [0.445, 0.62], [0.53, 0.6], [0.6, 0.82], [0.66, 0.5], [0.73, 0.58],
  [0.83, 0.43], [0.92, 0.55],
] as const

const meshLinks = [
  [0, 1], [1, 2], [1, 5], [2, 3], [2, 5], [2, 8], [3, 4], [3, 5], [3, 6],
  [4, 6], [4, 7], [5, 6], [5, 8], [5, 10], [6, 8], [6, 9], [6, 10], [6, 11],
  [6, 13], [7, 9], [7, 12], [8, 9], [8, 10], [8, 11], [8, 13], [9, 11],
  [9, 12], [9, 14], [10, 11], [10, 13], [11, 12], [11, 13], [11, 14], [12, 15],
  [12, 16], [13, 14], [13, 16], [13, 17], [14, 15], [14, 16], [14, 18], [15, 16],
  [16, 17], [16, 18], [16, 19], [17, 18], [17, 19], [17, 20], [18, 19], [18, 21],
  [19, 20], [19, 21], [19, 22], [20, 22], [20, 24], [21, 22], [21, 23], [21, 25],
  [22, 23], [22, 24], [22, 25], [23, 25], [23, 27], [24, 25], [24, 26], [24, 28],
  [25, 26], [25, 27], [25, 29], [26, 28], [26, 29], [27, 29], [28, 29],
  [5, 30], [8, 30], [2, 30], [3, 31], [6, 31], [8, 31], [6, 32], [8, 32],
  [10, 32], [8, 33], [10, 33], [11, 33], [9, 34], [11, 34], [12, 34],
  [11, 35], [13, 35], [14, 35], [14, 36], [16, 36], [17, 36], [16, 37],
  [18, 37], [21, 37], [17, 38], [19, 38], [20, 38], [19, 39], [21, 39],
  [22, 39], [22, 40], [24, 40], [26, 40], [25, 41], [26, 41], [29, 41],
] as const

const createNodes = (count: number, width: number, height: number): Node[] =>
  Array.from({ length: count }, (_, index) => {
    const shapeIndex = Math.round(index * (meshShape.length - 1) / Math.max(count - 1, 1))
    const [normalizedX, normalizedY] = meshShape[shapeIndex]
    const seed = Math.sin(index * 9283.17) * 10000
    const phase = (seed - Math.floor(seed)) * Math.PI * 2
    const anchorX = width * normalizedX
    const anchorY = height * normalizedY
    return { x: anchorX, y: anchorY, anchorX, anchorY, phase, radius: index % 7 === 0 ? 4.6 : 2.65 }
  })

export default function NetworkMesh({ className, desktopNodes = 42, mobileNodes = 24 }: NetworkMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    let nodes: Node[] = []
    let frameId = 0
    let width = 0
    let height = 0

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = Math.max(bounds.width, 1)
      height = Math.max(bounds.height, 1)
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      nodes = createNodes(width < 640 ? mobileNodes : desktopNodes, width, height)
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      meshLinks.forEach(([start, end]) => {
        const node = nodes[start]
        const other = nodes[end]
        if (!node || !other) return
        context.beginPath()
        context.moveTo(node.x, node.y)
        context.lineTo(other.x, other.y)
        context.strokeStyle = "rgba(27, 99, 226, 0.5)"
        context.lineWidth = 1.2
        context.stroke()
      })

      nodes.forEach((node) => {
        if (node.radius > 3) {
          const glow = context.createRadialGradient(node.x, node.y, 0, node.x, node.y, 16)
          glow.addColorStop(0, "rgba(24, 105, 231, 0.44)")
          glow.addColorStop(1, "rgba(24, 105, 231, 0)")
          context.fillStyle = glow
          context.beginPath()
          context.arc(node.x, node.y, 16, 0, Math.PI * 2)
          context.fill()
        }
        context.beginPath()
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        context.fillStyle = node.radius > 3 ? "rgba(16, 92, 224, 0.94)" : "rgba(58, 125, 233, 0.84)"
        context.fill()
        context.strokeStyle = "rgba(255, 255, 255, 0.9)"
        context.lineWidth = 0.7
        context.stroke()
      })
    }

    const animate = (time: number) => {
      nodes.forEach((node) => {
        node.x = node.anchorX + Math.sin(time * 0.001 + node.phase) * 3.5
        node.y = node.anchorY + Math.cos(time * 0.0008 + node.phase) * 2.7
      })
      draw()
      frameId = window.requestAnimationFrame(animate)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()
    draw()
    if (!mediaQuery.matches) frameId = window.requestAnimationFrame(animate)
    const onMotionChange = (event: MediaQueryListEvent) => { window.cancelAnimationFrame(frameId); if (event.matches) draw(); else frameId = window.requestAnimationFrame(animate) }
    mediaQuery.addEventListener("change", onMotionChange)
    return () => { observer.disconnect(); mediaQuery.removeEventListener("change", onMotionChange); window.cancelAnimationFrame(frameId) }
  }, [desktopNodes, mobileNodes])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}
