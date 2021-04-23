

import { useTheme } from '@material-ui/core';
import React from 'react';
const Rocket = () => {
  const { palette: { primary, secondary } } = useTheme();
  return (

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172">
      <defs>
      <linearGradient x1="52.21633" y1="136.87975" x2="154.757" y2="34.33908" gradientUnits="userSpaceOnUse" id="color-1"><stop offset="0" stop-color={primary.main}></stop><stop offset="1" stop-color={primary.light}></stop></linearGradient>
      </defs>
      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"
        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
        font-size="none" text-anchor="none" style={{ "mixBlendMode": "normal" }}>
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g>
          <path
            d="M146.91667,21.5v129c0,3.95958 -3.20708,7.16667 -7.16667,7.16667h-17.91667v-143.33333h17.91667c3.95958,0 7.16667,3.20708 7.16667,7.16667z"
            fill={primary.dark}></path>
          <path
            d="M139.75,21.5v129c0,3.95958 -3.20708,7.16667 -7.16667,7.16667h-21.5v-143.33333h21.5c3.95958,0 7.16667,3.20708 7.16667,7.16667z"
            fill="white"></path>
          <path
            d="M25.08333,21.5v129c0,3.95958 3.20708,7.16667 7.16667,7.16667h7.16667v-143.33333h-7.16667c-3.95958,0 -7.16667,3.20708 -7.16667,7.16667z"
            fill={primary.dark}></path>
          <path
            d="M125.41667,14.33333h-86v143.33333h86c3.95958,0 7.16667,-3.20708 7.16667,-7.16667v-129c0,-3.95958 -3.20708,-7.16667 -7.16667,-7.16667z"
            fill="url(#color-1)"></path>
          <rect x="16" y="14" transform="scale(3.58333,3.58333)" width="16" height="2" fill="white"></rect>
        </g>
      </g>
    </svg>
  )
}
export default Rocket;