import Image from "next/image";
import UsersPage from "./users/page";
import './globals.css'; 
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className=" " > 
      <UsersPage/>
    </div>
  );
}
