import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const OptionsListTable = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">Site URL</Label>
            <Input name="value" type="text" value={"site-url"} />
            <input hidden type="text" name="name" value={"site-url"} />
            <div className="space-x-3">
              <Button>Create</Button>
              <Button>Update</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">Site Title</Label>
            <Input name="value" type="text" value={"site-title"} />
            <input hidden type="text" name="name" value={"site-title"} />
            <div className="space-x-3">
              <Button>Create</Button>
              <Button>Update</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">Privacy Policy</Label>
            <Input name="value" type="text" value={"privacy-policy"} />
            <input hidden type="text" name="name" value={"privacy-policy"} />
            <div className="space-x-3">
              <Button>Create</Button>
              <Button>Update</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">Contact</Label>
            <Input name="value" type="text" value={"contact"} />
            <input hidden type="text" name="name" value={"contact"} />
            <div className="space-x-3">
              <Button>Create</Button>
              <Button>Update</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">Email</Label>
            <Input name="value" type="text" value={"email"} />
            <input hidden type="text" name="name" value={"email"} />
            <div className="space-x-3">
              <Button>Create</Button>
              <Button>Update</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </form>
        <form action="">
          <div className="col-span-1 space-y-3">
            <Label htmlFor="">Terms & Conditions</Label>
            <Input name="value" type="text" value={"terms-and-conditions"} />
            <input
              hidden
              type="text"
              name="name"
              value={"terms-and-conditions"}
            />
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

export default OptionsListTable;
