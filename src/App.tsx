import Header from './Components/Header';
import { useState } from 'react';
import SelectTemplate from './Components/SelectTemplate';
import TemplateContent from './Components/TemplateContent';
import './style.css';

export const App = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const handleTemplateSelection = (template: string) => {
    setSelectedTemplate(template);
  };

  const renderContent = () => {
    if (!selectedTemplate) {
      return <SelectTemplate onSelect={handleTemplateSelection} />;
    } else {
      return <TemplateContent selectedTemplate={selectedTemplate} />;
    }
  };

  return (
    <>
      <Header setSelectedTemplate={setSelectedTemplate} />
      {renderContent()}
    </>
  );
};
