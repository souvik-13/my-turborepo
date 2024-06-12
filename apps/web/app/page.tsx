"use client";
import { Button } from "@repo/ui/components/ui/button";
import { Label } from "@repo/ui/components/custom/label";
import { useName } from "@repo/store/hooks";
import { balanceAtom } from "@repo/store/atoms";
import { useRecoilState } from "recoil";

export default function Page() {
  const name = useName();
  const [balance, setBalance] = useRecoilState(balanceAtom);
  return (
    <main className="absolute top-0 left-0 w-full h-full grid place-items-center">
      <h1 className="text-4xl font-bold">
        {name} : {balance}
      </h1>
      <Label />
      <Button onClick={() => setBalance((prev) => prev + 1)}>Click me</Button>
    </main>
  );
}
