import { useEffect, useState } from 'react';
import portfolioApiService from '../services/portfolioApiService';

const APIHealthCheck = () => {
  const [status, setStatus] = useState({
    hero: { loading: true, success: false, data: null, error: null },
    about: { loading: true, success: false, data: null, error: null },
    experiences: { loading: true, success: false, data: null, error: null },
    projects: { loading: true, success: false, data: null, error: null },
    contact: { loading: true, success: false, data: null, error: null },
  });

  useEffect(() => {
    const checkAPIs = async () => {
      // Test Hero
      try {
        const heroData = await portfolioApiService.getHeroSection();
        setStatus(prev => ({
          ...prev,
          hero: { loading: false, success: !!heroData, data: heroData, error: null }
        }));
        console.log('✅ Hero API:', heroData);
      } catch (error) {
        setStatus(prev => ({
          ...prev,
          hero: { loading: false, success: false, data: null, error: error.message }
        }));
        console.error('❌ Hero API:', error);
      }

      // Test About
      try {
        const aboutData = await portfolioApiService.getAboutSection();
        setStatus(prev => ({
          ...prev,
          about: { loading: false, success: !!aboutData, data: aboutData, error: null }
        }));
        console.log('✅ About API:', aboutData);
      } catch (error) {
        setStatus(prev => ({
          ...prev,
          about: { loading: false, success: false, data: null, error: error.message }
        }));
        console.error('❌ About API:', error);
      }

      // Test Experiences
      try {
        const expData = await portfolioApiService.getExperiences();
        const experiences = expData?.value || expData;
        setStatus(prev => ({
          ...prev,
          experiences: { loading: false, success: !!experiences, data: experiences, error: null }
        }));
        console.log('✅ Experiences API:', experiences);
      } catch (error) {
        setStatus(prev => ({
          ...prev,
          experiences: { loading: false, success: false, data: null, error: error.message }
        }));
        console.error('❌ Experiences API:', error);
      }

      // Test Projects
      try {
        const projData = await portfolioApiService.getProjects();
        const projects = projData?.value || projData;
        setStatus(prev => ({
          ...prev,
          projects: { loading: false, success: !!projects, data: projects, error: null }
        }));
        console.log('✅ Projects API:', projects);
      } catch (error) {
        setStatus(prev => ({
          ...prev,
          projects: { loading: false, success: false, data: null, error: error.message }
        }));
        console.error('❌ Projects API:', error);
      }

      // Test Contact
      try {
        const contactData = await portfolioApiService.getContactInfo();
        setStatus(prev => ({
          ...prev,
          contact: { loading: false, success: !!contactData, data: contactData, error: null }
        }));
        console.log('✅ Contact API:', contactData);
      } catch (error) {
        setStatus(prev => ({
          ...prev,
          contact: { loading: false, success: false, data: null, error: error.message }
        }));
        console.error('❌ Contact API:', error);
      }
    };

    checkAPIs();
  }, []);

  const allChecksComplete = Object.values(status).every(s => !s.loading);
  const successCount = Object.values(status).filter(s => s.success).length;
  const totalCount = Object.keys(status).length;

  if (!allChecksComplete) {
    return (
      <div style={{ 
        position: 'fixed', 
        top: '10px', 
        right: '10px', 
        background: 'rgba(0,0,0,0.8)', 
        color: 'white', 
        padding: '15px', 
        borderRadius: '8px',
        zIndex: 9999,
        fontSize: '12px'
      }}>
        <div>🔍 Checking API Health...</div>
      </div>
    );
  }

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: successCount === totalCount ? 'rgba(0,128,0,0.9)' : 'rgba(255,0,0,0.9)', 
      color: 'white', 
      padding: '15px', 
      borderRadius: '8px',
      zIndex: 9999,
      fontSize: '12px',
      maxWidth: '300px'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        API Health: {successCount}/{totalCount} ✓
      </div>
      {Object.entries(status).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '5px' }}>
          {value.success ? '✅' : '❌'} {key.charAt(0).toUpperCase() + key.slice(1)}
          {value.error && <div style={{ color: '#ffcccc', fontSize: '10px' }}>{value.error}</div>}
        </div>
      ))}
      <div style={{ marginTop: '10px', fontSize: '10px', opacity: 0.7 }}>
        Check browser console for details
      </div>
    </div>
  );
};

export default APIHealthCheck;
