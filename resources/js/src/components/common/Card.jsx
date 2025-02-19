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
