const ContactInput = ({ ...rest }) => {
    return ( 
        <fieldset className={`border-none`}>
            <input className={`font-email border-yellow-400 w-full mb-3 rounded-md px-3 py-1 inp outline-none bg-transparent`} {...rest} />
        </fieldset>
     );
}
 
export default ContactInput;