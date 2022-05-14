import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import style from './ProfileForm.module.scss';

interface ValuesForm {
	Name: string,
	User_name: string,
	E_mail: string,
	Street: string,
	City: string,
	Zip_code: string,
	Phone: string,
	Website: string,
	Comment: string,
};

const ProfileForm: React.FC<{ [key: string]: any }> = ({ isSubmitted, ...props }) => {

	const { name, username, email, address, phone, website } = props.profileInfo;


	const onSubmit = (values: ValuesForm): void => {
		console.log(values);
	};

	const initialValues: ValuesForm = {
		Name: '',
		User_name: '',
		E_mail: '',
		Street: '',
		City: '',
		Zip_code: '',
		Phone: '',
		Website: '',
		Comment: '',

	};
	const validationSchema = () => Yup.object({
		Name: Yup.string().required('Required'),
		User_name: Yup.string().required('Required'),
		E_mail: Yup.string().email('Invalid email').required('Required'),
		Street: Yup.string().required('Required'),
		City: Yup.string().required('Required'),
		Zip_code: Yup.string().required('Required'),
		Phone: Yup.string().required('Required'),
		Website: Yup.string().required('Required'),
		Comment: Yup.string(),

	});


	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}

		>
			{formik => {
				return (
					<Form >
						<div className={style.form}>
							<div className={style.form__container}>
								<div>
									<span>Name</span>
									<Field component={'input'} type={'input'} name={'Name'}
										className={formik.errors.Name && formik.touched.Name
											? style.form__container_inputError : ''}
										placeholder={name} disabled={isSubmitted}
									/>

									<ErrorMessage name='Name' component="span" className={style.form__container_error} />


								</div>
								<div>
									<span>
										User name
									</span>
									<Field component={'input'} type={'input'} name={'User_name'}
										placeholder={username} disabled={isSubmitted}
									/>
									<ErrorMessage name='User_name' />
								</div>
								<div>
									<span>
										E-mail
									</span>
									<Field component={'input'} type={'input'} name={'E_mail'}
										placeholder={email} disabled={isSubmitted}
									/>
									<ErrorMessage name='E_mail' />
								</div>
								<div>
									<span>
										Street
									</span>
									<Field component={'input'} type={'input'} name={'Street'}
										placeholder={address.street} disabled={isSubmitted}
									/>
									<ErrorMessage name='Street' />
								</div>
								<div>
									<span>
										City
									</span>
									<Field component={'input'} type={'input'} name={'City'}
										placeholder={address.city} disabled={isSubmitted}
									/>
									<ErrorMessage name='City' />
								</div>
								<div>
									<span>
										Zip code
									</span>
									<Field component={'input'} type={'input'} name={'Zip_code'}
										placeholder={address.zipcode} disabled={isSubmitted}
									/>
									<ErrorMessage name='Zip_code' />
								</div>
								<div>
									<span>
										Phone
									</span>
									<Field component={'input'} type={'input'} name={'Phone'}
										placeholder={phone} disabled={isSubmitted}
									/>
									<ErrorMessage name='Phone' />
								</div>
								<div>
									<span>
										Website
									</span>
									<Field component={'input'} type={'input'} name={'Website'}
										placeholder={website} disabled={isSubmitted}
									/>
									<ErrorMessage name='Website' />
								</div>
								<div>
									<span>
										Comment
									</span>
									<Field className={style.form__container_commentItem} component={'textarea'} type={'textarea'} name={'Comment'}
										placeholder={''} disabled={isSubmitted}
									/>
									<ErrorMessage name='Comment' />
								</div>
							</div>
							<div className={style.form__btn}>
								<button type='submit'
									disabled={isSubmitted || (!formik.isValid && !formik.dirty) || formik.isSubmitting}>
									Отправить
								</button>
							</div>

						</div>
					</Form>)
			}
			}
		</Formik >


	)
};

export default ProfileForm;