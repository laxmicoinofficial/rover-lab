import React from 'react';
import PositiveIntPicker from './PositiveIntPicker';

export default function SequencePicker(props) {
  let {value, onUpdate} = props;

  return <PositiveIntPicker
    value={value}
    placeholder='Amount in mint (1 laxmicoin = 10,000,000 mint)'
    onUpdate={(value) => onUpdate(value)}
    />
}
