import React from 'react';
import {
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

function DrawerContentError({ handleClose, output }) {
  const errorMessage = output.error || "An unknown error occurred.";
  
  const showDomainFormatExample = errorMessage === "Invalid domain format.";

  return (
    <DrawerContent className="color text-white">
      <div className="mx-auto w-full max-w-md">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-bold">
            SSL Certificate Details
          </DrawerTitle>
          <DrawerDescription className="text-lg font-medium">
            Error Information
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 text-red-400">
          <div className="text-lg font-semibold">Error:</div>
          <div className="text-sm">{errorMessage}</div>
          {showDomainFormatExample && (
            <div className="text-sm mt-2">
              <p className="font-medium">Example of a valid domain format:</p>
              <ul className="list-disc list-inside ml-4">
                <li>google.com</li>
                <li>facebook.com</li>
                <li>example.org</li>
              </ul>
            </div>
          )}
        </div>
        <DrawerFooter>
          <Button variant="destructive" onClick={handleClose}>
            Close
          </Button>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
}

export default DrawerContentError;
