import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { MdAdd } from 'react-icons/md';

import { getList, createVehicle, deleteVehicle } from '../../services/vehicle';

import MaskedInputText from '../../components/form/MaskedInputText';
import SubmitButton from '../../components/form/SubmitButton';
import VehicleComponent from '../../components/Vehicle';

import createVehicleSchema from '../../validations/createVehicleSchema';

import {
  Container,
  TopNavSection,
  LogoutButton,
  FormSection,
  Title,
  InlineForm,
  VehiclesSection,
  VehiclesContainer,
} from './styles';

const Vehicle = (props) => {
  const [plate, setPlate] = useState('');
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const resVehicles = await getList();

    if (resVehicles) {
      setVehicles(resVehicles);
    }
  }

  const refreshData = () => {
    fetch();
  };

  const handleChange = ({ target }) => {
    setPlate(target.value.toUpperCase());
  };

  const handleSubmit = async (vehicle, { resetForm }) => {
    const resVehicle = await createVehicle(vehicle);
    resVehicle && refreshData();
    resetForm();
  };

  const handleDelete = async (id) => {
    const resDelete = await deleteVehicle(id);

    resDelete && fetch();
  };

  const handleLogout = (e) => {
    e.preventDefault();

    const { history } = props;

    localStorage.clear();
    history.push('/login');
  };

  return (
    <Container>
      <TopNavSection>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </TopNavSection>
      <FormSection>
        <Title>Adicionar Novo Veículo</Title>
        <Formik
          initialValues={{
            plate: '',
          }}
          validationSchema={createVehicleSchema}
          onSubmit={handleSubmit}
        >
          {({ errors }) => (
            <Form>
              <InlineForm>
                <Field
                  mask="aaa9*99"
                  name="plate"
                  value={plate}
                  type="text"
                  component={MaskedInputText}
                  onChange={handleChange}
                  // field={{
                  //   name: 'plate',
                  //   value: plate,
                  //   onChange: handleChange,
                  // }}
                />
                <SubmitButton>
                  <MdAdd color="#fff" />
                </SubmitButton>
              </InlineForm>
            </Form>
          )}
        </Formik>
      </FormSection>
      <VehiclesSection>
        <Title>Veículos</Title>
        <VehiclesContainer>
          {vehicles.map((vehicle) => (
            <VehicleComponent
              {...vehicle}
              onDelete={handleDelete}
              key={vehicle.id}
            />
          ))}
        </VehiclesContainer>
      </VehiclesSection>
    </Container>
  );
};

export default Vehicle;
