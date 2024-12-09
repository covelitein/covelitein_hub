"use client";

import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function JoinClient() {
  return (
    <div className="mt-8 mb-2">
      <AvatarGroup isBordered>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      </AvatarGroup>
      <h4 className="text-center font-semibold mt-2">Become a client now and enjoy exceptional works.</h4>
    </div>
  );
}
