import React from 'react'
import { IconStyled } from './styles'

const Icons = {
  close: () => (
    <path
      d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
      fill="white"
    />
  ),
  copy: () => (
    <>
      <path
        d="M20 3.75H5V20"
        stroke="#55F8F1"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8.75H25V23.75C25 24.413 24.7366 25.0489 24.2678 25.5178C23.7989 25.9866 23.163 26.25 22.5 26.25H12.5C11.837 26.25 11.2011 25.9866 10.7322 25.5178C10.2634 25.0489 10 24.413 10 23.75V8.75Z"
        stroke="#55F8F1"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      ,
    </>
  ),
  exit: () => (
    <path
      d="M15 4.00098H5V18.001C5 18.5314 5.21071 19.0401 5.58579 19.4152C5.96086 19.7903 6.46957 20.001 7 20.001H15M16 15.001L19 12.001M19 12.001L16 9.00098M19 12.001H9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  alert: () => (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.843 4.13403C9.872 2.93303 10.886 2.33203 12 2.33203C13.114 2.33203 14.128 2.93203 16.157 4.13403L16.843 4.54003C18.872 5.74203 19.886 6.34303 20.443 7.33203C21 8.32203 21 9.52203 21 11.926V12.738C21 15.141 21 16.343 20.443 17.332C19.886 18.322 18.872 18.922 16.843 20.123L16.157 20.53C14.128 21.731 13.114 22.332 12 22.332C10.886 22.332 9.872 21.732 7.843 20.53L7.157 20.123C5.128 18.923 4.114 18.321 3.557 17.332C3 16.342 3 15.142 3 12.738V11.926C3 9.52203 3 8.32103 3.557 7.33203C4.114 6.34203 5.128 5.74203 7.157 4.54003L7.843 4.13403ZM13 16.332C13 16.5972 12.8946 16.8516 12.7071 17.0391C12.5196 17.2267 12.2652 17.332 12 17.332C11.7348 17.332 11.4804 17.2267 11.2929 17.0391C11.1054 16.8516 11 16.5972 11 16.332C11 16.0668 11.1054 15.8125 11.2929 15.6249C11.4804 15.4374 11.7348 15.332 12 15.332C12.2652 15.332 12.5196 15.4374 12.7071 15.6249C12.8946 15.8125 13 16.0668 13 16.332ZM12 6.58203C12.1989 6.58203 12.3897 6.66105 12.5303 6.8017C12.671 6.94235 12.75 7.13312 12.75 7.33203V13.332C12.75 13.5309 12.671 13.7217 12.5303 13.8624C12.3897 14.003 12.1989 14.082 12 14.082C11.8011 14.082 11.6103 14.003 11.4697 13.8624C11.329 13.7217 11.25 13.5309 11.25 13.332V7.33203C11.25 7.13312 11.329 6.94235 11.4697 6.8017C11.6103 6.66105 11.8011 6.58203 12 6.58203Z"
      fill="#FF7337"
    />
  ),
  lang: () => (
    <path
      d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
      fill="white"
    />
  ),
  settings: () => (
    <path
      d="M17.1594 10.98C17.1994 10.66 17.2294 10.34 17.2294 10C17.2294 9.66 17.1994 9.34 17.1594 9.02L19.2694 7.37C19.4594 7.22 19.5094 6.95 19.3894 6.73L17.3894 3.27C17.2694 3.05 16.9994 2.97 16.7794 3.05L14.2894 4.05C13.7694 3.65 13.2094 3.32 12.5994 3.07L12.2194 0.42C12.1894 0.18 11.9794 0 11.7294 0H7.72933C7.47933 0 7.26933 0.18 7.23933 0.42L6.85933 3.07C6.24933 3.32 5.68933 3.66 5.16933 4.05L2.67933 3.05C2.44933 2.96 2.18933 3.05 2.06933 3.27L0.0693316 6.73C-0.0606684 6.95 -0.000668481 7.22 0.189332 7.37L2.29933 9.02C2.25933 9.34 2.22933 9.67 2.22933 10C2.22933 10.33 2.25933 10.66 2.29933 10.98L0.189332 12.63C-0.000668481 12.78 -0.0506684 13.05 0.0693316 13.27L2.06933 16.73C2.18933 16.95 2.45933 17.03 2.67933 16.95L5.16933 15.95C5.68933 16.35 6.24933 16.68 6.85933 16.93L7.23933 19.58C7.26933 19.82 7.47933 20 7.72933 20H11.7294C11.9794 20 12.1894 19.82 12.2194 19.58L12.5994 16.93C13.2094 16.68 13.7694 16.34 14.2894 15.95L16.7794 16.95C17.0094 17.04 17.2694 16.95 17.3894 16.73L19.3894 13.27C19.5094 13.05 19.4594 12.78 19.2694 12.63L17.1594 10.98ZM9.72937 13.5C7.79937 13.5 6.22933 11.93 6.22933 10C6.22933 8.07 7.79937 6.5 9.72937 6.5C11.6594 6.5 13.2294 8.07 13.2294 10C13.2294 11.93 11.6594 13.5 9.72937 13.5Z"
      fill="white"
    />
  ),
  user: () => (
    <path
      d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
      fill="white"
    />
  ),
  arrowDown: () => (
    <path
      d="M8.45957 9.29006L12.3396 13.1701L16.2196 9.29006C16.6096 8.90006 17.2396 8.90006 17.6296 9.29006C18.0196 9.68006 18.0196 10.3101 17.6296 10.7001L13.0396 15.2901C12.6496 15.6801 12.0196 15.6801 11.6296 15.2901L7.03957 10.7001C6.64957 10.3101 6.64957 9.68006 7.03957 9.29006C7.42957 8.91006 8.06957 8.90006 8.45957 9.29006Z"
      fill="white"
    />
  ),
  wallet: () => (
    <>
      <path
        d="M1.22376 5.10931H26.9946V1.52181C26.9946 1.35996 26.9594 1.20014 26.8916 1.05385C26.8237 0.907564 26.7248 0.778465 26.6021 0.675863C26.4794 0.573261 26.3359 0.499714 26.1819 0.460526C26.028 0.421338 25.8674 0.417486 25.7118 0.449248L1.04681 4.58362C0.86315 4.62091 0.692263 4.7066 0.551156 4.83217C0.410048 4.95774 0.303641 5.11881 0.24252 5.29935C0.554902 5.17338 0.887848 5.1089 1.22376 5.10931ZM29.1059 6.74993H1.22376C0.939342 6.74993 0.666575 6.86517 0.465463 7.07028C0.264351 7.2754 0.151367 7.5536 0.151367 7.84368V27.5312C0.151367 27.8213 0.264351 28.0995 0.465463 28.3046C0.666575 28.5097 0.939342 28.6249 1.22376 28.6249H29.1059C29.3903 28.6249 29.6631 28.5097 29.8642 28.3046C30.0653 28.0995 30.1783 27.8213 30.1783 27.5312V7.84368C30.1783 7.5536 30.0653 7.2754 29.8642 7.07028C29.6631 6.86517 29.3903 6.74993 29.1059 6.74993ZM22.7051 19.8749C22.2809 19.8749 21.8662 19.7466 21.5135 19.5063C21.1608 19.2659 20.8859 18.9243 20.7236 18.5246C20.5612 18.1248 20.5187 17.685 20.6015 17.2607C20.6843 16.8363 20.8885 16.4466 21.1885 16.1406C21.4884 15.8347 21.8706 15.6264 22.2866 15.542C22.7027 15.4576 23.1339 15.5009 23.5258 15.6664C23.9178 15.832 24.2527 16.1124 24.4884 16.4721C24.7241 16.8319 24.8499 17.2548 24.8499 17.6874C24.8499 18.2676 24.6239 18.824 24.2217 19.2342C23.8194 19.6445 23.2739 19.8749 22.7051 19.8749Z"
        fill="#1FC7D4"
      />
      <path
        d="M0.140137 15.7393V5.92969C0.140137 5.08682 0.523516 4.66641 1.17365 4.5625C3.53291 4.18447 8.45116 3.98145 8.45116 3.98145C8.45116 3.98145 7.89285 5.0752 6.61938 5.0752V6.75C7.85934 6.75 8.71926 8.35645 8.71926 8.35645L3.72594 14.1328L0.140137 15.7393Z"
        fill="#1FC7D4"
      />
    </>
  ),
  //BTN ICONS
  bitcoin: () => <></>,
  ethereum: () => <></>,
  optimism: () => <></>,
  polygon: () => <></>,
  BNB: () => <></>,
  load: () => (
    <>
      <svg viewBox="-25 -25 100 100" >
        <defs>
          <linearGradient id="gr-simple" x1="0" y1="0" x2="100%" y2="100%">
            <stop stopColor="rgba(255,255,255,.2)" offset="10%"/>
            <stop stopColor="rgba(255,255,255,.7)" offset="90%"/>
          </linearGradient>
        </defs>
        <circle className="cls-1" cx="26" cy="27" r="26" stroke="url(#gr-simple)"/>
        <path className="cls-2" d="M25,0A24.92,24.92,0,0,1,42.68,7.32" transform="translate(1 2)">
          <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              from="0 26 27"
              to="360 26 27"
              repeatCount="indefinite"/>
        </path>
      </svg>
    </>
  ),
} as const

export type IconNames = keyof typeof Icons

export type IconProperties = {
  className?: string

  viewBox?: string

  title?: string

  style?: never

  role?: string

  size?: '16' | '24' | '32' | '40'

  name: IconNames
}

export const Icon: React.FC<IconProperties> = ({
  viewBox,
  title,
  size,
  name,
  ...props
}) => (
  <IconStyled>
    <svg width={size} height={size} viewBox={viewBox} {...props}>
      {title && <title>{title}</title>}
      {Icons[name]()}
    </svg>
  </IconStyled>
)
