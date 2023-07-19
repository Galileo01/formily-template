import React from 'react'

import { createForm, Field, onFieldChange } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { FormItem, Input, Radio, FormLayout, Select } from '@formily/antd'

import 'antd/dist/antd.compact.min.css'
import '@formily/antd/esm/style.less'

import './index.css'

const SchemaField = createSchemaField({ components: { FormLayout, FormItem, Input, Radio, Select } })

const Title = (props: { title: string }) => {
  return (
    <h2>
      <div className="title-text">{props.title}</div>
    </h2>
  )
}

const needServiceReaction = (field: Field) => {
  const chooseType = (field.query('.choose_type').take() as Field).value as number

  if (chooseType === 1) {
    field.disabled = true
    field.setValue(undefined)
  } else {
    field.disabled = false
  }
}

export default function App() {
  /**
   * 3. createForm 时 注册 effect 钩子 做到联动
   */
  const form = React.useMemo(
    () =>
      createForm({
        effects() {
          onFieldChange('city_id', (field: Field) => {
            const provinceIDField = field.query('province_id').take() as Field
            provinceIDField?.setValue(undefined)
          })
        },
      }),
    []
  )

  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField>
          <SchemaField.Number
            name="is_custom"
            title="是否定制"
            required
            x-decorator="FormItem"
            x-component="Radio.Group"
            x-component-props={{
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
            }}
            default={0}
          />
          {/* 
              1.inline 表达式的 x-reaction
              三元表达式 等 一行内能够 书写的简单表达式 推荐使用 inline 的判断
              一旦 可读性开始劣化 推荐使用函数型的reaction
           */}
          <SchemaField.String
            name="username"
            title="用户名"
            required
            x-decorator="FormItem"
            x-component="Input"
            x-reactions={{
              dependencies: ['.is_custom'],
              fulfill: {
                schema: {
                  'x-component-props.prefix': "{{$deps[0] === 0 ? '通用-' : '定制-'}}", //任意层次属性都支持表达式，同时key是支持路径表达式的，可以实现精确操作属性
                },
              },
            }}
          />
          <SchemaField.String
            name="phone"
            title="手机号"
            required
            x-decorator="FormItem"
            x-component="Input"
            x-validator="phone"
            x-reactions={{
              dependencies: ['.is_custom'],
              fulfill: {
                schema: {
                  'x-visible': '{{$deps[0] === 1}}',
                },
              },
            }}
          />

          <SchemaField.Void
            x-reactions={{
              dependencies: ['.is_custom'],
              fulfill: {
                schema: {
                  'x-visible': '{{$deps[0] === 1}}',
                },
                // $deps $self 等 更多内置变量 见 https://react.formilyjs.org/zh-CN/api/shared/schema#%E7%B1%BB%E5%9E%8B
                run: "{{console.log('dev reactions.fulfill.run',{$deps,$self})}}",
              },
            }}
            name="custom_fields"
          >
            <SchemaField.String name="custom_name" title="定制名称" required x-decorator="FormItem" x-component="Input" />
            <SchemaField.String name="custom_id" title="定制id" required x-decorator="FormItem" x-component="Input" />
          </SchemaField.Void>
          {/* 
            2.函数型 的 reaction 
            非三元表达式 或者 逻辑复杂推荐使用函数型的 reaction
          */}
          <SchemaField.Number
            name="choose_type"
            title="选择类型"
            required
            x-decorator="FormItem"
            x-component="Radio.Group"
            x-component-props={{
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
            }}
            default={2}
          />
          <SchemaField.Array
            name="need_service"
            title="所需服务"
            x-decorator="FormItem"
            x-component="Select"
            x-component-props={{
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
            }}
            x-reactions={needServiceReaction}
          />
          <SchemaField.Array
            name="city_id"
            title="城市"
            x-decorator="FormItem"
            x-component="Select"
            x-component-props={{
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
            }}
          />
          <SchemaField.Array
            name="province_id"
            title="省份"
            x-decorator="FormItem"
            x-component="Select"
            x-component-props={{
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
            }}
          />
        </SchemaField>
      </FormLayout>
    </FormProvider>
  )
}
