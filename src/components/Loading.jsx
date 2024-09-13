import React from 'react';
import {
  DrawerContent,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import "bootstrap/dist/css/bootstrap.min.css";

function Loading({ handleClose }) {
  return (
    <DrawerContent className="color text-white">
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <div className="spinner-border text-danger mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="pt-5">
        <Button variant="destructive" size="lg" onClick={handleClose} >
          Close
        </Button>
        </div>
      </div>
    </DrawerContent>
  );
}

export default Loading;
