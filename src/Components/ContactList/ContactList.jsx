const ContactList = ({ contacts }) => {
    return ( 
        <>
        <header className={`border-gray-300 px-3 py-1`}>
            <h1 className={`text-yellow-400 font-header`}>Contacts</h1>
        </header>
        <main>
            <section>
                <ul>
                    { contacts ? 
                        contacts.map((ct) => ) : 
                        <h1>Loading...</h1>
                    }
                </ul>
            </section>
        </main>
        </>
     );
}
 
export default ContactList;