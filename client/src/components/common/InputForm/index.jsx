const InputForm = (props) => {
    const labelName = props.labelName;

    return (
        <div className={`flex flex-col mt-5`}>
            <label className="text-left" htmlFor={labelName}>{labelName}</label>
            <input className="bg-gray-200 rounded-lg py-3 px-8" name={labelName} type={labelName} id={labelName} onChange={props.handleSubmitForm}  />
        </div>
    );
}
 
export default InputForm;