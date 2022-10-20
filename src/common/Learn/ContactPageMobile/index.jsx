const ContactPageMobile = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col mb-4">
        <p className="text-421FC2">Contact</p>
        <p className="text-white cursor-pointer">
          <a
            target="_blank"
            rel="noreferrer nofollow noopener"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5dv2IIO966C1zvnOBI_1QqWCqrQwTTP-tg6Bz_AKlthNU4Q/viewform?usp=sf_link"
          >
            neptunemutualassociation@gmail.com
          </a>
        </p>
      </div>
      <div className="flex flex-col pb-9">
        <p className="text-421FC2">Office Address</p>
        <div className="max-w-[302px]">
          <p className="text-white">Neptune Mutual Association</p>
          <p className="text-white">Poststrasse 24</p>
          <p className="text-white">6302 Zug</p>
          <p className="text-white">Switzerland</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPageMobile;
