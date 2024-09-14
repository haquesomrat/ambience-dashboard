import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const SocialsListTable = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">Facebook</Label>
            <Input name="url" type="text" value={"facebook"} />
            <Input className="hidden" name="name" value={"Facebook"} />
            <div className="space-x-3">
              <Button>Create</Button>
              <Button>Update</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">Twitter</Label>
            <Input name="url" type="text" value={"twitter"} />
            <Input className="hidden" name="name" value={"Twitter"} />
            <div className="space-x-3">
              <Button>Create</Button>
              <Button>Update</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">Instagram</Label>
            <Input name="url" type="text" value={"instagram"} />
            <Input className="hidden" name="name" value={"Instagram"} />
            <div className="space-x-3">
              <Button>Create</Button>
              <Button>Update</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">LinkedIn</Label>
            <Input name="url" type="text" value={"linkedin"} />
            <Input className="hidden" name="name" value={"LinkedIn"} />
            <div className="space-x-3">
              <Button>Create</Button>
              <Button>Update</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">Pinterest</Label>
            <Input name="url" type="text" value={"pinterest"} />
            <Input className="hidden" name="name" value={"Pinterest"} />
            <div className="space-x-3">
              <Button>Create</Button>
              <Button>Update</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">Google Business</Label>
            <Input name="url" type="text" value={"google business"} />
            <Input className="hidden" name="name" value={"Google Business"} />
            <div className="space-x-3">
              <Button>Create</Button>
              <Button>Update</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SocialsListTable;
