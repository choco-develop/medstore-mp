import {
  Card, Form, Select, DatePicker, Input,
  Upload, Button, Steps,
} from 'antd';
import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
import moment from 'moment';
import COUNTRY_LIST from '../../data/country';

const { Option } = Select;
const { Step } = Steps;

export default function UserInfoRegistration() {
  const onFinish = (values) => {
    console.log('Success', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed', errorInfo);
  };

  const disabledDate = (current) => current && current > moment().endOf('day');

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const [profileImageList, setProfileFileList] = useState([]);

  const onProfileChange = ({ fileList: newFileList }) => {
    setProfileFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const [current, setCurrent] = useState(0);
  const onStepChange = (value) => {
    console.log('onStepChange:', current);
    setCurrent(value);
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 border py-20 gap-10">
      <Steps current={current} onChange={onStepChange} className="px-5">
        <Step title="Basic Info" description="Basic user information" />
        <Step title="Company Info" description="Company information" />
        <Step title="Profile Setting" description="Privacy setting" />
      </Steps>

      <Card title="User Information Registration" bordered className="w-[90%] mx-3">
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          size="large"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Country"
            name="country"
            rules={[
              {
                required: true,
                message: 'Please choose your country',
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={
                (optionA, optionB) => optionA.children.toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
              style={{ maxWidth: 300 }}
            >
              {COUNTRY_LIST.map((item) => (
                <Option
                  key={item.code}
                >
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: 'Please select country',
              },
            ]}
          >
            <Input
              placeholder="Enter city name..."
              className="border-gray-300 outline-none focus:border focus:border-main focus:ring-0"
              style={{
                width: 250,
              }}
            />
          </Form.Item>
          <Form.Item
            label="Sub City"
            name="sub_city"
          >
            <Input
              placeholder="Enter sub city name..."
              className="border-gray-300 outline-none focus:border focus:border-main focus:ring-0"
              style={{ width: 250 }}
            />
          </Form.Item>
          <Form.Item
            label="ID Type"
            name="id_type"
            rules={[
              {
                required: true,
                message: 'Please select id type',
              },
            ]}
          >
            <Select
              placeholder="Select ID Type"
              style={{ width: 200 }}
            >
              <Option value="Kebele ID">National ID</Option>
              <Option value="Passport">Passport</Option>
              <Option value="Driver License">Driver License</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="ID Image"
            name="id_card"
            rules={[
              {
                required: true,
                message: 'Please upload your image',
              },
            ]}
          >
            <ImgCrop rotate>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </Form.Item>
          <Form.Item
            label="Profile Image"
            name="profile_image"
            rules={[
              {
                required: true,
                message: 'Please upload your image',
              },
            ]}
          >
            <ImgCrop rotate>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={profileImageList}
                onChange={onProfileChange}
                onPreview={onPreview}
              >
                {profileImageList.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[
              {
                required: true,
                message: 'Please enter date of birth',
              },
            ]}
          >
            <DatePicker
              disabledDate={disabledDate}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button htmlType="submit" className="border-2 border-main mt-5 hover:bg-main hover:text-white">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
