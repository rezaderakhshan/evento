import Link from "next/link";

const routes = [
  { path: "/terms-condtions", name: "Terms & Conditions" },
  { path: "/privcay-policy", name: "Privacy Policy" },
];
const Footer = () => {
  return (
    <footer className="mt-auto flex h-16 items-center justify-between border-t border-white/10 px-3 text-xs text-white/25 sm:px-9">
      <small className="text-xs">
        &copy; 2050 ByteGrad. All rights reserved2
      </small>
      <ul className="flex gap-3 sm:gap-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
