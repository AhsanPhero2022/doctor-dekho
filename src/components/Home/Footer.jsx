const Footer = () => {
  const date = new Date();

  return (
    <div className="flex  flex-col-reverse md:flex-row justify-center items-center bg-slate-50">
      {/* section 1 */}
      <div className="p-10">
        <img
          className="w-[300px] rounded-full"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/896/807/small/female-doctor-using-her-digital-tablet-free-vector.jpg"
          alt=""
        />
        <p className="text-sm ml-2 mb-4">
          We take the work out of connecting with others so you can accomplish
          more.
        </p>

        <div className="grid grid-flow-col p-2">
          <a href>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          <a
            target="_blank"
            rel="noreferrer "
            href="https://www.facebook.com/abirkhan.mugall/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>

          <a href>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/sharif-ahmad-1088ba235/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href="https://studio.youtube.com/channel/UCHEC5UpjcK2C95Ybetiwy6A/content/playlists"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>
        <p className="text-xs ml-2 my-6 text-gray-500">
          Copyright Sharif Ahmad {date.getFullYear()}
        </p>
      </div>
      {/* section 2 */}
      <footer className="footer grid-cols-2 md:grid-cols-3 md:grid-rows-2 p-10">
        <div>
          <p className="text-lg text-black">About</p>
          <span className="link link-hover">About BreezeTime</span>
          <span className="link link-hover">Contact Sales</span>
          <span className="link link-hover">Newsroom</span>
          <span className="link link-hover">Careers</span>
          <span className="link link-hover">Security</span>
        </div>

        <div>
          <p className="text-lg text-black">Supports</p>
          <span className="link link-hover">Help Center</span>
          <span className="link link-hover">Video Tutorials</span>
          <span className="link link-hover">Cookie Settings</span>
        </div>

        <div>
          <p className="text-lg text-black">Solutions</p>
          <span className="link link-hover">Customer Success</span>
          <span className="link link-hover">Sales</span>
          <span className="link link-hover">Recruiting</span>
          <span className="link link-hover">Information Technology</span>
          <span className="link link-hover">Marketing</span>
        </div>

        <div>
          <p className="text-lg text-black">Add-Ons</p>
          <span className="link link-hover">Download for Chrome</span>
          <span className="link link-hover">Download for Firefox</span>
        </div>

        <div>
          <p className="text-lg text-black">Popular Features</p>
          <span className="link link-hover">Embed BreezeTime</span>
          <span className="link link-hover">Availability</span>
          <span className="link link-hover">Sending Notifications</span>
          <span className="link link-hover">Using BreezeTime Mobile</span>
        </div>

        <div>
          <p className="text-lg text-black">Developers</p>
          <span className="link link-hover">Developer Tools</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
