import * as React from 'react';

import { Field } from '@formily/react';
import { FormItem, NumberPicker } from '@formily/antd';
import { InputNumberProps } from 'antd';

import './index.css';

export type NumberRangeProps = {
  minProps?: InputNumberProps;
  maxProps?: InputNumberProps;
};

const NumberRange = (props: NumberRangeProps) => {
  const { minProps, maxProps } = props;

  return (
    <div className="number-range">
      <Field name="0" decorator={[FormItem, { asterisk: false }]} component={[NumberPicker, minProps]} />
      <div style={{ margin: '0 20px' }}>~</div>
      <Field name="1" decorator={[FormItem, { asterisk: false }]} component={[NumberPicker, maxProps]} />
    </div>
  );
};

export default NumberRange;

export const rangeValidator = (value: number[] | undefined) => {
  if (!value || value.length === 0) return null;
  const [min, max] = value;
  if (!min) {
    return '请填写最小值';
  }
  if (!max) {
    return '请填写最大值';
  }
  if (min >= max) {
    return '请填写有效的范围';
  }
  return null;
};
