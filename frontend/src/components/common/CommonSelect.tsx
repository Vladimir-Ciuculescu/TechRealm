import React from 'react'
import Select from 'react-select'
import { SelectOption } from '../../interfaces/SelectOption'

interface CommonSelectProps {
  options: any[]
  defaultValue?: SelectOption
}

export const CommonSelect: React.FC<CommonSelectProps> = ({
  options,
  defaultValue,
}) => {
  return <Select defaultValue={defaultValue} options={options} />
}
