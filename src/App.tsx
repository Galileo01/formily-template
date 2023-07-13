import React from 'react'
import 'antd/dist/antd.compact.min.css'
import '@formily/antd/esm/style.less'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField, FormConsumer } from '@formily/react'
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
  FormStep,
  FormTab,
  FormDialog,
  FormDrawer,
  FormButtonGroup,
  Reset,
  Submit,
  Space,
} from '@formily/antd'
import { Tabs, Button } from 'antd'

const Title = (props: any) => <h3>{props.text}</h3>
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
    FormStep,
    FormTab,
    FormButtonGroup,
    Submit,
    Space,
    Title,
  },
})

const FormStepExample = () => {
  const form = React.useMemo(() => createForm(), [])
  const formStep = React.useMemo(() => FormStep.createFormStep(), [])
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Void x-component="FormStep" x-component-props={{ formStep }}>
          <SchemaField.Void x-component="FormStep.StepPane" x-component-props={{ title: '第一步' }}>
            <SchemaField.String name="aaa" x-decorator="FormItem" required x-component="Input" />
          </SchemaField.Void>
          <SchemaField.Void x-component="FormStep.StepPane" x-component-props={{ title: '第二步' }}>
            <SchemaField.String name="bbb" x-decorator="FormItem" required x-component="Input" />
          </SchemaField.Void>
          <SchemaField.Void type="void" x-component="FormStep.StepPane" x-component-props={{ title: '第三步' }}>
            <SchemaField.String name="ccc" x-decorator="FormItem" required x-component="Input" />
          </SchemaField.Void>
        </SchemaField.Void>
      </SchemaField>
      <FormConsumer>
        {() => (
          <FormButtonGroup>
            <Button
              disabled={!formStep.allowBack}
              onClick={() => {
                formStep.back()
              }}
            >
              上一步
            </Button>
            <Button
              disabled={!formStep.allowNext}
              onClick={() => {
                formStep.next()
              }}
            >
              下一步
            </Button>
            <Button
              disabled={formStep.allowNext}
              onClick={() => {
                formStep.submit(console.log)
              }}
            >
              提交
            </Button>
          </FormButtonGroup>
        )}
      </FormConsumer>
    </FormProvider>
  )
}
const FormTabExample = () => {
  const form = React.useMemo(() => createForm(), [])
  const formTab = React.useMemo(() => FormTab.createFormTab(), [])
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Void type="void" x-component="FormTab" x-component-props={{ formTab }}>
          <SchemaField.Void type="void" name="tab1" x-component="FormTab.TabPane" x-component-props={{ tab: 'A1', key: 'A1' }}>
            <SchemaField.String name="aaa" x-decorator="FormItem" title="AAA" required x-component="Input" />
          </SchemaField.Void>
          <SchemaField.Void name="tab2" x-component="FormTab.TabPane" x-component-props={{ tab: 'A2', key: 'A2' }}>
            <SchemaField.String name="bbb" x-decorator="FormItem" title="BBB" required x-component="Input" />
          </SchemaField.Void>
          <SchemaField.Void name="tab3" x-component="FormTab.TabPane" x-component-props={{ tab: 'A3', key: 'A3' }}>
            <SchemaField.String name="ccc" x-decorator="FormItem" title="CCC" required x-component="Input" />
          </SchemaField.Void>
        </SchemaField.Void>
      </SchemaField>
      <FormButtonGroup.FormItem>
        <Button
          onClick={() => {
            form.query('tab3').take((field) => {
              field.visible = !field.visible
            })
          }}
        >
          显示/隐藏最后一个Tab
        </Button>
        <Button
          onClick={() => {
            formTab.setActiveKey('tab2')
          }}
        >
          切换第二个Tab
        </Button>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup.FormItem>
    </FormProvider>
  )
}
const { createContext, useContext } = React
const Context = createContext('')
const PortalId = '可以传，也可以不传的ID，默认是form-dialog'
const FormDialogExample = () => {
  return (
    <Context.Provider value="自定义上下文可以直接传到弹窗内部，只需要ID一致即可">
      <FormDialog.Portal id={PortalId}>
        <Button
          onClick={() => {
            const dialog = FormDialog('弹窗表单', PortalId, (form) => {
              console.log(useContext(Context))
              return (
                <FormLayout labelCol={6} wrapperCol={10}>
                  <SchemaField>
                    <SchemaField.String name="aaa" required title="输入框1" x-decorator="FormItem" x-component="Input" />
                    <SchemaField.String name="bbb" required title="输入框2" x-decorator="FormItem" x-component="Input" />
                    <SchemaField.String name="ccc" required title="输入框3" x-decorator="FormItem" x-component="Input" />
                    <SchemaField.String name="ddd" required title="输入框4" x-decorator="FormItem" x-component="Input" />
                  </SchemaField>
                  <FormDialog.Footer>
                    <span
                      style={{ marginLeft: 4 }}
                      onClick={() => {
                        dialog.close()
                      }}
                    >
                      扩展文案：{form.values.aaa}(点击关闭弹窗)
                    </span>
                  </FormDialog.Footer>
                </FormLayout>
              )
            })
            dialog
              .forOpen((payload, next) => {
                setTimeout(() => {
                  next({
                    initialValues: {
                      aaa: '123',
                    },
                  })
                }, 1000)
              })
              .forConfirm((payload, next) => {
                setTimeout(() => {
                  console.log(payload)
                  next(payload)
                }, 1000)
              })
              .forCancel((payload, next) => {
                setTimeout(() => {
                  console.log(payload)
                  next(payload)
                }, 1000)
              })
              .open({ pattern: 'editable', initialValues: {} })
              .then(console.log)
              .catch(console.error)
          }}
        >
          点我打开表单
        </Button>
      </FormDialog.Portal>
    </Context.Provider>
  )
}
const FormDrawerExample = () => {
  return (
    <Button
      onClick={() => {
        FormDrawer('抽屉表单', () => {
          return (
            <FormLayout labelCol={6} wrapperCol={10}>
              <SchemaField>
                <SchemaField.String name="aaa" required title="输入框1" x-decorator="FormItem" x-component="Input" />
                <SchemaField.String name="bbb" required title="输入框2" x-decorator="FormItem" x-component="Input" />
                <SchemaField.String name="ccc" required title="输入框3" x-decorator="FormItem" x-component="Input" />
                <SchemaField.String name="ddd" required title="输入框4" x-decorator="FormItem" x-component="Input" />
              </SchemaField>
              <FormDrawer.Extra>
                <FormButtonGroup align="right">
                  <Submit
                    onSubmit={() => {
                      return new Promise((resolve) => {
                        setTimeout(resolve, 1000)
                      })
                    }}
                  >
                    提交
                  </Submit>
                  <Reset>重置</Reset>
                </FormButtonGroup>
              </FormDrawer.Extra>
            </FormLayout>
          )
        })
          .forOpen((props, next) => {
            setTimeout(() => {
              next()
            }, 1000)
          })
          .open({
            initialValues: {
              aaa: '123',
            },
          })
          .then(console.log)
      }}
    >
      点我打开表单
    </Button>
  )
}

export default function App() {
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="FormStep示例" key="1">
        <FormStepExample />
      </Tabs.TabPane>
      <Tabs.TabPane tab="FormTab示例" key="2">
        <FormTabExample />
      </Tabs.TabPane>
      <Tabs.TabPane tab="FormDialog示例" key="3">
        <FormDialogExample />
      </Tabs.TabPane>
      <Tabs.TabPane tab="FormDrawer示例" key="4">
        <FormDrawerExample />
      </Tabs.TabPane>
    </Tabs>
  )
}
