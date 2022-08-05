import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function LeftSlide() {
  return (
    <div className="absolute top-0 left-0 flex flex-col
                   h-full w-[150px]  bg-gradient-to-r
                   from-[#E6F4F1] via-[#EDFCFF] to-transparent
                   justify-center items-center z-50"
    >
      <button type="button">
        <FaChevronLeft color="#1A8BB5" style={{ height: '190px' }} />
      </button>
    </div>
  );
}

export function RightSide() {
  return (
    <div className="absolute top-0 right-0 flex flex-col
                   h-full w-[150px]  bg-gradient-to-r
                   from-transparent via-[#EDFCFF] to-[#E6F4F1]
                   justify-center items-center z-50"
    >
      <button type="button">
        <FaChevronRight color="#1A8BB5" size={30} />
      </button>
    </div>
  );
}
