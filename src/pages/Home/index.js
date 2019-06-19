import React, { useState } from 'react';
import {
  Container,
  PageHeader,
  QueryBody,
  QueryContainer,
  HeadingPrompt,
  Form,
  StyledTextInput,
  SubmitButton,
} from './styles';

export default function Home() {
  const [query, setQuery] = useState({});
  const { term, location } = query;
  return <Container>You're Home</Container>;
}
