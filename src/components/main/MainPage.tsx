import ContactsList from './contacts-list/ContactsList';
import CreateContact from './create-contact/CreateContact';

const MainPage = () => {
  return (
    <>
      <section>
        <div className="container flex">
          <CreateContact />
          <ContactsList />
        </div>
      </section>
    </>
  );
};

export default MainPage;
