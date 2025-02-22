export default function Footer() {
  return (
    <footer className="py-20 text-center  w-full bg-black">
      <div className="container mx-auto">
        <p className="text-mg mb-2">
          &copy; {new Date().getFullYear()} Vicksan. All rights reserved.
        </p>
  
        <p className="mt-4 text-sm opacity-70">
          Designed with ❤️ by Vicken
        </p>
      </div>
    </footer>
  );
}
