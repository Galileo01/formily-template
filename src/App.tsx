import React from 'react'

import { createForm, Field as CoreFieldType } from '@formily/core'
import { FormProvider, createSchemaField, Field, VoidField } from '@formily/react'
import { FormItem, Input, Radio, FormLayout, Select } from '@formily/antd'

import 'antd/dist/antd.compact.min.css'
import '@formily/antd/esm/style.less'

const isCustomReaction = (field: CoreFieldType) => {
  const isCustomField = field.query('.is_custom').take() as CoreFieldType | undefined
  field.visible = isCustomField?.value === 1
}

const needServiceReaction = (field: CoreFieldType) => {
  const chooseType = (field.query('.choose_type').take() as CoreFieldType).value as number

  if (chooseType === 1) {
    field.disabled = true
    field.setValue(undefined)
  } else {
    field.disabled = false
  }
}

export default function App() {
  const form = React.useMemo(() => createForm(), [])

  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={10}>
        <Field
          required
          name="is_custom"
          title="是否定制"
          decorator={[FormItem]}
          component={[
            Radio.Group,
            {
              options: [
                {
                  label: '否',
                  value: 0,
                },
                {
                  label: '是',
                  value: 1,
                },
              ],
            },
          ]}
          initialValue={0}
        />
        <Field
          name="username"
          title="用户名"
          required
          decorator={[FormItem]}
          component={[Input]}
          reactions={(field) => {
            const isCustomField = field.query('.is_custom').take() as CoreFieldType | undefined
            field.setComponentProps({
              prefix: isCustomField?.value === 0 ? '通用-' : '定制-',
            })
          }}
        />
        <Field
          name="phone"
          title="手机号"
          required
          decorator={[FormItem]}
          component={[Input]}
          validator="phone"
          reactions={isCustomReaction}
        />
        <Field name="custom_name" title="定制名称" required decorator={[FormItem]} component={[Input]} reactions={isCustomReaction} />
        <Field name="custom_id" title="定制id" required decorator={[FormItem]} component={[Input]} reactions={isCustomReaction} />
        <Field
          required
          name="choose_type"
          title="选择类型"
          decorator={[FormItem]}
          component={[
            Radio.Group,
            {
              options: [
                {
                  label: '全部选择',
                  value: 1,
                },
                {
                  label: '部分选择',
                  value: 2,
                },
              ],
            },
          ]}
          initialValue={2}
        />
        <Field
          required
          name="need_service"
          title="所需服务"
          decorator={[FormItem]}
          component={[
            Select,
            {
              mode: 'multiple',
              options: [
                {
                  label: '服务1',
                  value: 1,
                },
                {
                  label: '服务2',
                  value: 2,
                },
                {
                  label: '服务3',
                  value: 3,
                },
              ],
            },
          ]}
          reactions={needServiceReaction}
        />
        <Field
          required
          name="city_id"
          title="城市"
          decorator={[FormItem]}
          component={[
            Select,
            {
              options: [
                {
                  label: '北京',
                  value: 1,
                },
                {
                  label: '四川',
                  value: 2,
                },
                {
                  label: '重庆',
                  value: 3,
                },
              ],
            },
          ]}
        />
        <Field
          required
          name="province_id"
          title="省份"
          decorator={[FormItem]}
          component={[
            Select,
            {
              options: [
                {
                  label: '北京',
                  value: 1,
                },
                {
                  label: '泸州',
                  value: 2,
                },
                {
                  label: '成都',
                  value: 3,
                },
              ],
            },
          ]}
        />
      </FormLayout>
    </FormProvider>
  )
}
