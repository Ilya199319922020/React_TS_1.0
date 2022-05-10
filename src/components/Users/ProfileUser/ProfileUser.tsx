import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';



const ProfileUser: React.FC<any> = (props) => {

	return (
		<div >
			<header>
				<h1>Профиль пользователя</h1>
				<button>Редактировать</button>
			</header>
			<ProfileForm />
		</div>
	);
};

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

const ProfileForm: React.FC<any> = (props) => {
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
		E_mail: Yup.string().required('Required'),
		Street: Yup.string().required('Required'),
		City: Yup.string().required('Required'),
		Zip_code: Yup.string().required('Required'),
		Phone: Yup.string().required('Required'),
		Website: Yup.string().required('Required'),
		Comment: Yup.string().required('Required'),

	});
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{formik => {
				return (
					<Form>
						<div >
							<div>
								<div>
									Name
									<Field component={'input'} type={'input'} name={'Name'}
										placeholder={'сюда значение из пропса'}
									/>
									<ErrorMessage name='newMessageText' />
								</div>								<div>
									User name
									<Field component={'input'} type={'input'} name={'User_name'}
										placeholder={'сюда значение из пропса'}
									/>
									<ErrorMessage name='newMessageText' />
								</div>
								<div>
									E-mail
									<Field component={'input'} type={'input'} name={'E_mail'}
										placeholder={'сюда значение из пропса'}
									/>
									<ErrorMessage name='newMessageText' />
								</div>
								<div>
									Street
									<Field component={'input'} type={'input'} name={'Street'}
										placeholder={'сюда значение из пропса'}
									/>
									<ErrorMessage name='newMessageText' />
								</div>
								<div>
									City
									<Field component={'input'} type={'input'} name={'City'}
										placeholder={'сюда значение из пропса'}
									/>
									<ErrorMessage name='newMessageText' />
								</div>
								<div>
									Zip code
									<Field component={'input'} type={'input'} name={'Zip_code'}
										placeholder={'сюда значение из пропса'}
									/>
									<ErrorMessage name='newMessageText' />
								</div>
								<div>
									Phone
									<Field component={'input'} type={'input'} name={'Phone'}
										placeholder={'сюда значение из пропса'}
									/>
									<ErrorMessage name='newMessageText' />
								</div>
								<div>
									Website
									<Field component={'input'} type={'input'} name={'Website'}
										placeholder={'сюда значение из пропса'}
									/>
									<ErrorMessage name='newMessageText' />
								</div>

								<div>
									Comment
									<Field component={'textarea'} type={'textarea'} name={'Comment'}
										placeholder={'сюда значение из пропса'}
									/>
									<ErrorMessage name='newMessageText' />
								</div>

							</div>
							<button type='submit'
								disabled={(!formik.isValid && !formik.dirty) || formik.isSubmitting}>Отправить</button>
						</div>
					</Form>)
			}
			}
		</Formik>


	)
};


export default ProfileUser;