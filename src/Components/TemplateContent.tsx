import React, { useState } from 'react';
import InstagramPost from './BannerTemplates/InstagramPost';
import TwitterHeader from './BannerTemplates/TwitterHeader';
import Story from './BannerTemplates/Story';
import { ContentWrapper } from './../Styles/TemplateContent.style';
import { GenerateText, GenerateImage } from './OpenAIGenerator';
import ColorPicker from './ColorPicker';

interface TemplateContentProps {
  selectedTemplate: string;
}

const TemplateContent: React.FC<TemplateContentProps> = ({
  selectedTemplate,
}) => {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [generatedCTA, setGeneratedCTA] = useState('');
  const [inputText, setInputText] = useState('');
  const [buttonColor, setButtonColor] = useState('#e6d283');
  const [bckgrndColor, setBckgrndColor] = useState('#fffbe9');
  const [textColor, setTextColor] = useState('#19170f');

  const handleColorChangeButton = (colorValue: string) => {
    setButtonColor(colorValue);
  };
  const handleColorChangeBckrnd = (colorValue: string) => {
    setBckgrndColor(colorValue);
  };
  const handleColorChangeText = (colorValue: string) => {
    setTextColor(colorValue);
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setGeneratedImage('');
      setGeneratedTitle('');
      setGeneratedText('');
      setGeneratedCTA('');
      setShowContent(false);

      const myImage = await GenerateImage(inputText);
      const { title, text, button } = await GenerateText(inputText);

      setLoading(false);
      if (myImage && title && text && button) {
        setGeneratedImage(myImage);
        setGeneratedTitle(title);
        setGeneratedText(text);
        setGeneratedCTA(button);
        setShowContent(true); // Show content after  generation
      } else {
        console.log('Error generating');
      }
    } catch (error) {
      console.error('Error generating content:', error);
      setLoading(false);
      // Handle error scenario
    }
  };

  const renderTemplateContent = () => {
    switch (selectedTemplate) {
      case 'Instagram':
        return (
          <InstagramPost
            generatedTitle={generatedTitle}
            generatedText={generatedText}
            generatedImage={generatedImage}
            generatedCTA={generatedCTA}
            generatedButtonColor={buttonColor}
            generatedBckgrndColor={bckgrndColor}
            generatedTextColor={textColor}
          />
        );
      case 'Twitter':
        return (
          <TwitterHeader
            generatedTitle={generatedTitle}
            generatedText={generatedText}
            generatedImage={generatedImage}
            generatedCTA={generatedCTA}
            generatedButtonColor={buttonColor}
            generatedBckgrndColor={bckgrndColor}
            generatedTextColor={textColor}
          />
        );
      case 'Story':
        return (
          <Story
            generatedTitle={generatedTitle}
            generatedText={generatedText}
            generatedImage={generatedImage}
            generatedCTA={generatedCTA}
            generatedButtonColor={buttonColor}
            generatedBckgrndColor={bckgrndColor}
            generatedTextColor={textColor}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ContentWrapper>
      <div className="container-fluid mt-4 px-5">
        <div className="row">
          <div className="col-md-3 d-flex flex-column justify-content-evenly">
            <div className="row">
              <div className="col">
                <p>
                  Express your thoughts—we'll transform them visually.
                  <br /> Unleash your imagination!
                </p>
                <textarea
                  className="form-control mb-3"
                  placeholder="Enter text..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)} // Update inputText state
                ></textarea>
                <button
                  className="btn btn-outline-primary btn-lg"
                  onClick={handleGenerate} // Call handleGenerate directly
                >
                  Generate
                </button>
              </div>
            </div>
            {showContent && (
              <div className="row mt-3">
                <h6>Start customizing, pick a color:</h6>
                <div className="col d-flex justify-content-between align-items-center mt-3">
                  <h6>The background:</h6>
                  <ColorPicker
                    value={bckgrndColor}
                    onChange={handleColorChangeBckrnd}
                  />
                </div>
                <div className="col d-flex justify-content-between align-items-center mt-3">
                  <h6>The button:</h6>
                  <ColorPicker
                    value={buttonColor}
                    onChange={handleColorChangeButton}
                  />
                </div>
                <div className="col d-flex justify-content-between align-items-center mt-3">
                  <h6>The text:</h6>
                  <ColorPicker
                    value={textColor}
                    onChange={handleColorChangeText}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="col-md-9">
            <div className="container-generate position-relative">
              {loading && (
                <div className="position-absolute top-50 start-50 translate-middle">
                  <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              {showContent && renderTemplateContent()}
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default TemplateContent;
