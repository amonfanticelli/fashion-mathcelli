import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: AvailableIcons;
  /**
   * @description Title
   */
  titleCard: string;
  /**
   * @description Description and Image alt text
   */
  //   cardTitle: string;

  description: string;
}

export interface Props {
  features: Feature[];
}

function LatestFeatures(
  { features }: Props,
) {
  return (
    <div class="max-w-full bg-white  flex flex-col items-center justify-center pl-[20px] pr-[20px] pb-[20px] pt-[24px] ">
      <div class="flex flex-col justify-center items-center mb-[6px]">
        <h1 class="mb-[8px] font-albert-sans font-normal font-regular text-2xl leading-8 text-center text-gray-700">
          title
        </h1>
        <p class="font-albert-sans font-normal font-regular text-base leading-6 text-center text-gray-500">
          description
        </p>
      </div>

      <div className="border border-1 border-gray-400 flex flex-wrap pl-[10px] pr-[10px]  md:flex-wrap-none md:w-full">
        {features.map(({ icon: id = "Truck", titleCard }) => (
          <div className="flex flex-col items-center justify-center pt-[16px] pb-[16px] pl-[16px] pr-[16px] border-b border-gray-400 w-1/2 sm:1/4">
            <Icon
              id={id}
              width={30}
              height={30}
              strokeWidth={2}
              className=" mb-[16px]"
            />
            <p class="font-albert-sans font-normal font-regular text-base leading-6 text-center text-gray-700">
              {titleCard}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestFeatures;
