import * as React from 'react';

import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import { NumberPicker, FormItem, Submit, Input, FormLayout, FormButtonGroup, Select } from '@formily/antd';
import 'antd/dist/antd.compact.min.css';
import '@formily/antd/esm/style.less';

import NumberRange, { rangeValidator } from './number-range';

import { dependencyValidator, asyncValidator } from './validator';

const SchemaField = createSchemaField({
  components: { FormLayout, FormItem, NumberPicker, Submit, Input, NumberRange, Select },
});

export default function App() {
  const form = React.useMemo(createForm, []);

  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField>
          <SchemaField.Number
            title="数字1"
            name="number1"
            x-component="NumberPicker"
            x-decorator="FormItem"
            x-validator={{
              exclusiveMaximum: 20,
              enum: [10, 15],
            }}
          />
          <SchemaField.Number
            title="数字2"
            name="number2"
            x-component="NumberPicker"
            x-decorator="FormItem"
            x-validator={{
              // const: 30,
              multipleOf: 4,
            }}
          />
          <SchemaField.String
            title="whitespace"
            name="str_1"
            x-component="Input"
            x-decorator="FormItem"
            x-validator={{
              whitespace: true,
            }}
          />
          <SchemaField.Number
            title="数字3"
            name="nested.number3"
            x-component="NumberPicker"
            x-decorator="FormItem"
            x-validator={{
              exclusiveMaximum: 20,
              enum: [10, 15],
            }}
          />
          <SchemaField.Number
            title="城市"
            name="city_ids"
            x-component="Select"
            x-decorator="FormItem"
            x-validator={{
              len: 2,
              message: '务必选择2个城市',
            }}
            x-component-props={{
              mode: 'multiple',
              options: [
                {
                  label: '北京',
                  value: 50,
                },
                {
                  label: '上海',
                  value: 60,
                },
                {
                  label: '重庆',
                  value: 70,
                },
              ],
            }}
          />
          <SchemaField.Array
            title="竞品报价"
            required
            name="quotation_range"
            x-decorator="FormItem"
            x-component="NumberRange"
            x-validator={{
              validator: rangeValidator,
            }}
            x-component-props={{
              minProps: {
                placeholder: '请输入最低价',
                addonAfter: '元',
                min: 0,
              },
              maxProps: {
                addonAfter: '元',
                placeholder: '请输入最高价',
                min: 0,
              },
            }}
          />
          <SchemaField.Array
            title="报价2(依赖校验)"
            required
            name="nested.price_range"
            x-decorator="FormItem"
            x-component="NumberRange"
            x-validator={{
              range_validator: true,
              validator: dependencyValidator,
            }}
            x-component-props={{
              minProps: {
                placeholder: '请输入最低价',
                addonAfter: '元',
              },
              maxProps: {
                addonAfter: '元',
                placeholder: '请输入最高价',
                min: 0,
              },
            }}
          />
          <SchemaField.Array
            title="报价3(异步校验)"
            required
            name="nested.price_range_3"
            x-decorator="FormItem"
            x-component="NumberRange"
            x-validator={{
              range_validator: true,
              validator: asyncValidator,
            }}
            x-component-props={{
              minProps: {
                placeholder: '请输入最低价',
                addonAfter: '元',
                min: 0,
              },
              maxProps: {
                addonAfter: '元',
                placeholder: '请输入最高价',
                min: 0,
              },
            }}
          />
        </SchemaField>
        <FormButtonGroup.FormItem>
          <Submit onSubmit={console.log}>提交</Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  );
}
