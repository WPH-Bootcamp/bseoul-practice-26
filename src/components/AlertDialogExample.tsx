import React, { useEffect, useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button, Flex } from "@radix-ui/themes";

const AlertDialogExample: React.FC = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    // setIsOpenDialog(true);
  }, []);

  const customActionButtonHandler = () => {
    alert("user deleted");
  };

  return (
    <AlertDialog.Root open={isOpenDialog} onOpenChange={setIsOpenDialog}>
      <AlertDialog.Trigger asChild>
        <Button color="red" className="data-[state=open]:bg-red-500">
          Delete account
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
        <AlertDialog.Content className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-[90vw] max-w-lg data-[state=open]:animate-contentShow">
          <AlertDialog.Title>Are you sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialog.Description>
          <Flex direction={"row"} gap={"4"} justify={"end"}>
            <AlertDialog.Cancel asChild>
              <Button type="button">cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button onClick={customActionButtonHandler}>delete</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AlertDialogExample;
