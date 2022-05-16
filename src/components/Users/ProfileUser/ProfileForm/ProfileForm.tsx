import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import style from './ProfileForm.module.scss';

interface ValuesForm {
	name: string,
	username: string,
	email: string,
	street: string,
	city: string,
	zipcode: string,
	phone: string,
	website: string,
	comment: string,
};

const ProfileForm: React.FC<{ [key: string]: any }> = ({ isSubmitted, ...props }) => {

	const { name, username, email, address, phone, website } = props.profileInfo;


	const onSubmit = (values: ValuesForm): void => {
		console.log(values);
	};

	const initialValues: ValuesForm = {
		name: name,
		username: username,
		email: email,
		street: address.street,
		city: address.city,
		zipcode: address.zipcode,
		phone: phone,
		website: website,
		comment: '',

	};
	const validationSchema = () => Yup.object({
		name: Yup.string().required('Required'),
		username: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		street: Yup.string().required('Required'),
		city: Yup.string().required('Required'),
		zipcode: Yup.string().required('Required'),
		phone: Yup.string().required('Required'),
		website: Yup.string().required('Required'),
		comment: Yup.string(),

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
									<Field component={'input'} type={'input'} name={'name'} disabled={isSubmitted}
										 
									/>
									<ErrorMessage name='name' />
								</div>
								<div>
									<span>User name</span>
									<Field component={'input'} type={'input'} name={'username'} placeholder={username}
										disabled={isSubmitted} />
									<ErrorMessage name='username' />
								</div>
								<div>
									<span>
										E-mail
									</span>
									<Field component={'input'} type={'input'} name={'email'}
										placeholder={email} disabled={isSubmitted}
									/>
									<ErrorMessage name='email' />
								</div>
								<div>
									<span>
										Street
									</span>
									<Field component={'input'} type={'input'} name={'street'}
										placeholder={address.street} disabled={isSubmitted}
									/>
									<ErrorMessage name='street' />
								</div>
								<div>
									<span>
										City
									</span>
									<Field component={'input'} type={'input'} name={'city'}
										placeholder={address.city} disabled={isSubmitted}
									/>
									<ErrorMessage name='city' />
								</div>
								<div>
									<span>
										Zip code
									</span>
									<Field component={'input'} type={'input'} name={'zipcode'}
										placeholder={address.zipcode} disabled={isSubmitted}
									/>
									<ErrorMessage name='zipcode' />
								</div>
								<div>
									<span>
										Phone
									</span>
									<Field component={'input'} type={'input'} name={'phone'}
										placeholder={phone} disabled={isSubmitted}
									/>
									<ErrorMessage name='phone' />
								</div>
								<div>
									<span>
										Website
									</span>
									<Field component={'input'} type={'input'} name={'website'}
										placeholder={website} disabled={isSubmitted}
									/>
									<ErrorMessage name='website' />
								</div>
								<div>
									<span>
										Comment
									</span>
									<Field className={style.form__container_commentItem} component={'textarea'} type={'textarea'}
										name={'comment'} placeholder={''} disabled={isSubmitted}
									/>
									<ErrorMessage name='comment' />
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