import React from 'react';
import { Form, Input, Button, notification, Card  } from 'antd';
import { signUp,login} from '../../services/auth';
const openNotificationWithIcon = (type: string, message: string, err: string) => {
    if(type == 'success' || type == 'warning' || type == 'info' || type == 'error'){
        notification[type]({ message: message, description: err});
    }
}
    

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
              signUp(validate)
              .then(res => {
                  console.log(res)
                    if(res.status == 200){
                        openNotificationWithIcon('success', 'Success', 'User created successfully');
                    }
              })
              .catch(err => {
                    openNotificationWithIcon('error', 'Error', 'User creation failed');
              })
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