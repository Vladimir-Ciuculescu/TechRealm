import { createTheme } from '@mui/material/styles'
declare module '@mui/material/styles' {
  interface PaletteOptions {
    Base: {
      White: string
      Black: string
    }
    Violet: {
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
    Success: {
      25: string
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
    Error: {
      25: string
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
    Gray: {
      25: string
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    fontFamily: string
    fontStyle: string

    DISPLAY_2XL_REGULAR: React.CSSProperties
    DISPLAY_2XL_MEDIUM: React.CSSProperties
    DISPLAY_2XL_SEMIBOLD: React.CSSProperties
    DISPLAY_2XL_BOLD: React.CSSProperties
    DISPLAY_XL_REGULAR: React.CSSProperties
    DISPLAY_XL_MEDIUM: React.CSSProperties
    DISPLAY_XL_SEMIBOLD: React.CSSProperties
    DISPLAY_XL_BOLD: React.CSSProperties
    DISPLAY_LG_REGULAR: React.CSSProperties
    DISPLAY_LG_MEDIUM: React.CSSProperties
    DISPLAY_LG_SEMIBOLD: React.CSSProperties
    DISPLAY_LG_BOLD: React.CSSProperties
    DISPLAY_MD_REGULAR: React.CSSProperties
    DISPLAY_MD_MEDIUM: React.CSSProperties
    DISPLAY_MD_SEMIBOLD: React.CSSProperties
    DISPLAY_MD_BOLD: React.CSSProperties
    DISPLAY_SM_REGULAR: React.CSSProperties
    DISPLAY_SM_MEDIUM: React.CSSProperties
    DISPLAY_SM_SEMIBOLD: React.CSSProperties
    DISPLAY_SM_BOLD: React.CSSProperties
    DISPLAY_XS_REGULAR: React.CSSProperties
    DISPLAY_XS_MEDIUM: React.CSSProperties
    DISPLAY_XS_SEMIBOLD: React.CSSProperties
    DISPLAY_XS_BOLD: React.CSSProperties
    TEXT_XL_REGULAR: React.CSSProperties
    TEXT_XL_MEDIUM: React.CSSProperties
    TEXT_XL_SEMIBOLD: React.CSSProperties
    TEXT_XL_BOLD: React.CSSProperties
    TEXT_LG_REGULAR: React.CSSProperties
    TEXT_LG_MEDIUM: React.CSSProperties
    TEXT_LG_SEMIBOLD: React.CSSProperties
    TEXT_LG_BOLD: React.CSSProperties
    TEXT_MD_REGULAR: React.CSSProperties
    TEXT_MD_MEDIUM: React.CSSProperties
    TEXT_MD_SEMIBOLD: React.CSSProperties
    TEXT_MD_BOLD: React.CSSProperties
    TEXT_SM_REGULAR: React.CSSProperties
    TEXT_SM_MEDIUM: React.CSSProperties
    TEXT_SM_SEMIBOLD: React.CSSProperties
    TEXT_SM_BOLD: React.CSSProperties
    TEXT_XS_REGULAR: React.CSSProperties
    TEXT_XS_MEDIUM: React.CSSProperties
    TEXT_XS_SEMIBOLD: React.CSSProperties
    TEXT_XS_BOLD: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    DISPLAY_2XL_REGULAR: true
    DISPLAY_2XL_MEDIUM: true
    DISPLAY_2XL_SEMIBOLD: true
    DISPLAY_2XL_BOLD: true
    DISPLAY_XL_REGULAR: true
    DISPLAY_XL_MEDIUM: true
    DISPLAY_XL_SEMIBOLD: true
    DISPLAY_XL_BOLD: true
    DISPLAY_LG_REGULAR: true
    DISPLAY_LG_MEDIUM: true
    DISPLAY_LG_SEMIBOLD: true
    DISPLAY_LG_BOLD: true
    DISPLAY_MD_REGULAR: true
    DISPLAY_MD_MEDIUM: true
    DISPLAY_MD_SEMIBOLD: true
    DISPLAY_MD_BOLD: true
    DISPLAY_SM_REGULAR: true
    DISPLAY_SM_MEDIUM: true
    DISPLAY_SM_SEMIBOLD: true
    DISPLAY_SM_BOLD: true
    DISPLAY_XS_REGULAR: true
    DISPLAY_XS_MEDIUM: true
    DISPLAY_XS_SEMIBOLD: true
    DISPLAY_XS_BOLD: true
    TEXT_XL_REGULAR: true
    TEXT_XL_MEDIUM: true
    TEXT_XL_SEMIBOLD: true
    TEXT_XL_BOLD: true
    TEXT_LG_REGULAR: true
    TEXT_LG_MEDIUM: true
    TEXT_LG_SEMIBOLD: true
    TEXT_LG_BOLD: true
    TEXT_MD_REGULAR: true
    TEXT_MD_MEDIUM: true
    TEXT_MD_SEMIBOLD: true
    TEXT_MD_BOLD: true
    TEXT_SM_REGULAR: true
    TEXT_SM_MEDIUM: true
    TEXT_SM_SEMIBOLD: true
    TEXT_SM_BOLD: true
    TEXT_XS_REGULAR: true
    TEXT_XS_MEDIUM: true
    TEXT_XS_SEMIBOLD: true
    TEXT_XS_BOLD: true
  }
}

// Update the Typography's variant prop options

const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    DISPLAY_2XL_REGULAR: {
      fontWeight: '400',
      fontSize: '72px',
      lineHeight: '90px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_2XL_MEDIUM: {
      fontWeight: '500',
      fontSize: '72px',
      lineHeight: '90px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_2XL_SEMIBOLD: {
      fontWeight: '600',
      fontSize: '72px',
      lineHeight: '90px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_2XL_BOLD: {
      fontWeight: '700',
      fontSize: '72px',
      lineHeight: '90px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_XL_REGULAR: {
      fontWeight: '400',
      fontSize: '60px',
      lineHeight: '72px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_XL_MEDIUM: {
      fontWeight: '500',
      fontSize: '60px',
      lineHeight: '72px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_XL_SEMIBOLD: {
      fontWeight: '600',
      fontSize: '60px',
      lineHeight: '72px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_XL_BOLD: {
      fontWeight: '700',
      fontSize: '60px',
      lineHeight: '72px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_LG_REGULAR: {
      fontWeight: '400',
      fontSize: '48px',
      lineHeight: '60px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_LG_MEDIUM: {
      fontWeight: '500',
      fontSize: '48px',
      lineHeight: '60px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_LG_SEMIBOLD: {
      fontWeight: '600',
      fontSize: '48px',
      lineHeight: '60px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_LG_BOLD: {
      fontWeight: '700',
      fontSize: '48px',
      lineHeight: '60px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_MD_REGULAR: {
      fontWeight: '400',
      fontSize: '36px',
      lineHeight: '44px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_MD_MEDIUM: {
      fontWeight: '500',
      fontSize: '36px',
      lineHeight: '44px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_MD_SEMIBOLD: {
      fontWeight: '600',
      fontSize: '36px',
      lineHeight: '44px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_MD_BOLD: {
      fontWeight: '700',
      fontSize: '36px',
      lineHeight: '44px',
      letterSpacing: '-0.02em',
    },
    DISPLAY_SM_REGULAR: {
      fontWeight: '400',
      fontSize: '30px',
      lineHeight: '38px',
    },
    DISPLAY_SM_MEDIUM: {
      fontWeight: '500',
      fontSize: '30px',
      lineHeight: '38px',
    },
    DISPLAY_SM_SEMIBOLD: {
      fontWeight: '600',
      fontSize: '30px',
      lineHeight: '38px',
    },
    DISPLAY_SM_BOLD: {
      fontWeight: '700',
      fontSize: '30px',
      lineHeight: '38px',
    },
    DISPLAY_XS_REGULAR: {
      fontWeight: '400',
      fontSize: '24px',
      lineHeight: '32px',
    },
    DISPLAY_XS_MEDIUM: {
      fontWeight: '500',
      fontSize: '24px',
      lineHeight: '32px',
    },
    DISPLAY_XS_SEMIBOLD: {
      fontWeight: '600',
      fontSize: '24px',
      lineHeight: '32px',
    },
    DISPLAY_XS_BOLD: {
      fontWeight: '700',
      fontSize: '24px',
      lineHeight: '32px',
    },

    TEXT_XL_REGULAR: {
      fontWeight: '400',
      fontSize: '20px',
      lineHeight: '30px',
    },
    TEXT_XL_MEDIUM: {
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '30px',
    },
    TEXT_XL_SEMIBOLD: {
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '30px',
    },
    TEXT_XL_BOLD: {
      fontWeight: '700',
      fontSize: '20px',
      lineHeight: '30px',
    },
    TEXT_LG_REGULAR: {
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '28px',
    },
    TEXT_LG_MEDIUM: {
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '28px',
    },
    TEXT_LG_SEMIBOLD: {
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '28px',
    },
    TEXT_LG_BOLD: {
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '28px',
    },
    TEXT_MD_REGULAR: {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
    },
    TEXT_MD_MEDIUM: {
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '24px',
    },
    TEXT_MD_SEMIBOLD: {
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '24px',
    },
    TEXT_MD_BOLD: {
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '24px',
    },
    TEXT_SM_REGULAR: {
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '20px',
    },
    TEXT_SM_MEDIUM: {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '20px',
    },
    TEXT_SM_SEMIBOLD: {
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '20px',
    },
    TEXT_SM_BOLD: {
      fontWeight: '700',
      fontSize: '14px',
      lineHeight: '20px',
    },
    TEXT_XS_REGULAR: {
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '18px',
    },
    TEXT_XS_MEDIUM: {
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '18px',
    },
    TEXT_XS_SEMIBOLD: {
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '18px',
    },
    TEXT_XS_BOLD: {
      fontWeight: '700',
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
  palette: {
    Base: {
      White: '#FFFFFF',
      Black: '#000000',
    },
    Violet: {
      50: '#ede7f6',
      100: '#d1c4e9',
      200: '#b39ddb',
      300: '#9575cd',
      400: '#7e57c2',
      500: '#673ab7',
      600: '#5e35b1',
      700: '#512da8',
      800: '#4527a0',
      900: '#311b92',
    },
    Success: {
      25: '#F6FEF9',
      50: '#ECFDF3',
      100: '#D1FADF',
      200: '#A6F4C5',
      300: '#6CE9A6',
      400: '#32D583',
      500: '#12B76A',
      600: '#039855',
      700: '#027A48',
      800: '#05603A',
      900: '#054F31',
    },
    Error: {
      25: '#FFFBFA',
      50: '#FEF3F2',
      100: '#FEE4E2',
      200: '#FECDCA',
      300: '#FDA29B',
      400: '#F97066',
      500: '#F04438',
      600: '#D92D20',
      700: '#B42318',
      800: '#912018',
      900: '#7A271A',
    },
    Gray: {
      25: '#FCFCFC',
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D6D6D6',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#424242',
      800: '#292929',
      900: '#141414',
    },
    background: {
      default: '#f2f2f8',
    },
  },
})

theme.typography.h4 = {
  fontSize: '0.9rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
}

export default theme
