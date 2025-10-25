import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './AddTaskForm.module.css';
import type { Task } from '../../types/task';

interface AddTaskFormProps {
  initialData?: Task;
  onSubmit: (values: Task) => void;
}

const TaskSchema = Yup.object().shape({
  title: Yup.string().required('Required field'),
  description: Yup.string(),
  status: Yup.string().oneOf(['ToDo', 'In Progress', 'Done']).required('Choose a status'),
});

export default function AddTaskForm({ initialData, onSubmit }: AddTaskFormProps) {
  return (
    <Formik
      initialValues={{
        title: initialData?.title || '',
        description: initialData?.description || '',
        status: initialData?.status || 'ToDo',
        boardId: initialData?.boardId || '',
      }}
      validationSchema={TaskSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label className={css.label}>New Task</label>
            <Field
              name="title"
              placeholder="Name of your task"
              className={`${css.field} ${errors.title && touched.title ? css.errorField : ''}`}
            />
            <ErrorMessage name="title" component="div" className={css.errorMessage} />
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.label}>Description</label>
            <Field
              as="textarea"
              name="description"
              placeholder="Task description..."
              className={`${css.field} ${
                errors.description && touched.description ? css.errorField : ''
              }`}
            />
            <ErrorMessage name="description" component="div" className={css.errorMessage} />
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.label}>Status</label>
            <Field as="select" name="status" className={css.field}>
              <option value="ToDo">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </Field>
            <ErrorMessage name="status" component="div" className={css.errorMessage} />
          </div>

          <button className={css.submitTaskBtn} type="submit">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
}
