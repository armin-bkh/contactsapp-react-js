const ContactInput = ({ lbl, ...rest }) => {
    return ( 
        <fieldset className={`border-none`}>
            <label className={`mb-2 font-bold block text-gray-300 font-name`}>{lbl}:</label>
            <input className={`font-email font-medium border-yellow-400 w-full mb-3 rounded-md px-3 py-1 inp outline-none bg-transparent`} {...rest} />
        </fieldset>
     );
}
 
export default ContactInput;