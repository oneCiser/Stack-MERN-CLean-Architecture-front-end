import React from 'react';
import { Form, Input, Button, Row, Col, Space, Card  } from 'antd';
import { signUp,login} from '../../services/auth';


function Login(){
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Success:', form.getFieldValue('username'), form.isFieldsValidating([ 'username' ]));
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

      const signUpClick = async () => {
          const validate = await form.validateFields([ 'username' , 'password' ]);
          if(validate){
              signUp(validate);
          }
      }
    return (
        <>
        <div className="space-align-container" style={{backgroundColor:"#ececec"}}>
            <div className="space-align-block " style={{paddingTop:"15%",paddingLeft:"30%",}}>

               
                    
                        <Card title="Login" style={{ width:"50%"}} bordered={false} headStyle={{backgroundColor:"#1890ff"}}>
                        
                        
                        <Form
                            form={form}
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Sign Up
                                </Button>
                                <Button type="primary" onClick={signUpClick}>
                                    Sign In
                                </Button>
                            </Form.Item>
                        </Form>
                    

                        
                        </Card>
  

          
            </div>
        </div>



        </>
    );
}

export default Login;