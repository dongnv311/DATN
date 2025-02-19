import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import Header from '../common/Header';

const Tabs = ({ children }) => <div>{children}</div>;
const TabsList = ({ children }) => <div>{children}</div>;
const TabsTrigger = ({ children }) => <button>{children}</button>;
const TabsContent = ({ children }) => <div>{children}</div>;

const Card = ({ children }) => <div className="p-4 shadow-md">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;

const Form = ({ children, onSubmit }) => <form onSubmit={onSubmit}>{children}</form>;
const FormField = ({ children }) => <div className="mb-4">{children}</div>;
const FormLabel = ({ children }) => <label>{children}</label>;
const FormInput = (props) => <input className="border rounded p-2" {...props} />;
const Button = ({ children, ...props }) => <button className="bg-blue-500 text-white p-2 rounded" {...props}>{children}</button>;

export { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardContent, Form, FormField, FormLabel, FormInput, Button };



const Add = () => {
  const [activeTab, setActiveTab] = useState('schedules');
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data submitted:', formData);
  };

  return (
    <div className="flex h-screen">
      <Header title="Thêm Dữ Liệu Mới" />

      <main className="flex-1 p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="schedules">Schedules</TabsTrigger>
            <TabsTrigger value="choose_specialty">Choose Specialty</TabsTrigger>
            <TabsTrigger value="follows">Follows</TabsTrigger>
            <TabsTrigger value="histories">Histories</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="time_working">Time Working</TabsTrigger>
          </TabsList>

          <TabsContent value="schedules">
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold mb-4">Thêm Lịch Làm Việc</h2>
                <Form onSubmit={handleSubmit}>
                  <FormField>
                    <FormLabel>ID Bác Sĩ</FormLabel>
                    <FormInput name="doctor_id" onChange={handleInputChange} />
                  </FormField>
                  <FormField>
                    <FormLabel>ID Phòng Khám</FormLabel>
                    <FormInput name="clinic_id" onChange={handleInputChange} />
                  </FormField>
                  <FormField>
                    <FormLabel>Thời Gian Bắt Đầu</FormLabel>
                    <FormInput type="time" name="time_start" onChange={handleInputChange} />
                  </FormField>
                  <FormField>
                    <FormLabel>Thời Gian Kết Thúc</FormLabel>
                    <FormInput type="time" name="time_end" onChange={handleInputChange} />
                  </FormField>
                  <FormField>
                    <FormLabel>Ngày Làm Việc</FormLabel>
                    <FormInput type="date" name="working_date" onChange={handleInputChange} />
                  </FormField>
                  <FormField>
                    <FormLabel>Số Lượng Bệnh Nhân Tối Đa</FormLabel>
                    <FormInput type="number" name="max_patients" onChange={handleInputChange} />
                  </FormField>
                  <Button type="submit">Lưu</Button>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="choose_specialty">
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold mb-4">Thêm Chuyên Khoa</h2>
                <Form onSubmit={handleSubmit}>
                  <FormField>
                    <FormLabel>ID Người Dùng</FormLabel>
                    <FormInput name="user_id" onChange={handleInputChange} />
                  </FormField>
                  <FormField>
                    <FormLabel>ID Chuyên Khoa</FormLabel>
                    <FormInput name="specialty_id" onChange={handleInputChange} />
                  </FormField>
                  <FormField>
                    <FormLabel>ID Dịch Vụ</FormLabel>
                    <FormInput name="service_id" onChange={handleInputChange} />
                  </FormField>
                  <Button type="submit">Lưu</Button>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="follows">
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold mb-4">Thêm Theo Dõi</h2>
                <Form onSubmit={handleSubmit}>
                  <FormField>
                    <FormLabel>ID Khách</FormLabel>
                    <FormInput name="guest_id" onChange={handleInputChange} />
                  </FormField>
                  <FormField>
                    <FormLabel>Chứng Bệnh</FormLabel>
                    <FormInput name="medical_condition" onChange={handleInputChange} />
                  </FormField>
                  <FormField>
                    <FormLabel>Phác Đồ</FormLabel>
                    <FormInput name="treatment" onChange={handleInputChange} />
                  </FormField>
                  <Button type="submit">Lưu</Button>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="histories">
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold mb-4">Thêm Lịch Sử</h2>
                <Form onSubmit={handleSubmit}>
                  <FormField>
                    <FormLabel>ID Người Dùng</FormLabel>
                    <FormInput name="user_id" onChange={handleInputChange} />
                  </FormField>
                  <FormField>
                    <FormLabel>ID Đặt Lịch</FormLabel>
                    <FormInput name="booking_id" onChange={handleInputChange} />
                  </FormField>
                  <FormField>
                    <FormLabel>Ghi Chú</FormLabel>
                    <FormInput name="notes" onChange={handleInputChange} />
                  </FormField>
                  <Button type="submit">Lưu</Button>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Additional content sections can follow the same pattern for invoices, payments, and time_working */}

        </Tabs>
      </main>
    </div>
  );
};

export default Add;
