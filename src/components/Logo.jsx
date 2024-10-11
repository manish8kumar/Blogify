import React from 'react'

function Logo({ width = '400px' }) { // Increased the width
  return (
    <div>
      <img 
        src="https://i.postimg.cc/bJhCfS2K/Screenshot-2024-10-11-110811-removebg-preview.png" // Use the correct image URL here
        alt="Logo" 
        style={{ width, height: 'auto' }} 
      />
    </div>
  )
}

export default Logo
