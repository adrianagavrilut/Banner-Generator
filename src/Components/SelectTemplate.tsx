import React from 'react';

interface SelectTemplateProps {
  onSelect: (template: string) => void;
}

const SelectTemplate: React.FC<SelectTemplateProps> = ({ onSelect }) => {
  return (
    <div className="d-flex flex-column align-items-center py-5 mt-5">
      <h4>Select a Template Type:</h4>
      <div className="d-flex flex-wrap justify-content-center m-3">
        <button
          type="button"
          className="btn btn-outline-success btn-lg mb-3 mx-4 px-5"
          onClick={() => onSelect('Instagram')}
        >
          Instagram
        </button>
        <button
          type="button"
          className="btn btn-outline-success btn-lg mb-3 mx-4 px-5"
          style={{ width: '185px' }}
          onClick={() => onSelect('Twitter')}
        >
          Twitter
        </button>
        <button
          type="button"
          className="btn btn-outline-success btn-lg mb-3 mx-4 px-5"
          style={{ width: '185px' }}
          onClick={() => onSelect('Story')}
        >
          Story
        </button>
      </div>
    </div>
  );
};

export default SelectTemplate;
