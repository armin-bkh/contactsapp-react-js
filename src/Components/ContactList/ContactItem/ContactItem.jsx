import { FaUserCircle } from 'react-icons/fa';

const ContactItem = ({ contact }) => {
    const { name, email } = contact;
    return ( 
        <li className={`flex border-gray-300`}>
            <faUserCircle className={`mr-3`} />
            <div>
                <h1 className={`text-gray-500 mb-1 font-name`}>{name}</h1>
                <h6 className={`text-gray-300 font-email`}>{email}</h6>
            </div>
        </li>
     );
}
 
export default ContactItem;