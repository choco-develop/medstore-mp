/* eslint-disable */
import PropTypes from 'prop-types';

function NavIcon() {
  return (
    <div className="flex justify-center bg-gray-200 rounded-full " />
  );
}
export const rightIcon = NavIcon();
export const leftIcon = NavIcon();

function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
    return null;
  });
  return images;
}
export const images = importAll(require.context('../../assets/images/partneres-company', false, /.png/));

export function MobilePartnerList() {
    return (
      <>
        <div className="flex justify-start items-center lg:p-20">
          <img src={images['most.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
          <img src={images['awash_bank.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        </div>
        <div className="flex justify-start items-center lg:p-20">
          <img src={images['boa.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
          <img src={images['digital_ocean.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        </div>
        <div className="flex justify-start items-center lg:p-20">
          <img src={images['most.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
          <img src={images['dot.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        </div>
        <div className="flex justify-start items-center lg:p-20">
          <img src={images['ethiotele.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
          <img src={images['godaddy.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        </div>
        <div className="flex justify-start items-center lg:p-20">
          <img src={images['moe.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
          <img src={images['my_family.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        </div>
      </>
    )
}

export function LargeScreenList() {
  return (
    <>
      <div className="flex justify-between items-center lg:p-20">
        <img src={images['most.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        <img src={images['awash_bank.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        <img src={images['boa.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        <img src={images['digital_ocean.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        <img src={images['most.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
      </div>
      <div className="flex flex-wrap justify-between items-center lg:p-20">
        <img src={images['dot.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        <img src={images['ethiotele.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        <img src={images['godaddy.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        <img src={images['moe.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
        <img src={images['my_family.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
      </div>
    </>
  );
}

function PartnerList({ isMobile }) {
  console.log('isMobile', isMobile);
  if (isMobile) {
    return <MobilePartnerList />;
  }
  return <LargeScreenList />;
}

PartnerList.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export { PartnerList };
