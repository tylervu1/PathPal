import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 80%;
`;

const Label = styled.label`
  margin-right: 0.5rem;
  text-align: center;
  flex: 1;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Input = styled.input`
  margin-top: 0.5rem;
`;

function SettingsPage() {
  const [name, setName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('555-555-5555');
  const [emergencyContact, setEmergencyContact] = useState('Jane Doe');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmergencyContactChange = (e) => {
    setEmergencyContact(e.target.value);
  };

  return (
    <Container>
      <h1>Settings</h1>
      <InputWrapper>
        <Label>Name:</Label>
        <span>{name}</span>
        <button>Edit</button>
        <Input type="text" value={name} onChange={handleNameChange} />
      </InputWrapper>
      <InputWrapper>
        <Label>Phone Number:</Label>
        <span>{phoneNumber}</span>
        <button>Edit</button>
        <Input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
      </InputWrapper>
      <InputWrapper>
        <Label>Emergency Contact:</Label>
        <span>{emergencyContact}</span>
        <button>Edit</button>
        <Input type="text" value={emergencyContact} onChange={handleEmergencyContactChange} />
      </InputWrapper>
    </Container>
  );
}

export default SettingsPage;
