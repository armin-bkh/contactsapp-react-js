import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactItem = ({ contact }) => {
    const { name, email, id } = contact;
    return ( 
        <Link to={{pathname: `/contact-${id}`, state: { contact }}}>
        <li className={`flex text-gray-300 items-center border-gray-300 py-1`}>
            <FaUserCircle className={`mr-3 font-header`} />
            <div>
                <h1 className={`text-gray-500 mb-1 font-name`}>{name}</h1>
                <h6 className={`text-gray-300 font-email`}>{email}</h6>
            </div>
        </li>
        </Link>
     );
}
 
export default ContactItem;