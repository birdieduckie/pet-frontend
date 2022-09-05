// import { useRef, useCallback, useEffect } from 'react'
// import { animated, useTransition } from 'react-spring'
// import styled from 'styled-components'

// import { Portal } from './atoms'

// export const Overlay = styled(animated.div)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;

//   overflow: auto;
//   background: ${({ isOverlay, overlayColor }) => (isOverlay ? overlayColor : 'transparent')};
// `

// const defaultTtransition = {
//   from: { opacity: 0 },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 },
//   delay: 100,
// }

// const Modal = ({
//   portalId,
//   opened = false,
//   focusOnIndex = 0,
//   isOverlay = true,
//   overlayColor = 'rgba(0, 0, 0, 0.7)',
//   closeOnOverlayClick = true,
//   onClose,
//   transition = defaultTtransition,
//   children,
// }) => {
//   const overlayRef = useRef(null)

//   const onKeyUp = useCallback(
//     (e) => {
//       if (e.key === 'Escape') {
//         onClose()
//       }
//     },
//     [onClose],
//   )

//   useEffect(() => {
//     if (opened) {
//       window.addEventListener('keyup', onKeyUp)
//     } else {
//       window.removeEventListener('keyup', onKeyUp)
//     }

//     return () => window.removeEventListener('keyup', onKeyUp)
//   }, [opened, onKeyUp])

//   const onOverlayClick = useCallback(
//     (e) => {
//       if (closeOnOverlayClick && e.target === overlayRef.current) {
//         e.preventDefault()

//         onClose()
//       }
//     },
//     [closeOnOverlayClick, onClose],
//   )

//   useEffect(() => {
//     const getFocusableElements = () => {
//       if (overlayRef.current) {
//         return overlayRef.current.querySelectorAll(
//           'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
//         )
//       }
//       return []
//     }

//     const focusable = getFocusableElements()

//     if (focusable.length > 0) {
//       const first = focusable[0]
//       const last = focusable[focusable.length - 1]

//       // focus on second element
//       if (focusable[0]) {
//         focusable[0].focus()
//       }

//       if (first && last) {
//         // switch to the last element on Shift + Tab
//         first.addEventListener('keydown', (e) => {
//           if (e.shiftKey && e.key === 'Tab') {
//             e.preventDefault()

//             last.focus()
//           }
//         })

//         // switch to the first element on Tab
//         last.addEventListener('keydown', (e) => {
//           if (e.key === 'Tab') {
//             e.preventDefault()

//             first.focus()
//           }
//         })
//       }
//     }
//   }, [focusOnIndex])

//   const transitions = useTransition(opened, transition)

//   return transitions((styles, item) => item && (
//     <Portal id={portalId}>
//       <Overlay
//         overlayColor={overlayColor}
//         isOverlay={isOverlay}
//         ref={overlayRef}
//         onClick={onOverlayClick}
//         style={styles}
//       >
//         {children}
//       </Overlay>
//     </Portal>
//   ))
// }

// export default Modal
