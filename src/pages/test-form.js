import React, { useState } from "react";
import Layout from "../components/Layout";
import { useLanguage } from "../context/LanguageContext";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
`;

const Button = styled.button`
  background: #0066cc;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Status = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  background: ${props => 
    props.type === 'success' ? '#d4edda' : 
    props.type === 'error' ? '#f8d7da' : '#cce7ff'};
  color: ${props => 
    props.type === 'success' ? '#155724' : 
    props.type === 'error' ? '#721c24' : '#004085'};
`;

const TestFormPage = () => {
  const { messages } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Submitting...');

    try {
      const response = await fetch('https://formspree.io/f/movwqzpr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Test form submission from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.text();
        console.error('Form submission error:', {
          status: response.status,
          statusText: response.statusText,
          body: errorData
        });
        setStatus(`error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus(`error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Container>
        <h1>Formspree Test Form</h1>
        <p>Use this form to test and verify your Formspree integration.</p>
        
        {status && (
          <Status type={
            status === 'success' ? 'success' : 
            status.includes('error') ? 'error' : 'info'
          }>
            {status === 'success' ? 
              'Form submitted successfully! Check your email.' : 
              status}
          </Status>
        )}

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Test Form'}
          </Button>
        </Form>

        <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd' }}>
          <h3>Alternative: Direct HTML Form (For Initial Verification)</h3>
          <p>If the above form fails, use this basic HTML form to verify your endpoint:</p>
          <form action="https://formspree.io/f/movwqzpr" method="POST" style={{ background: 'white', padding: '1rem', borderRadius: '4px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <label>Name: <input type="text" name="name" required style={{ marginLeft: '0.5rem', padding: '0.5rem' }} /></label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Email: <input type="email" name="email" required style={{ marginLeft: '0.5rem', padding: '0.5rem' }} /></label>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Message: <textarea name="message" required style={{ marginLeft: '0.5rem', padding: '0.5rem' }}></textarea></label>
            </div>
            <input type="hidden" name="_subject" value="Formspree Verification Test" />
            <button type="submit" style={{ background: '#28a745', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px' }}>
              Submit Verification Form
            </button>
          </form>
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8f9fa' }}>
          <h3>Troubleshooting Steps:</h3>
          <ol>
            <li>Fill out and submit this test form</li>
            <li>Check browser console (F12) for detailed error messages</li>
            <li>If you get a 401 error, the form needs verification in Formspree dashboard</li>
            <li>Check your email for both form submissions and Formspree verification emails</li>
          </ol>
        </div>
      </Container>
    </Layout>
  );
};

export default TestFormPage;