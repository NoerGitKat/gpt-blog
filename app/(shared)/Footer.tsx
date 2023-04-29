function Footer(): JSX.Element {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <section className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <ul className="basis-1/2 sm:mt-0">
          <li>
            <h4 className="font-bold">GPT BLOG</h4>
          </li>
          <li>
            <p className="my-5">
              Lorem vitae ut augue auctor faucibus eget eget ut libero.
              Elementum purus et arcu massa dictum condimentum. Augue
              scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.
            </p>
          </li>
          <li>
            <p>© GPT Blog All Rights Reserved.</p>
          </li>
        </ul>
        {/* SECOND COLUMN */}
        <ul className="mt-16 basis-1/4 sm:mt-0">
          <li>
            <h4 className="font-bold">Links</h4>
          </li>
          <li>
            <p className="my-5">Massa orci senectus</p>
          </li>
          <li>
            <p className="my-5">Some random link again</p>
          </li>
          <li>
            <p>Ullamcorper vivamus</p>
          </li>
        </ul>
        {/* THIRD COLUMN */}
        <ul className="mt-16 basis-1/4 sm:mt-0">
          <li>
            <h4 className="font-bold">Contact Us</h4>
          </li>
          <li>
            <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          </li>
          <li>
            <p>(333)425-6825</p>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
