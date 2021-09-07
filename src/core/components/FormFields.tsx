import React from "react";


const SpainFields = (props: any) => {

    const {errors, register} = props;


    return <>

        <div className="col-md-6">
            <label htmlFor="last_name" className="form-label">Social insurance number </label>
            <input type="text"
                   {...register('sin')}
                   className="form-control"
                   id="sin"/>
            <p className='text-danger'>
                <small>  {errors?.sin && errors.sin.message}</small>
            </p>
        </div>
        <div className="col-md-6">
            <label htmlFor="marital" className="form-label">Marital Status </label>
            <select id="marital" defaultValue=''  {...register('marital')} className="form-select">
                <option value='' disabled>Choose...</option>
                <option value='Single'>Single</option>
                <option value='Married'> Married</option>
                <option value='Divorced'> Divorced</option>
                <option value='Widowed'> Widowed</option>
            </select>
            <p className='text-danger'>
                <small>  {errors?.marital && errors.marital.message}</small>
            </p>
        </div>



    </>
}
const GhanaFields = (props: any) => {

    const {errors, register} = props;
    return <>

        <div className="col-md-6">
            <label htmlFor="last_name" className="form-label">Number of Children </label>
            <input type="text"
                   {...register('children')}
                   className="form-control"
                   id="children"/>
            <p className='text-danger'>
                <small>  {errors?.children && errors.children.message}</small>
            </p>
        </div>
        <div className="col-md-6">
            <label htmlFor="marital" className="form-label">Marital Status </label>
            <select defaultValue='' id="marital"  {...register('marital')} className="form-select">
                <option value='' disabled>Choose...</option>
                <option value='Single'>Single</option>
                <option value='Married'> Married</option>
                <option value='Divorced'> Divorced</option>
                <option value='Widowed'> Widowed</option>
            </select>
            <p className='text-danger'>
                <small>  {errors?.marital && errors.marital.message}</small>
            </p>
        </div>

    </>
}
const BrazilFields = (props: any) => {
    const {errors, register} = props;
    return <>

        <div className="col-md-6">
            <label htmlFor="hours" className="form-label">Working hours </label>
            <input type="text"
                   {...register('hours')}
                   className="form-control"
                   id="children"/>
            <p className='text-danger'>
                <small>  {errors?.hours && errors.hours.message}</small>
            </p>
        </div>

    </>
}

export {
    SpainFields,
    GhanaFields,
    BrazilFields
}