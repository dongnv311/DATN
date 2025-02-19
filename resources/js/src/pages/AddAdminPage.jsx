import React, { useState } from 'react';
import { motion } from "framer-motion";
import Header from '../components/common/Header';

const SectionSelector = ({ sections, activeSection, onSectionChange }) => (
  <div className="flex space-x-4 mb-6">
    {sections.map((section) => (
      <button
        key={section.value}
        className={`py-2 px-4 rounded-md transition-all ${activeSection === section.value ? 'bg-blue-500 text-white font-bold' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
        onClick={() => onSectionChange(section.value)}
      >
        {section.label}
      </button>
    ))}
  </div>
);

const Card = ({ children }) => <div className="p-6 shadow-lg bg-gray-900 rounded-md text-gray-200 relative z-10">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;

const Form = ({ children, onSubmit }) => <form onSubmit={onSubmit}>{children}</form>;
const FormField = ({ children }) => <div className="mb-6">{children}</div>;
const FormLabel = ({ children }) => <label className="block font-semibold mb-2 text-gray-400">{children}</label>;
const FormInput = (props) => <input className="border border-gray-700 rounded p-2 w-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" {...props} />;
const Button = ({ children, ...props }) => <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-all" {...props}>{children}</button>;

const Add = () => {
  const [activeSection, setActiveSection] = useState('schedules');
  const [formData, setFormData] = useState({});

  const sections = [
    { value: 'schedules', label: 'Schedules' },
    { value: 'choose_specialty', label: 'Choose Specialty' },
    { value: 'follows', label: 'Follows' },
    { value: 'histories', label: 'Histories' },
    { value: 'invoices', label: 'Invoices' },
    { value: 'payments', label: 'Payments' },
    { value: 'time_working', label: 'Time Working' },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data submitted:', formData);
  };

  return (
    <div className="flex h-full bg-gray-900">
      <main className="flex-1 p-8">
        <SectionSelector sections={sections} activeSection={activeSection} onSectionChange={setActiveSection} />

        {activeSection === 'schedules' && (
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold mb-6 text-white">Thêm Lịch Làm Việc</h2>
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
        )}

        {activeSection === 'choose_specialty' && (
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold mb-6 text-white">Thêm Chuyên Khoa</h2>
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
        )}

        {/* Other sections follow similar structure */}
      </main>
    </div>
  );
};

const MainAdminPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Quản Lý Đặt Lịch Khám" />

      <main className="flex-1 p-8 relative">
        <h1 className="text-4xl font-bold mb-8 text-white">Chào mừng đến với trang quản lý</h1>
        <div className="bg-gray-800 shadow-xl p-8 rounded-lg">
          <Add />
        </div>
      </main>
    </div>
  );
};

export default MainAdminPage;
