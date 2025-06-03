import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styled from 'styled-components';

const TestPanel = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border: 2px solid #007bff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: 300px;
  font-size: 14px;
`;

const StatusItem = styled.div`
  margin: 5px 0;
  padding: 5px;
  border-radius: 4px;
  background: ${props => 
    props.status === 'success' ? '#d4edda' : 
    props.status === 'warning' ? '#fff3cd' : 
    props.status === 'error' ? '#f8d7da' : '#f8f9fa'};
`;

const TestButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin: 2px;
  font-size: 12px;
  
  &:hover {
    background: #0056b3;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const LanguageTestPanel = () => {
  const { language, changeLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    // Show panel only in development or when URL contains test parameter
    const showPanel = process.env.NODE_ENV === 'development' || 
                     window.location.search.includes('test=true');
    setIsVisible(showPanel);
  }, []);

  const addResult = (message, status) => {
    setTestResults(prev => [...prev, { message, status, time: new Date().toLocaleTimeString() }]);
  };

  const testWorker = async () => {
    try {
      const response = await fetch('https://country-detection.carter-spinelli.workers.dev/', {
        credentials: 'include'
      });
      const country = response.headers.get('x-visitor-country');
      const text = await response.text();
      
      if (country) {
        addResult(`Worker OK: Country ${country}`, 'success');
      } else {
        addResult(`Worker responded but no country header`, 'warning');
      }
    } catch (error) {
      addResult(`Worker failed: ${error.message}`, 'error');
    }
  };

  const testCookies = () => {
    const cookies = document.cookie.split(';');
    const countryCookie = cookies.find(c => c.trim().startsWith('cf-country='));
    const langCookie = cookies.find(c => c.trim().startsWith('diecastmexico-language='));
    
    if (countryCookie) {
      const country = countryCookie.split('=')[1].trim();
      addResult(`Country cookie: ${country}`, 'success');
    } else {
      addResult(`No country cookie found`, 'warning');
    }
    
    if (langCookie) {
      const lang = langCookie.split('=')[1].trim();
      addResult(`Language preference: ${lang}`, 'success');
    } else {
      addResult(`No saved language preference`, 'warning');
    }
  };

  const clearResults = () => {
    setTestResults([]);
  };

  if (!isVisible) return null;

  return (
    <TestPanel>
      <CloseButton onClick={() => setIsVisible(false)}>×</CloseButton>
      <h4 style={{ margin: '0 0 10px 0', color: '#007bff' }}>Language Detection Test</h4>
      
      <StatusItem status="info">
        <strong>Current Language:</strong> {language}
      </StatusItem>
      
      <div style={{ margin: '10px 0' }}>
        <TestButton onClick={testWorker}>Test Worker</TestButton>
        <TestButton onClick={testCookies}>Check Cookies</TestButton>
        <TestButton onClick={clearResults}>Clear</TestButton>
      </div>
      
      <div style={{ margin: '10px 0' }}>
        <TestButton onClick={() => changeLanguage('en')}>Force English</TestButton>
        <TestButton onClick={() => changeLanguage('es')}>Force Spanish</TestButton>
      </div>
      
      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {testResults.map((result, index) => (
          <StatusItem key={index} status={result.status}>
            <small>{result.time}</small><br />
            {result.message}
          </StatusItem>
        ))}
      </div>
    </TestPanel>
  );
};

export default LanguageTestPanel;