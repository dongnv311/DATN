import React, { useState, useEffect } from 'react';
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

const Card = ({ children }) => <div className="p-6 shadow-lg bg-gray-900 rounded-md text-gray-200 overflow-hidden">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;

const Form = ({ children, onSubmit }) => <form onSubmit={onSubmit}>{children}</form>;
const FormField = ({ children }) => <div className="mb-6">{children}</div>;
const FormLabel = ({ children }) => <label className="block font-semibold mb-2 text-gray-400">{children}</label>;
const FormInput = (props) => <input className="border border-gray-700 rounded p-2 w-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" {...props} />;
const Button = ({ children, ...props }) => <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-all" {...props}>{children}</button>;

const Edit = ({ sectionData, onUpdate }) => {
  const [formData, setFormData] = useState(sectionData);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    console.log('Data updated:', formData);
  };

  return (
    <div className="flex flex-col bg-gray-900 h-full overflow-y-auto">
      <main className="flex-1 p-8">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-6 text-white">Chỉnh Sửa Dữ Liệu</h2>
            <Form onSubmit={handleSubmit}>
              <FormField>
                <FormLabel>ID Bác Sĩ</FormLabel>
                <FormInput name="doctor_id" value={formData.doctor_id || ''} onChange={handleInputChange} />
              </FormField>
              <FormField>
                <FormLabel>ID Phòng Khám</FormLabel>
                <FormInput name="clinic_id" value={formData.clinic_id || ''} onChange={handleInputChange} />
              </FormField>
              <FormField>
                <FormLabel>Thời Gian Bắt Đầu</FormLabel>
                <FormInput type="time" name="time_start" value={formData.time_start || ''} onChange={handleInputChange} />
              </FormField>
              <FormField>
                <FormLabel>Thời Gian Kết Thúc</FormLabel>
                <FormInput type="time" name="time_end" value={formData.time_end || ''} onChange={handleInputChange} />
              </FormField>
              <FormField>
                <FormLabel>Ngày Làm Việc</FormLabel>
                <FormInput type="date" name="working_date" value={formData.working_date || ''} onChange={handleInputChange} />
              </FormField>
              <FormField>
                <FormLabel>Số Lượng Bệnh Nhân Tối Đa</FormLabel>
                <FormInput type="number" name="max_patients" value={formData.max_patients || ''} onChange={handleInputChange} />
              </FormField>
              <Button type="submit">Cập Nhật</Button>
            </Form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

const EdiAdminPage = () => {
  const [activeSection, setActiveSection] = useState('edit');
  const [dataToEdit, setDataToEdit] = useState({
    doctor_id: '123',
    clinic_id: '456',
    time_start: '09:00',
    time_end: '17:00',
    working_date: '2023-12-31',
    max_patients: 10,
  });

  const handleUpdate = (updatedData) => {
    console.log('Updated Data:', updatedData);
    setDataToEdit(updatedData);
  };

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Sửa Lịch Khám" />

      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Chào mừng đến với trang quản lý</h1>

        <div className="bg-gray-800 shadow-xl p-8 rounded-lg">
          {activeSection === 'edit' ? (
            <Edit sectionData={dataToEdit} onUpdate={handleUpdate} />
          ) : (
            <p className="text-gray-300">Chọn một mục để chỉnh sửa</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default EdiAdminPage;
