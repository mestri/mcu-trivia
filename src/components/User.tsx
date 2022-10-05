import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  Text,
  TextInput
} from 'grommet';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { InnerContainer, OuterContainer, UserContainer } from './User.styles';

export const User = () => {
  const { setUser } = useContext(AppContext);

  const [value, setValue] = useState({});

  let navigate = useNavigate();

  const handleSubmitUser = (value: any) => {
    console.log('value: ', value);
    setUser(value.name);
    navigate('/trivia');
  };

  return (
    <UserContainer fill gap="large">
      <Box alignSelf="center">
        <Heading size="small">Trivia MCU</Heading>
      </Box>
      <OuterContainer elevation="medium" fill>
        <InnerContainer fill alignSelf="center" elevation="small" gap="small">
          <Form
            value={value}
            onReset={(event) => console.log(event)}
            onSubmit={({ value }) => handleSubmitUser(value)}
            onChange={(nextValue, { touched }) => {
              setValue(nextValue);
            }}
          >
            <Box gap="large">
              <Box gap="xsmall">
                <Box>
                  <Text>
                    <strong>Name:</strong>
                  </Text>
                </Box>
                <Box>
                  <FormField
                    name="name"
                    required
                    validate={[
                      {
                        regexp: /^[a-z]/i,
                        message: 'name, only letters'
                      },
                      (name) => {
                        if (name && name.length === 1)
                          return 'name, more than 1 letter';
                        return undefined;
                      }
                    ]}
                  >
                    <TextInput name="name" placeholder="Enter your name" />
                  </FormField>
                </Box>
              </Box>

              <Box pad="small" alignSelf="center">
                <Box alignSelf="center" pad={{ left: 'large' }}>
                  <Button primary type="submit" label="Start Trivia"></Button>
                </Box>
              </Box>
            </Box>
          </Form>
        </InnerContainer>
      </OuterContainer>
    </UserContainer>
  );
};
