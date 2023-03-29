import { FormControl, Typography, useTheme } from '@mui/material'
import { ConsoleConstructorOptions } from 'console'
import React, { useState } from 'react'
import { CgAsterisk } from 'react-icons/cg'
import Select, { components } from 'react-select'
import { SelectOption } from '../../interfaces/SelectOption'

interface CommonSelectProps {
  options: any[]
  defaultValue?: SelectOption
  width?: string | number
  placeholder?: string
  displayDropdownIndicator?: boolean
  displayindicatorSeparator?: boolean
  alignSingleValueText?: boolean
  value?: string | number | undefined
  onChange?: (e: any) => any
  label?: string
  error?: string
  required?: boolean
}

const CustomSelect: React.FC<CommonSelectProps> = ({
  options,
  defaultValue,
  width,
  placeholder,
  displayDropdownIndicator,
  displayindicatorSeparator,
  alignSingleValueText,
  value,
  onChange,
  label,
  error,
  required,
}) => {
  const [focused, setFocused] = useState<boolean>(false)
  const { palette }: any = useTheme()

  const renderBorderColor = () => {
    if (error) {
      return palette.Error[300]
    } else if (focused) {
      return palette.Violet[300]
    } else {
      return palette.Gray[300]
    }
  }

  const renderBoxShadowColor = () => {
    if (error && focused) {
      return palette.Error[100]
    } else if (!error && focused) {
      return palette.Violet[100]
    } else {
      return null
    }
  }

  const styles = {
    container: (base: any, state: any) => ({
      ...base,
      width: width,
    }),
    menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
    control: (base: any, state: any) => ({
      ...base,
      height: '44px',
      borderRadius: '6px',
      //boxShadow: 'none',
      borderWidth: '2px',
      borderStyle: 'solid',
      boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px  ${renderBoxShadowColor()}`,
      borderColor: renderBorderColor(),
      '&:hover': {
        borderColor: renderBorderColor(),
      },
    }),
    valueContainer: (base: any, state: any) => ({
      ...base,
      width: width,
      justifyContent: alignSingleValueText ? 'center' : 'inherit',
      alignItems: alignSingleValueText ? 'center' : 'inherit',
    }),

    dropdownIndicator: (base: any) => ({
      ...base,
      display: displayDropdownIndicator ? 'flex' : 'none',
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: displayindicatorSeparator ? 'flex' : 'none',
    }),
  }
  const selectValue: SelectOption = { label: value, value: value }

  return (
    <FormControl sx={{ width: '100%', gap: '8px' }}>
      {label && (
        <Typography variant="TEXT_SM_MEDIUM" sx={{ color: 'Gray.700' }}>
          {label}
          {required && (
            <CgAsterisk
              style={{
                width: '10px',
                height: '10px',
                marginTop: '-5px',
                color: palette.Error[500],
              }}
            />
          )}
        </Typography>
      )}
      <Select
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoFocus={false}
        styles={styles}
        defaultValue={defaultValue}
        options={options}
        placeholder={placeholder}
        value={selectValue}
        components={{ IndicatorSeparator: () => null }}
        onChange={onChange}
      />
      {error && (
        <Typography
          variant="TEXT_SM_MEDIUM"
          sx={{ color: 'Error.500', paddingLeft: '5px' }}
        >
          {error}
        </Typography>
      )}
    </FormControl>
  )
}

export default CustomSelect
