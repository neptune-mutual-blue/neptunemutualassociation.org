import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <div className="flex mt-8">
        <div className="flex flex-col mr-9">
          <p className="mb-4 text-421FC2">Contact</p>
          <p className="text-421FC2">Office Address</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-4 text-white">
            <a href="mailto:info@.neptunemutualassociation.org">
              info@.neptunemutualassociation.org
            </a>
          </p>
          <div className="max-w-[302px]">
            <p className="text-white">Neptune Mutual Association</p>
            <p className="text-white">Poststrasse 24</p>
            <p className="text-white">6302 Zug</p>
            <p className="text-white">Switzerland</p>
          </div>
        </div>
      </div>
      <p className="mt-8 text-lg text-white">
        Follow this link to see our
        <Link href="/privacy-policy">
          <a className="ml-2 underline hover:text-421FC2">privacy policy</a>
        </Link>
      </p>
    </>
  );
};

export default ContactPage;
