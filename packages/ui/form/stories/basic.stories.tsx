import React from 'react'
import Form from '../src'
import Input from '@hi-ui/input'

const FormItem = Form.Item

/**
 * @title 基础用法
 */
export const Basic = () => {
  return (
    <>
      <h1>Basic</h1>
      <div className="form-basic__wrap" style={{ width: 400 }}>
        <Form
          initialValues={{ testInput: 'testInput', testInput2: 'testInput2' }}
          // validateTrigger={['onBlur']}
          labelWidth={80}
          rules={{
            testInput: [
              {
                // name: 'max',
                // strategy: 10,
                max: 10,
                type: 'string',
                message: 'max is 10',
              },
            ],
            testInput2: [
              {
                // name: 'required',
                // strategy: true,
                required: true,
                type: 'string',
                message: 'testInput2 is required',
              },
            ],
          }}
        >
          <FormItem valueType="string" label="用户名">
            <Input onChange={console.log} />
          </FormItem>
          <FormItem field="testInput2" valueType="string" label="密码">
            <Input />
          </FormItem>
        </Form>
      </div>
    </>
  )
}
