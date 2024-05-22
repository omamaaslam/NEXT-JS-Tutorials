"use client";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const backToHome = () => {
    router.push("/");
  };
  return (
    <div className="container-fluid">
       <Button variant="link" onClick={backToHome}>
          Link
        </Button>
      {/* <div className="row mt-3 mb-3">
        <Button variant="link" onClick={backToHome}>
          Link
        </Button>
      </div> */}
      <div className="row mt-5 text-center py-5">
        <h2 className="text-danger text-capitalize">Page Not Found</h2>
      </div>
    </div>
  );
}
