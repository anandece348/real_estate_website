// import prologis from '../assest/prologis.png';
// import equinix from '../assest/equinix.png';
// import tower from '../assest/tower.png';
// import realty from '../assest/realty.png';
import './companies.css';
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter company-container">
        <img src='./prologis.png' alt="" />
        <img src='./tower.png' alt="" />
        <img src='./equinix.png' alt="" />
        <img src='./realty.png' alt="" />
      </div>
    </section>
  );
};

export default Companies;
