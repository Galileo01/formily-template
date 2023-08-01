import React from 'react'
import 'antd/dist/antd.compact.min.css'
import '@formily/antd/esm/style.less'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import {
  Input,
  Radio,
  TreeSelect,
  Cascader,
  Select,
  DatePicker,
  FormItem,
  NumberPicker,
  Switch,
  FormLayout,
  FormGrid,
  FormButtonGroup,
  Submit,
  Space,
} from '@formily/antd'
import { Tabs } from 'antd'

const Title = (props: any) => <h3>{props.text}</h3>

const Cell = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div
      style={{
        backgroundColor: '#AAA',
        color: '#FFF',
        height: 30,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
      }}
    >
      {children}
    </div>
  )
}


const SchemaField = createSchemaField({
  components: {
    Input,
    Select,
    Cascader,
    TreeSelect,
    DatePicker,
    NumberPicker,
    Switch,
    Radio,
    FormItem,
    FormLayout,
    FormGrid,
    FormButtonGroup,
    Submit,
    Space,
    Title,
    Cell
  },
})

const FormItemExample = () => {
  const form = React.useMemo(() => createForm(), [])
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Void x-component="Title" x-component-props={{ text: 'label为空时的展示' }} />
        <SchemaField.String x-decorator="FormItem" x-component="Input" x-decorator-props={{ labelWidth: 300 }} />
        <SchemaField.Void x-component="Title" x-component-props={{ text: '冒号' }} />
        <SchemaField.String title="默认" x-decorator="FormItem" x-component="Input" />
        <SchemaField.String
          title="无冒号(colon=false)"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{
            colon: false,
          }}
        />
        <SchemaField.Void x-component="Title" x-component-props={{ text: '固定宽度设置' }} />
        <SchemaField.String
          title="固定label宽度(labelWidth)"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{ labelWidth: 300 }}
        />
        <SchemaField.String
          title="固定label宽度(labelWidth)溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出"
          description="描述描述"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{ labelWidth: 300, tooltip: '提示提示', tooltipLayout: 'text' }}
        />
        <SchemaField.String
          title="固定label宽度(labelWidth)换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行换行"
          description="描述描述"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{
            labelWidth: 300,
            labelWrap: true,
            tooltip: '提示提示',
          }}
        />
        <SchemaField.String
          title="固定内容宽度(wrapperWidth)"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{ labelWidth: 300, wrapperWidth: 300 }}
        />

        <SchemaField.Void x-component="Title" x-component-props={{ text: '对齐方式设置' }} />
        <SchemaField.String
          title="label左对齐(labelAlign=left)"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{
            labelWidth: 300,
            labelAlign: 'left',
          }}
        />
        <SchemaField.String
          title="label右对齐(labelAlign=right默认)"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{
            labelWidth: 300,
            labelAlign: 'right',
          }}
        />
        <SchemaField.String
          title="内容左对齐(wrapperAlign=left默认)"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{
            labelWidth: 300,
            wrapperWidth: 240,
            wrapperAlign: 'left',
          }}
        />
        <SchemaField.String
          title="内容右对齐(wrapperAlign=right)"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{ labelWidth: 300, wrapperWidth: 240, wrapperAlign: 'right' }}
        />
        <SchemaField.String title="tooltip" x-decorator="FormItem" x-component="Input" x-decorator-props={{ tooltip: 'tooltip' }} />
        <SchemaField.Void x-component="Title" x-component-props={{ text: '是否撑满' }} />
        <SchemaField.String title="默认不撑满(fullness=false)" x-decorator="FormItem" x-component="Select" />
        <SchemaField.String
          title="撑满(fullness=true)"
          x-decorator="FormItem"
          x-component="Select"
          x-decorator-props={{ fullness: true }}
        />
        <SchemaField.Void x-component="Title" x-component-props={{ text: '辅助信息' }} />
        <SchemaField.String
          title="必填星号"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{ asterisk: true, labelCol: 6, wrapperCol: 10 }}
        />
        <SchemaField.String
          title="前缀"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{ addonBefore: 'addonBefore', labelCol: 6, wrapperCol: 10 }}
        />
        <SchemaField.String
          title="后缀"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{ addonAfter: 'addonAfter', labelCol: 6, wrapperCol: 10 }}
        />
        <SchemaField.String
          title="帮助信息feedbackText"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{ feedbackText: 'feedbackText', labelCol: 6, wrapperCol: 10 }}
        />
        <SchemaField.String
          title="额外信息extra"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{ feedbackText: 'feedbackText', extra: 'extra', labelCol: 6, wrapperCol: 10 }}
        />
        <SchemaField.Void x-component="Title" x-component-props={{ text: '内嵌模式' }} />
        <SchemaField.String
          name="input"
          title="Input"
          x-decorator="FormItem"
          x-component="Input"
          required
          x-decorator-props={{ inset: true }}
        />
        <SchemaField.String
          name="Select"
          title="Select"
          x-decorator="FormItem"
          x-component="Select"
          required
          x-decorator-props={{ inset: true }}
        />
        <SchemaField.String
          name="Cascader"
          title="Cascader"
          x-decorator="FormItem"
          x-component="Cascader"
          required
          x-decorator-props={{ inset: true }}
        />
      </SchemaField>
    </FormProvider>
  )
}
const FormLayoutExample = () => {
  const form = React.useMemo(() => createForm(), [])
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Void x-component="Title" x-component-props={{ text: 'vertical布局模式' }} />
        <SchemaField.Void
          x-component="FormLayout"
          x-component-props={{
            labelAlign: 'left',
            labelCol: 6,
            wrapperCol: 10,
            layout: 'vertical',
          }}
        >
          <SchemaField.String name="input-1" title="输入框" x-decorator="FormItem" x-component="Input" required />
          <SchemaField.String name="select-1" title="选择框" x-decorator="FormItem" x-component="Select" required />
        </SchemaField.Void>
        <SchemaField.Void x-component="Title" x-component-props={{ text: 'horizontal布局模式' }} />
        <SchemaField.Void
          x-component="FormLayout"
          x-component-props={{
            labelAlign: 'left',
            labelCol: 2,
            wrapperCol: 8,
            layout: 'horizontal',
          }}
        >
          <SchemaField.String name="input-2" title="输入框" x-decorator="FormItem" x-component="Input" required />
          <SchemaField.String name="select-2" title="选择框" x-decorator="FormItem" x-component="Select" required />
        </SchemaField.Void>
        <SchemaField.Void x-component="Title" x-component-props={{ text: 'inline布局模式' }} />
        <SchemaField.Void
          x-component="FormLayout"
          x-component-props={{
            labelAlign: 'left',
            layout: 'inline',
          }}
        >
          <SchemaField.String name="input-3" title="输入框" x-decorator="FormItem" x-component="Input" required />
          <SchemaField.String name="select-3" title="选择框" x-decorator="FormItem" x-component="Select" required />
        </SchemaField.Void>
      </SchemaField>
    </FormProvider>
  )
}
const FormGridExample = () => {
  const form = React.useMemo(() => createForm(), [])
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Void
          x-component="FormGrid"
          x-component-props={{
            maxColumns: 3,
            minColumns: 2,
          }}
        >
          <SchemaField.String name="aaa" title="aaa" x-decorator="FormItem" x-decorator-props={{ gridSpan: 2 }} x-component="Input" />
          <SchemaField.String name="bbb" title="bbb" x-decorator="FormItem" x-component="Input" />
          <SchemaField.String name="ccc" title="ccc" x-decorator="FormItem" x-component="Input" />
          <SchemaField.String name="ddd" title="ddd" x-decorator="FormItem" x-component="Input" />
          <SchemaField.String name="eee" title="eee" x-decorator="FormItem" x-component="Input" />
          <SchemaField.String name="fff" title="fff" x-decorator="FormItem" x-component="Input" />
          <SchemaField.String name="ggg" title="ggg" x-decorator="FormItem" x-component="Input" />
        </SchemaField.Void>
      </SchemaField>
    </FormProvider>
  )
}
const SpceSubmitResetExample = () => {
  const form = React.useMemo(() => createForm(), [])
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={16}>
        <SchemaField>
          <SchemaField.Void
            title="姓名"
            x-decorator="FormItem"
            x-decorator-props={{
              asterisk: true,
              feedbackLayout: 'none',
            }}
            x-component="Space"
          >
            <SchemaField.String name="firstName" x-decorator="FormItem" x-component="Input" required />
            <SchemaField.String name="lastName" x-decorator="FormItem" x-component="Input" required />
          </SchemaField.Void>
          <SchemaField.Void
            title="文本串联"
            x-decorator="FormItem"
            x-decorator-props={{
              asterisk: true,
              feedbackLayout: 'none',
            }}
            x-component="Space"
          >
            <SchemaField.String
              name="aa"
              x-decorator="FormItem"
              x-component="Input"
              x-decorator-props={{
                addonAfter: '单位',
              }}
              required
            />
            <SchemaField.String
              name="bb"
              x-decorator="FormItem"
              x-component="Input"
              x-decorator-props={{
                addonAfter: '单位',
              }}
              required
            />
            <SchemaField.String
              name="cc"
              x-decorator="FormItem"
              x-component="Input"
              x-decorator-props={{
                addonAfter: '单位',
              }}
              required
            />
          </SchemaField.Void>
          <SchemaField.String
            name="textarea"
            title="文本框"
            x-decorator="FormItem"
            required
            x-component="Input.TextArea"
            x-component-props={{
              style: {
                width: 400,
              },
            }}
          />
        </SchemaField>
        <FormButtonGroup.FormItem>
          <Submit onSubmit={console.log}>提交</Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}

const FormGridReactiveExample= () => {
  const form = React.useMemo(createForm, [])

  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Void
          name="title_1"
          x-decorator="FormItem"
          x-content={<p>maxColumns 3 + minColumns 2</p>}
        />
        <SchemaField.Void
          name="grid_1"
          x-decorator="FormItem"
          x-component="FormGrid"
          x-component-props={{
            maxColumns: 3,
            minColumns: 2,
          }}
        >
          <SchemaField.String
            name="grid_1.cell_1"
            x-decorator="FormItem"
            x-decorator-props={{
              gridSpan: 4,
            }}
            x-component="Cell"
            x-component-props={{
              children: 1,
            }}
          />
          <SchemaField.String
            name="grid_1.cell_2"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 2,
            }}
          />
          <SchemaField.String
            name="grid_1.cell_3"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 3,
            }}
          />
          <SchemaField.String
            name="grid_1.cell_4"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 4,
            }}
          />
          <SchemaField.String
            name="grid_1.cell_5"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 5,
            }}
          />
          <SchemaField.String
            name="grid_1.cell_6"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 6,
            }}
          />
        </SchemaField.Void>
        <SchemaField.Void
          name="title_2"
          x-decorator="FormItem"
          x-content={<p>maxColumns 3</p>}
        />
        <SchemaField.Void
          name="grid_2"
          x-decorator="FormItem"
          x-component="FormGrid"
          x-component-props={{
            maxColumns: 3,
          }}
        >
          <SchemaField.String
            name="grid_2.cell_1"
            x-decorator="FormItem"
            x-decorator-props={{
              gridSpan: 2,
            }}
            x-component="Cell"
            x-component-props={{
              children: 1,
            }}
          />
          <SchemaField.String
            name="grid_2.cell_2"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 2,
            }}
          />
          <SchemaField.String
            name="grid_2.cell_3"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 3,
            }}
          />
          <SchemaField.String
            name="grid_2.cell_4"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 4,
            }}
          />
          <SchemaField.String
            name="grid_2.cell_5"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 5,
            }}
          />
          <SchemaField.String
            name="grid_2.cell_6"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 6,
            }}
          />
        </SchemaField.Void>
        <SchemaField.Void
          name="title_3"
          x-decorator="FormItem"
          x-content={<p>默认情况</p>}
        />
        <SchemaField.Void
          name="grid_3"
          x-decorator="FormItem"
          x-component="FormGrid"
        >
          <SchemaField.String
            name="grid_3.cell_1"
            x-decorator="FormItem"
            x-decorator-props={{
              gridSpan: 2,
            }}
            x-component="Cell"
            x-component-props={{
              children: 1,
            }}
          />
          <SchemaField.String
            name="grid_3.cell_2"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 2,
            }}
          />
          <SchemaField.String
            name="grid_3.cell_3"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 3,
            }}
          />
          <SchemaField.String
            name="grid_3.cell_4"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 4,
            }}
          />
          <SchemaField.String
            name="grid_3.cell_5"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 5,
            }}
          />
          <SchemaField.String
            name="grid_3.cell_6"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 6,
            }}
          />
        </SchemaField.Void>
        <SchemaField.Void
          name="title_4"
          x-decorator="FormItem"
          x-content={<p>maxColumns 2</p>}
        />
        <SchemaField.Void
          name="grid_4"
          x-decorator="FormItem"
          x-component="FormGrid"
          x-component-props={{
            maxColumns: 2,
          }}
        >
          <SchemaField.String
            name="grid_4.cell_1"
            x-decorator="FormItem"
            x-decorator-props={{
              gridSpan: 2,
            }}
            x-component="Cell"
            x-component-props={{
              children: 1,
            }}
          />
          <SchemaField.String
            name="grid_4.cell_2"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 2,
            }}
          />
          <SchemaField.String
            name="grid_4.cell_3"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 3,
            }}
          />
          <SchemaField.String
            name="grid_4.cell_4"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 4,
            }}
          />
          <SchemaField.String
            name="grid_4.cell_5"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 5,
            }}
          />
          <SchemaField.String
            name="grid_4.cell_6"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 6,
            }}
          />
        </SchemaField.Void>
        <SchemaField.Void
          name="title_5"
          x-decorator="FormItem"
          x-content={<p>minWidth 150 +maxColumns 3 </p>}
        />
        <SchemaField.Void
          name="grid_5"
          x-decorator="FormItem"
          x-component="FormGrid"
          x-component-props={{
            maxColumns: 2,
          }}
        >
          <SchemaField.String
            name="grid_5.cell_1"
            x-decorator="FormItem"
            x-decorator-props={{
              gridSpan: 2,
            }}
            x-component="Cell"
            x-component-props={{
              children: 1,
            }}
          />
          <SchemaField.String
            name="grid_5.cell_2"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 2,
            }}
          />
          <SchemaField.String
            name="grid_5.cell_3"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 3,
            }}
          />
          <SchemaField.String
            name="grid_5.cell_4"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 4,
            }}
          />
          <SchemaField.String
            name="grid_5.cell_5"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 5,
            }}
          />
          <SchemaField.String
            name="grid_5.cell_6"
            x-decorator="FormItem"
            x-component="Cell"
            x-component-props={{
              children: 6,
            }}
          />
        </SchemaField.Void>
      </SchemaField>
    </FormProvider>
  )
}

export default function App() {
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="FormItem示例" key="1">
        <FormItemExample />
      </Tabs.TabPane>
      <Tabs.TabPane tab="FormLayout示例" key="2">
        <FormLayoutExample />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Grid示例" key="3">
        <FormGridExample />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Grid响应式示例" key="4">
        <FormGridReactiveExample />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Space Submit Reset等组件示例" key="5">
        <SpceSubmitResetExample />
      </Tabs.TabPane>
    </Tabs>
  )
}


