

import { useTheme } from '@material-ui/core';
import React from 'react';
const Rocket = () => {
  const { palette: { primary, secondary } } = useTheme();
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172">
      <defs>
        <linearGradient x1="129.16842" y1="85.83517" x2="160.27533" y2="54.72108" gradientUnits="userSpaceOnUse"
          id="color-1">
          <stop offset="0" stop-color={primary.light}></stop>
          <stop offset="1" stop-color={primary.main}></stop>
        </linearGradient>
        <linearGradient x1="62.87317" y1="44.62683" x2="75.50083" y2="31.99917" gradientUnits="userSpaceOnUse" id="color-2">
          <stop offset="0" stop-color={primary.main}></stop>
          <stop offset="1" stop-color={primary.dark}></stop>
        </linearGradient>
        <linearGradient x1="53.75" y1="77.04167" x2="70.84608" y2="77.04167" gradientUnits="userSpaceOnUse" id="color-3">
          <stop offset="0" stop-color={"white"}></stop>
          <stop offset="1" stop-color={"white"}></stop>
        </linearGradient>
        <linearGradient x1="28.66667" y1="77.04167" x2="57.33333" y2="77.04167" gradientUnits="userSpaceOnUse" id="color-4">
          <stop offset="0" stop-color={"white"}></stop>
          <stop offset="1" stop-color={"white"}></stop>
        </linearGradient>
        <linearGradient x1="118.25" y1="112.875" x2="101.15392" y2="112.875" gradientUnits="userSpaceOnUse" id="color-5">
          <stop offset="0" stop-color={"white"}></stop>
          <stop offset="1" stop-color={"white"}></stop>
        </linearGradient>
        <linearGradient x1="143.33692" y1="112.875" x2="111.08333" y2="112.875" gradientUnits="userSpaceOnUse" id="color-6">
          <stop offset="1" stop-color={"white"}></stop>
          <stop offset="0" stop-color={"white"}></stop>
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"
        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
        font-size="none" text-anchor="none" style={{"mixBlendMode": "normal"}}>
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g>
          <path
            d="M161.25,82.41667v64.5c0,3.95958 -3.20708,7.16667 -7.16667,7.16667h-64.5c-3.95958,0 -7.16667,-3.20708 -7.16667,-7.16667v-86c0,-3.95958 3.20708,-7.16667 7.16667,-7.16667h43z"
            fill={primary.main}></path>
          <path d="M132.58333,53.75v21.5c0,3.95958 3.20708,7.16667 7.16667,7.16667h21.5z" fill="url(#color-1)"></path>
          <path
            d="M82.41667,121.83333c5.9125,0 10.75,-4.8375 10.75,-10.75v-57.33333h-3.58333c-3.95958,0 -7.16667,3.20708 -7.16667,7.16667z"
            fill="#000000" opacity="0.05"></path>
          <path
            d="M89.58333,53.75h1.79167v57.33333c0,4.94858 -4.00975,8.95833 -8.95833,8.95833v-59.125c0,-3.95958 3.20708,-7.16667 7.16667,-7.16667z"
            fill="#000000" opacity="0.05"></path>
          <path
            d="M89.58333,46.58333v64.5c0,3.95958 -3.20708,7.16667 -7.16667,7.16667h-64.5c-3.95958,0 -7.16667,-3.20708 -7.16667,-7.16667v-86c0,-3.95958 3.20708,-7.16667 7.16667,-7.16667h43z"
            fill={primary.light}></path>
          <path d="M60.91667,17.91667v21.5c0,3.95958 3.20708,7.16667 7.16667,7.16667h21.5z" fill="url(#color-2)"></path>
          <path
            d="M53.75,82.33783v9.19483c0,1.45483 1.75942,2.18225 2.78425,1.15025l13.43392,-13.50558c1.17175,-1.1825 1.17175,-3.08883 0,-4.26775l-13.43392,-13.50558c-1.02483,-1.03558 -2.78425,-0.30817 -2.78425,1.14667v11.7175"
            fill="white"></path>
          <path
            d="M57.33333,71.66667h-26.875c-0.989,0 -1.79167,0.80267 -1.79167,1.79167v7.16667c0,0.989 0.80267,1.79167 1.79167,1.79167h26.875"
            fill={"white"}></path>
          <path
            d="M118.25,110.1015v-11.7175c0,-1.45483 -1.75942,-2.18225 -2.78425,-1.15025l-13.43392,13.50558c-1.17175,1.17892 -1.17175,3.08525 0,4.26775l13.43392,13.50558c1.02483,1.03558 2.78425,0.30817 2.78425,-1.14667v-9.19483"
            fill="url(#color-5)"></path>
          <path
            d="M111.08333,118.25h30.45833c0.989,0 1.79167,-0.80267 1.79167,-1.79167v-7.16667c0,-0.989 -0.80267,-1.79167 -1.79167,-1.79167h-30.45833"
            fill="url(#color-6)"></path>
        </g>
      </g>
    </svg>
  )
}
export default Rocket;