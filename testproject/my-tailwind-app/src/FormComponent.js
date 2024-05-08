import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FormComponent = () => {
  const initialValues = {
    location: '',
    role: '',
    workExperience: '',
    skills: ''
  };

  const validationSchema = Yup.object().shape({
    location: Yup.string().required('Location is required'),
    role: Yup.string().required('Role is required'),
    workExperience: Yup.string().required('Work Experience is required'),
    skills: Yup.string().required('Skills are required')
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    // You can handle form submission here, e.g., send data to server
    actions.setSubmitting(false);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>NGS Job Portal</Typography>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="location"
                  label="Location"
                  variant="outlined"
                  fullWidth
                  required
                  error={isSubmitting}
                  helperText={isSubmitting ? "Location is required" : ""}
                />
              </Grid>
              {/* Add similar Grid items for other fields */}
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Form>
        )}
      </Formik>
      {/* Search results will be displayed here */}
      <div id="searchResults"></div>
    </Container>
  );
}

export default FormComponent;
