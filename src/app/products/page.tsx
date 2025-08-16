import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-red-500">Product Page</h1>
      <Button>Self Checkout</Button>
      <Input placeholder="Olá Dev" />
    </div>
  );
};

export default ProductPage;
