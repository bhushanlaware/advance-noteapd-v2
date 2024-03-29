

import { useTheme } from '@material-ui/core';
import React from 'react';
const Rocket = () => {
  const { palette: { primary, secondary } } = useTheme();
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172">
      <defs>
        <linearGradient x1="52.21633" y1="136.87975" x2="154.757" y2="34.33908" gradientUnits="userSpaceOnUse" id="color-1"><stop offset="0" stop-color={primary.main}></stop><stop offset="1" stop-color={primary.light}></stop></linearGradient>
        </defs>
        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}>
          <path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M87.72,105.049l-34.05958,34.05958l-47.97008,-47.97008c-2.80933,-2.80933 -2.80933,-7.36017 0,-10.1695l23.89008,-23.89008c2.80933,-2.80933 7.36017,-2.80933 10.1695,0z" fill={primary.dark}></path><path d="M63.77258,149.21717l-23.89008,-23.89008c-2.80933,-2.80933 -2.80933,-7.36017 0,-10.1695l92.36758,-92.37475c2.80933,-2.80933 7.36017,-2.80933 10.1695,0l23.89008,23.89008c2.80933,2.80933 2.80933,7.36017 0,10.1695l-92.37117,92.37475c-2.80575,2.80575 -7.36017,2.80575 -10.16592,0z" fill="url(#color-1)"></path></g></g></svg >

  )
}

export default Rocket;