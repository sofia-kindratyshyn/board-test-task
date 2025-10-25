import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './NewBoardForm.module.css';
import type { NewBoardFormValues } from '../../types/board';
import { useNavigate } from 'react-router-dom';
import { addBoard } from '../../services/boardTask';

interface AddBoardFormProps {
  initialData?: NewBoardFormValues;
}

const BoardSchema = Yup.object().shape({
  name: Yup.string().required("Обов'язкове поле"),
  description: Yup.string(),
});

export default function NewBoardForm({ initialData }: AddBoardFormProps) {
  const navigate = useNavigate();

  const handleSubmit = async (payload: NewBoardFormValues) => {
    await addBoard(payload);
    navigate('/boards-list');
  };

  return (
    <Formik
      initialValues={{
        _id: initialData?._id,
        name: initialData?.name || '',
        description: initialData?.description || '',
      }}
      validationSchema={BoardSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label className={css.label}>Kanban name</label>
            <Field
              className={`${css.field} ${errors.name && touched.name ? css.errorField : ''}`}
              name="name"
              placeholder="Your Kanban's name"
            />
            <ErrorMessage name="text" component="div" className={css.errorMessage} />
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.label}>Description</label>
            <Field
              as="textarea"
              className={`${css.field} ${css.textInput} ${
                errors.description && touched.description ? css.errorField : ''
              }`}
              name="description"
            />
          </div>

          <button className={css.submitTaskBtn} type="submit">
            Зберегти
          </button>
        </Form>
      )}
    </Formik>
  );
}
