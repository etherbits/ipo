import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function SignUp() {
  return (
    <Card className="w-[400px] mx-auto my-[20vh]">
      <form className="flex flex-col p-8 gap-6 text-center">
        <h1>Sign Up</h1>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="●●●●●●●●" />
        <Button>Submit</Button>
      </form>
    </Card>
  );
}
