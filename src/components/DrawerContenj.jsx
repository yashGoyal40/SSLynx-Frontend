import React from 'react'


import {
  
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";





function DrawerContenj({handleClose,output}) {
  return (
   <>
   <DrawerContent className="color text-white">
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold">
              SSL Certificate Details
            </DrawerTitle>
            <DrawerDescription className="text-lg font-medium">
              Here are the details of the SSL certificate validation.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <div className="space-y-2">
              <div className="text-lg font-semibold">
                Validity:{" "}
                <span
                  className={
                    output.isValid ? "text-green-400" : "text-red-400"
                  }
                >
                  {output.isValid ? "Valid" : "Invalid"}
                </span>
              </div>
              <div className="text-sm">
                Expiration Date:{" "}
                <span className="font-medium">
                  {output.expirationDate}
                </span>
              </div>
              <div className="text-sm">
                Issuer:{" "}
                <span className="font-medium">{output.issuer}</span>
              </div>
              <div className="text-sm">
                Subject:{" "}
                <span className="font-medium">{output.subject}</span>
              </div>
              <div className="text-sm">
                CA Valid:{" "}
                <span
                  className={
                    output.caValid ? "text-green-400" : "text-red-400"
                  }
                >
                  {output.caValid ? "Yes" : "No"}
                </span>
              </div>
              <div className="text-sm">
                Self-Signed:{" "}
                <span
                  className={
                    output.selfSigned
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }
                >
                  {output.selfSigned ? "Yes" : "No"}
                </span>
              </div>
              <div className="text-sm">
                Revoked:{" "}
                <span
                  className={
                    output.revoked ? "text-red-400" : "text-gray-400"
                  }
                >
                  {output.revoked ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button variant="destructive" onClick={handleClose}>
              Close
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
   </>
  )
}

export default DrawerContenj