import React from 'react'
import '../Styles/Footer.css'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
        <footer>{`Copyright © Booking Ark ${year}`}</footer>;
    </div>
  )
}
