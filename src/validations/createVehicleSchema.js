import * as Yup from 'yup';

export default Yup.object().shape({
  plate: Yup.string()
    .matches(/[a-zA-Z]{3}[0-9][0-9A-Z][0-9]{2}/, {
      message: 'Formato válido! Ex: AAA9999',
      excludeEmptyString: true,
    })
    .required('Campo obrigatório'),
});
