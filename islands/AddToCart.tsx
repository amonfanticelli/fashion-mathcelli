import { tw } from "twind";
import { useState } from "preact/hooks";
import { useCart } from "../data/cartHooks.ts";

// TODO: Is this really called skuId?
interface Props {
  skuId: string;
  sellerId: string;
}

export default function AddToCart({ skuId, sellerId }: Props) {
  const [loading, setLoading] = useState(false);
  const { addItem } = useCart();

  const onAddItem = () => {
    setLoading(true);
    addItem(skuId, sellerId).finally(() => {
      setLoading(false);
    });
  };

  return (
    <button
      class={tw`${
        loading ? "bg-gray-500" : "bg-black"
      } text-white font-bold px-14 py-4 uppercase rounded-3xl text-sm hover:bg-zeeblue`}
      onClick={onAddItem}
    >
      Adicionar
    </button>
  );
}