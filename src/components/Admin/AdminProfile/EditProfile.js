import React from 'react';
import {Modal, Input, Button, Form, Upload, Icon} from 'antd';

export const EditProfile = ({visible, handleOk, handleCancel, user, handleSubmit, handleFile, handleInfo}) => {

  return(
    <Modal footer={[null, null]} title="Edit Profile" visible={visible} onCancel={handleCancel} okText="Edit" cancelText="Cancel">

      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            onChange={handleInfo}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Name"
            defaultValue={user.username}
            name="username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            onChange={handleInfo}
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
            defaultValue={user.email}
            name="email"
          />
        </Form.Item>
        <Form.Item>
          <div className="dropbox">
            <Upload.Dragger onChange={handleFile} >
              <p className="ant-upload-drag-icon"> <Icon type="inbox" /> </p>
              <p className="ant-upload-text">Click or drag your new photo to update it.</p>
            </Upload.Dragger>
          </div>
        </Form.Item>

        <Form.Item >
          <Button style={{width:'100%'}} type="primary" htmlType="submit">Edit</Button>
        </Form.Item>
      </Form>

    </Modal>
  )
};

