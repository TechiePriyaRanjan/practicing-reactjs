import React, { useEffect, useRef } from 'react'
import styles from './FocusableInput.module.css'

const FocusableInput = ({ shouldFocus }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (shouldFocus) {
      // HTMLElement.focus() | [opposite -> .blur()] method sets focus on the specified element 
      inputRef.current.focus()
    }
  }, [shouldFocus])

  return (
    <input className={styles.inputbox} ref={inputRef} type="text" placeholder="Enter your name..." />
  )
}


export default function FocusableInputWrapper() {
  return (
    <div className={styles.input__wrapper}>
      <h2 className={styles.input__header}>Focusable Input</h2>
      <FocusableInput shouldFocus={true} />
    </div>
  )
}