import React from 'react'

interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, fullWidth }) => {
  return (
    <div
      className={
        fullWidth
          ? "w-full px-4 sm:px-6 lg:px-8"
          : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      }
    >
      {children}
    </div>
  )
}

export default Container
