import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Switch from "@radix-ui/react-switch";
import {
  BellIcon,
  DotsHorizontalIcon,
  CheckIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Anda mendapatkan email baru dari tim.", read: false },
    { id: 2, text: "Pengaturan profil Anda berhasil diperbarui.", read: true },
    { id: 3, text: "Dokumen Anda sudah disetujui.", read: false },
  ]);
  const [pushEnabled, setPushEnabled] = useState(false);

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };
  //   notes
  //   .Root = pembungkus dari semua komponen
  //   .Trigger = komponen yang memicu komponen
  //   .Portal = komponen yang menampung komponen content
  //   .Content = komponen yang menjadi konten komponen

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <BellIcon />{" "}
          {notifications.some((n) => !n.read) && (
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping-once" />
          )}
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <div>
            <h3>notifications</h3>
            <div>
              <span>push</span>
              <Switch.Root
                checked={pushEnabled}
                onCheckedChange={setPushEnabled}
              >
                <Switch.Thumb />
              </Switch.Root>
            </div>
          </div>
          <ul>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <li>
                  <p>{notification.text}</p>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <Button>
                        <DotsHorizontalIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content>
                        <DropdownMenu.Item
                          onSelect={() => markAsRead(notification.id)}
                        >
                          <CheckIcon /> Tandai sebagai dibaca
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                          onSelect={() => deleteNotification(notification.id)}
                        >
                          <TrashIcon /> Hapus
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                </li>
              ))
            ) : (
              <p>Anda belum memiliki notifikasi.</p>
            )}
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default NotificationCenter;
