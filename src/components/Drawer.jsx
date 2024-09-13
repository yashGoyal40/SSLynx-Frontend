import * as React from "react";
import {
  Drawer,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import DrawerContenj from "./DrawerContenj";
import DrawerContentError from "./DrawerContentError";
import Loading from "./Loading";

export function SslDrawer({ domainref }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState(null);

  async function handleSubmit() {
    setLoading(true);
    setError(null);

    const postData = {
      domain: `${domainref.current.value}`
    };
    console.log(postData);

    try {
      const response = await fetch(import.meta.env.VITE_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.error) {
        setError(result.error);
        setResult(result);
      } else {
        setResult(result);
        setError(null);
      }
    } catch (error) {
      console.error('Unable to make request to the server:', error);
      setError(error.message);
      setResult(null);
    } finally {
      setLoading(false);
      domainref.current.value = "";
    }
  }

  const handleOpen = () => {
    setIsOpen(true);
    handleSubmit();
  };

  const handleClose = () => {
    setIsOpen(false);
    setResult(null);
    setError(null);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="destructive"
          size="lg"
          onClick={handleOpen}
        >
          VALIDATE
        </Button>
      </DrawerTrigger>
      {loading && <Loading handleClose={handleClose} />}
      {error ? (
        <DrawerContentError handleClose={handleClose} output={result} />
      ) : (
        result && <DrawerContenj handleClose={handleClose} output={result} />
      )}
    </Drawer>
  );
}
