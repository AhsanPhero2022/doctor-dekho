import React from "react";

const OurService = () => {
  return (
    <>
      <div>
        <div className="divider py-12 mt-8">
          <h2 className="text-3xl font-bold text-center  ">Our Service</h2>
        </div>
        <img
          src="https://cdn.britannica.com/23/149323-050-15CE7A11/intensive-care-unit.jpg"
          alt=""
        />
      </div>
      {/* ICU */}
      <div>
        <h2 className="text-3xl font-bold text-center pt-8 mt-12">
          ICU Service
        </h2>
        <p className="text-2xl py-12 text-center">
          We offer a variety of preventative care services such as vaccinations,
          immunizations, and wellness exams.
        </p>
        <div className="grid lg:grid-cols-2 gap-5">
          <div>
            <img
              src="https://emch.com.bd/wp-content/uploads/2021/08/icu-4.jpeg"
              alt=""
            />
            <h2 className="text-3xl font-semibold text-center">Appointments</h2>
            <p className="text-center text-xl py-4">
              We offer diagnostics for many acute symptoms such as ear
              infections, <br /> strep throat, flu, colds, and other illnesses.
            </p>
          </div>
          <div>
            <img
              src="https://molekule.com/cdn/shop/articles/Hospital-Patients_2000x.jpg?v=1687471596"
              alt=""
            />
            <h2 className="text-3xl font-semibold text-center">Appointments</h2>
            <p className="text-center text-xl py-4">
              We offer diagnostics for many acute symptoms such as ear
              infections, <br /> strep throat, flu, colds, and other illnesses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
