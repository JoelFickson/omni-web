import React, {useState} from "react";
import DatePicker from "react-datepicker";
import AdminLayout from "../core/layout/AdminLayout";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/main.css"
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {BrazilFields, GhanaFields, SpainFields} from "../core/components/FormFields";


const Admin: React.FC = () => {

    const [dateOfBirth, setDateOfBirth] = React.useState(new Date());

    const [holidayMessage, SetHolidayMessage] = useState("");

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('First name is required'),
        last_name: Yup.string().required('Last name is required'),
        country: Yup.string().required('Please select a country'),

    });


    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<any>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = handleSubmit((data) => {
        const dob = dateOfBirth.toDateString();

        if (country === "Spain" && data.holiday < 30) {
            SetHolidayMessage("Maximum holiday allowance for " + country + " is 40 days")
            return;
        } else {
            SetHolidayMessage("")
        }


        if (country === "Brazil" && data.holiday > 40) {
            SetHolidayMessage("Maximum holiday allowance for " + country + " is 40 days")
            return;
        } else {
            SetHolidayMessage("")
        }
        data.dob = dob;

        console.log(data);


    });


    const [country, setSelectedCountry] = useState();


    const handleCountryChange = (event: any) => {
        setSelectedCountry(event.target.value);
    }

    return <AdminLayout>


        <div className="container">
            <div className="col-md-6 mt-5 mx-auto">
                <h4 className='text-primary p-3'>Add New Employee</h4>
                <form onSubmit={onSubmit} className="row shadow p-5 g-3 rounded">
                    <div className="col-md-6">
                        <label htmlFor="first_name" className="form-label">First Name</label>
                        <input type="text"
                               {...register('first_name')}
                               className="form-control" id="first_name"/>
                        <p className='text-danger'>
                            <small>  {errors?.first_name && errors.first_name.message}</small>
                        </p>

                    </div>
                    <div className="col-md-6">
                        <label htmlFor="last_name" className="form-label">Last Name</label>
                        <input type="text"
                               {...register('last_name')}
                               className="form-control"
                               id="last_name"/>
                        <p className='text-danger'>
                            <small>  {errors?.last_name && errors.last_name.message}</small>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="last_name" className="form-label">Date of Birth</label>
                        <DatePicker
                            className='form-control'
                            selected={dateOfBirth}
                            onChange={(date: Date) => setDateOfBirth(date)}
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="country" className="form-label">Country</label>
                        <select defaultValue='' id="country"  {...register('country')} className="form-select"
                                onChange={handleCountryChange}>
                            <option value=''>Choose...</option>
                            <option value='Spain'>Spain</option>
                            <option value='Ghana'> Ghana</option>
                            <option value='Brazil'> Brazil</option>
                        </select>
                        <p className='text-danger'>
                            <small>  {errors?.country && errors.country.message}</small>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="holiday" className="form-label">Holiday Allowance </label>
                        <input type="number"
                               {...register('holiday', {required: true, min: 30})}
                               className="form-control"
                               id="holidays"/>
                        <p className='text-danger'>
                            <small>  {holidayMessage}</small>
                        </p>
                    </div>


                    {country === 'Spain' ?
                        <SpainFields register={register} errors={errors}/>
                        : country === "Ghana" ?
                            <GhanaFields register={register} errors={errors}/>
                            : country === "Brazil" ?
                                <BrazilFields register={register} errors={errors}/> : ""}


                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>

    </AdminLayout>

}

export default Admin;