'use client'
import styles from './page.module.scss';
import { Button, HeroSection } from '@/components/index';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import Image from 'next/image';
import img from '@/assets/contacts.png'
import * as Yup from 'yup';


interface FormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
}

const validationSchema = Yup.object<FormValues>({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  message: Yup.string().required('Required'),
})


export default function Contacts(): JSX.Element {

  const handleFormSubmision =
    async (values: FormValues, actions: FormikHelpers<FormValues>) => {
      try {
        console.log(values)
        actions.setSubmitting(false)
      }
      catch (error) {
        console.log(error)
      }
    }

  return (
    <HeroSection>
      <div className={styles.container}>

        <div>
          <Image src={img} alt="image-contacts" />
        </div>

        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleFormSubmision}
        >
          {() => (
            <Form className={styles.form}>
              <ul>
                <li>
                  <h1>Contáctanos</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </li>
                <li>
                  <label htmlFor="name">Nombre</label>
                  <Field placeholder="Nombre completo" className={styles.input} type="text" name="name" id="name" />
                </li>
                <li>
                  <label htmlFor="email">Email</label>
                  <Field placeholder="Dirección Email" className={styles.input} type="email" name="email" id="email" />
                </li>
                <li>
                  <label htmlFor="message">Mensage</label>
                  <Field placeholder="¿En qué podemos ayudarte?" className={styles.input} rows={2} as="textarea" name="message" id="message" />
                </li>
                <li>
                  <Button variant="primary">Enviar mensaje</Button>
                </li>
              </ul>
            </Form>
          )}
        </Formik>
      </div>
    </HeroSection>
  )
}
